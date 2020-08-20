import React from 'react';
import {Radar} from 'react-chartjs-2';

import styles from './RadarChart.module.css';
const columnDict = {
    'population' : '인구수',
    "flood_vic": '재난(홍수)',
    "crime_num": '범죄',
    "crime_arr": '체포',
    "fire_cost": '화재',
    "child_car_num": '어린이교통사고',
    "alc_car_num": '음주운전사고',
    "house_price": '집값',
}

const RadarChart = ({oneRegionData}) =>{
    if(!oneRegionData) return <div>지역을 선택하면 Radar가 그려집니다</div>
    const columns = Object.keys(oneRegionData);

    const parsedColumns = columns.filter(c=>(c !== "region_code" && c !== "region_name"))
    const dataOfThat = parsedColumns.map(c=>oneRegionData[c])
    const korColumns = parsedColumns.map(c=>columnDict[c])

    const radarData ={
        labels : korColumns,
        datasets: [
            {
                label : oneRegionData.region_name,
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderColor: 'rgba(255, 0, 0, 1)',
                pointBorderColor: 'rgba(255, 0, 0, 1)',
                pointBackgrounColor: 'rgba(255, 0, 0, 1)',
                data : dataOfThat
            }
        ]
    }
    return(
        <React.Fragment>
            <p> 값 = ( 해당 구의 값 / 25개구 중 최대 값)</p>
            <Radar
                data ={radarData}
            />
        </React.Fragment>

    )
}
export default RadarChart;
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
    console.log(oneRegionData)

    if(!oneRegionData) return <div>지역을 선택하면 Radar가 그려집니다</div>
    const columns = Object.keys(oneRegionData);
    var dataOfThat = []
    columns.forEach(c=>{
        if(c !== 'region_code' && c !== 'region_name')
            dataOfThat.push(oneRegionData[c])
    })
    const korColumns = columns.filter(c=>{
        if(c !== 'region_code' && c !== 'region_name')
            return columnDict[c]
    })
    // const getOneRegion = regionTotal.filter(r=>{
    //     if(r.region_code === specificRegion) return r;
    // })
    // const keyOfThat = Object.keys(getOneRegion[0]);
    // var dataOfThat =[];
    // keyOfThat.forEach(d=>{
    //     if(d !== 'region_code' && d !== 'region_name')
    //         dataOfThat.push(parseInt(getOneRegion[0][d]))
    // })
    // console.log(keyOfThat)
    // console.log(getOneRegion[0])
    // console.log(dataOfThat)
    console.log(dataOfThat)
    const radarData ={
        labels : korColumns,
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgba(255, 0, 0, 1)',
        pointBorderColor: 'rgba(255, 0, 0, 1)',
        pointBackgrounColor: 'rgba(255, 0, 0, 1)',
        datasets: [
            {
                label : oneRegionData.region_name,
                data : dataOfThat
            }
        ]
    }
    return(
        <Radar
            data ={radarData}
        />
    )
}
export default RadarChart;
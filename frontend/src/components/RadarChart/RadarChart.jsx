import React, {useEffect, useState} from 'react';
import { Radar } from 'react-chartjs-2';

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

const RadarChart = ({regionDatasets, drawData}) =>{
    if(!regionDatasets.length) return <div>지역을 선택하면 Radar가 그려집니다</div>
    const columns = Object.keys(regionDatasets[0]);

    const parsedColumns = columns.filter(c=>(c !== "region_code" && c !== "region_name"))
    const korColumns = parsedColumns.map(c=>columnDict[c])
    // const dataOfThat = parsedColumns.map(c=>regionDatasets[c])
    
    var colorCodes= {}
    drawData.map(e=>{
        colorCodes[e.region_code] = e.district_color;
    })

    const dataSets = regionDatasets.map(regionsDataset=>{
        let regionCode = "KR" + regionsDataset.region_code,
            changeOpacity = colorCodes[regionCode].replace(/bb/g, '66')
        return {
            label : regionsDataset.region_name,
            backgroundColor: changeOpacity,
            borderColor: colorCodes[regionCode],
            pointBorderColor: colorCodes[regionCode],
            pointBackgrounColor: colorCodes[regionCode],
            data : parsedColumns.map(c=>regionsDataset[c]),
        }
    })

    const radarData ={
        labels : korColumns,
        datasets : dataSets,
        // datasets: [
        //     {
        //         label : regionDatasets.region_name,
        //         backgroundColor: 'rgba(255, 0, 0, 0.2)',
        //         borderColor: 'rgba(255, 0, 0, 1)',
        //         pointBorderColor: 'rgba(255, 0, 0, 1)',
        //         pointBackgrounColor: 'rgba(255, 0, 0, 1)',
        //         data : dataOfThat
        //     }
        // ]
    }
    return(
        // <div className={styles.container}>
        <>
            <p> 값 = ( 해당 구의 값 / 25개구 중 최대 값)</p>
            <Radar
                data ={radarData}
            />
        </>
        // </div>

    )
}
export default RadarChart;
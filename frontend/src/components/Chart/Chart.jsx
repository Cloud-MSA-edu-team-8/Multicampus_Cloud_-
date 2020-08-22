import React from 'react';
import { Bar } from 'react-chartjs-2';
import {CircularProgress} from '@material-ui/core';

import styles from './Chart.module.css'
const Chart = ({region, category}) =>{
    if(!region || !region.length) 
        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: "column" }}>
                <CircularProgress color="secondary"/>
                <h5>Loading chart..</h5>
            </div>);

    // to not change original one
    // var sorted = region.concat(); 
    // sorted.sort((a,b)=>{
    //     return b.total - a.total;
    // })
    // const columns = sorted.map((data)=>data.region_name)
    // const colors = sorted.map(()=>'red')
    // const data = sorted.map((r)=> r.total)

    region.sort((a,b)=>{
        return b.total - a.total;
    })
    const columns = region.map(r=>r.region_name)
    const colors = region.map(r=>{
        return colorDict[r.region_code] + 'bb'  // hex color code + with opacity
    })
    const data = region.map(r=> r.total)
    
    const barChart =(
        region ?(
            <Bar
                data = {{
                    labels : columns,
                    datasets:[{
                        label : category,
                        backgroundColor: colors,
                        data : data,
                    }]
                }}
                options ={{
                    legend : {display : false},
                    title : {display : true, text: category}
                }}
            />
            ) : null
    )
    
    return(
        <div className={styles.container}>
            {barChart}
        </div>
    )   
}
var colorDict = { 
    'KR11680' : '#ec9376',
    'KR11740' : '#db5653',
    'KR11305' : '#f4a76c',
    'KR11500' : '#ffc767',
    'KR11620' : '#ffae00',
    'KR11215' : '#d5861e',
    'KR11530' : '#875b21',
    'KR11545' : '#d7c969',
    'KR11350' : '#a09136',
    'KR11320' : '#e1cda2',
    'KR11230' : '#186b61',
    'KR11590' : '#9acbd1',
    'KR11440' : '#1b949c',
    'KR11410' : '#a0c8dc',
    'KR11650' : '#52b2d7',
    'KR11200' : '#c2dbf0',
    'KR11290' : '#4e9ad2',
    'KR11710' : '#dea3b2',
    'KR11470' : '#a74e5f',
    'KR11560' : '#c99ea2',
    'KR11170' : '#b9a193',
    'KR11380' : '#b9aa90',
    'KR11110' : '#808a93',
    'KR11140' : '#b7b6b1',
    'KR11260' : '#555a54'
}
export default Chart;
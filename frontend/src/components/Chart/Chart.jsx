import React from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'
import Loading from '../Loading/Loading';

const Chart = ({regions, category, drawData}) =>{
    if(!regions || !regions.length|| !drawData) return <Loading which="chart"/>
    regions.sort((a,b)=>{
        return b.total - a.total;
    })
    var colorCodes = {}
    drawData.map(e=>{
        colorCodes[e.region_code] = e.district_color;
    })
    const columns = regions.map(region=>region.region_name)
    const regionColors = regions.map(region=>colorCodes[region.region_code])
    const data = regions.map(region=> region.total)

    const barChart =(
        regions ?(
            <Bar
                data = {{
                    labels : columns,
                    datasets:[{
                        label : category,
                        backgroundColor: regionColors,
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

export default Chart;
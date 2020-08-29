import React , { useState ,useEffect } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';

import styles from './UseSvg.module.css';
import Loading from '../Loading/Loading';

var min= Number.MAX_VALUE, max = -Number.MAX_VALUE;

const coloring = (num,color) =>{
    const term = (max-min+1) / (6.0);
    if( num <= min + term) return `hsl(${color}, 100%, 95%)`;
    else if(num <= min + (term*2)) return `hsl(${color}, 100%, 90%)`;
    else if(num <= min + (term*3)) return `hsl(${color}, 100%, 80%)`;
    else if(num <= min + (term*4)) return `hsl(${color}, 100%, 70%)`;
    else if(num <= min + (term*5)) return `hsl(${color}, 100%, 60%)`;
    else return `hsl(${color}, 100%, 50%)`;
}
const colorDict = {'red' : 339, 'green' : 129};

const UseSvg = ({regions , category, drawData}) => {

    if(!regions || !regions.length|| !drawData) return <Loading which="map"/>
    
    var region_dict = {}
    drawData = drawData.map((e)=>{
        region_dict[e.region_code] = e.svgd
    })

    regions.forEach(e=>{
        min = Math.min(min,e.total);
        max = Math.max(max,e.total);
    })

    const makeMsg = (name, num) =>{
        var int_num = parseInt(num)
        return (
            <>
                <Typography color="inherit">{name}</Typography>
                <Typography variant="h5">{category}{' '}
                    <NumberFormat thousandSeparator={true} value ={int_num} displayType={'text'}/>
                </Typography>
            </>
        );
    }


    const drawSVG =(
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            {regions.map((region)=>
                        <g key={region.region_name} className={styles.cell}>
                            <Tooltip title={makeMsg(region.region_name,region.total)} arrow placement="right-end">
                                <path className={styles.pt} fill={coloring(region.total, colorDict['red'])} d={region_dict[region.region_code]}/>
                            </Tooltip>
                        </g>)
            }
        </svg>
    )
    return(
        <div className={styles.container}>
            {drawSVG}
        </div>
    )
}

export default UseSvg;

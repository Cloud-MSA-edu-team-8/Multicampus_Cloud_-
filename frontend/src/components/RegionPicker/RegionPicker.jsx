import React, { useEffect, useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';

import styles from './Picker.module.css';

import {fetchOneRegionData} from '../../api';
import Loading from '../Loading/Loading';

const RegionPicker = ({region, handleOneRegionData}) =>{
  const [option, setOption] =useState('');
  if(!region || !region.length) return <Loading which="data"/>

  // const [oneRegion, setOneRegion] = useState([]);

  // useEffect(()=>{
  //   const fetchAPI = async () =>{
  //     setOneRegion(await fetchOneRegionData());
  //   }
  //   fetchAPI();
  // },[setOneRegion])  

  const handleOption = (event) => {
    setOption(event.target.value);
    handleOneRegionData(event);
  };

  var regionDict ={}
  var regionList = region.map((e)=>{ 
      regionDict[e.region_code] = e.region_name;
      return e.region_code;
  })

  return (
          <FormControl className={styles.form}>
              <InputLabel id="cat">지역 선택</InputLabel>
              <Select labelId="cat" onChange={(e)=>{handleOneRegionData(e.target.value)}}>
              {regionList.map(e=><MenuItem value={e}>{regionDict[e]}</MenuItem>)}
              </Select>
          </FormControl>
  )
}
export default RegionPicker

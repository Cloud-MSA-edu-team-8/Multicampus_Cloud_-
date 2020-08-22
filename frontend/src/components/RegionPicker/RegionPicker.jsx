import React, { useEffect, useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select, CircularProgress } from '@material-ui/core';

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
    handleOneRegionData(event.target.value);
  };

  var regionDict ={}
  var regionList = region.map((e)=>{ 
      regionDict[e.region_code] = e.region_name;
      return e.region_code;
  })

  // value = {option}
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

{/* <div className={styles.container}>
<FormControl className={styles.form}>
  <InputLabel id="cat">Select</InputLabel>
  <Select labelId="cat" id="cat" value={option}
    onChange={(e)=>{handleOption(e);}}
    open={open}
    onClose={handleClose}
    onOpen={handleOpen}
      >
    <MenuItem value={'population'}>거주 인구 수</MenuItem>
    <MenuItem value={'crime'}>범죄 발생 건수</MenuItem>    
    <MenuItem value={'house'}>평당 평균 가격</MenuItem>
    <MenuItem value={'children'}>어린이 교통사고</MenuItem>
    <MenuItem value={'fire'}>화재피해</MenuItem>
    <MenuItem value={'flood'}>홍수피해인원</MenuItem>
    <MenuItem value={'alcohol'}>음주운전사고</MenuItem>
  </Select>
</FormControl>
</div> */}
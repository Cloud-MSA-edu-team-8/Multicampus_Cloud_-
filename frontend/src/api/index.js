import axios from 'axios';

var keys = require('./keys.json')
const seoul_key = keys['seoul_key']
export const fetchDjango = async()=>{
    try{
        const res = await axios.get('http://localhost:8000/api/');
        return res.json();
    }catch(e){
        console.log(e);
    }
}

export const fetchTestData = async()=>{
    try{
        const res = await axios.get(`http://openapi.seoul.go.kr:8088/${seoul_key}/json/SPOP_DAILYSUM_JACHI/1/60/`);
        const modData = res.data.SPOP_DAILYSUM_JACHI.row.map((data)=>({
            region_name : data.SIGNGU_NM,
            region_code : "KR" + data.SIGNGU_CODE_SE,
            pop_sum : data.TOT_LVPOP_CO,
        }))
        return modData;
    } catch (e) {
        console.log('seoul_err')
    }
}
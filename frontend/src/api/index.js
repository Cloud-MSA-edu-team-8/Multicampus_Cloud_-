import axios from 'axios';

var keys = require('./keys.json')
const seoul_key = keys['seoul_key']


var backend_url = "http://192.168.0.30:8080/api/"

export const fetchDjango = async()=>{
    try{
        const res = await axios.get('http://localhost:8000/api/');
        return res.json();
    }catch(e){
        console.log(e);
    }
}

export const fetchBackend = async (category) =>{
    // axios.get(backend_url)
    //     .then( res => console.log(res))
    try{
        const res = await axios.get(backend_url+category+'/');
        var modifiedData;
        if(category ==='crime'){
            modifiedData = res.data.map((data)=>({
                region_code : "KR" + data.id,
                region_name : data.area,
                murder : data.muder,
                robber : data.robber,
                rape : data.rape,
                theft : data.theft,
                arrest : data.arrest, // 비율
                violence : data.violence,
                total : data.total, // 모든 범죄 수
                arr_total : data.arr_total // 체포 된 수 
            }))
        }else if(category ==='population'){
            modifiedData = res.data.map((data)=>({
                region_code : "KR" + data.id,
                region_name : data.area,
                total : data.total_total,
            }))
        }else if(category === 'fire'){
            modifiedData = res.data.map((data)=>({
                region_code : "KR" + data.code,
                region_name : data.area,
                total : data.fire_damage,
            }))
        }else if(category === 'alcohol'){
            modifiedData = res.data.map((data)=>({
                region_code : "KR" + data.code,
                region_name : data.area,
                total : data.accident_num,
            }))            
        }else if(category === 'children'){
            modifiedData = res.data.map((data)=>({
                region_code : "KR" + data.code,
                region_name : data.area,
                total : data.accident_num,
            }))
        }else if(category === 'flood'){

        }else if(category === 'house'){

        }
        console.log(modifiedData)
        return modifiedData;

    } catch (e) {
        console.log(e)
    }
}

export const fetchTestData = async()=>{
    try{
        const res = await axios.get(`http://openapi.seoul.go.kr:8088/${seoul_key}/json/SPOP_DAILYSUM_JACHI/1/60/`);
        const modData = res.data.SPOP_DAILYSUM_JACHI.row.map((data)=>({
            region_name : data.SIGNGU_NM,
            region_code : "KR" + data.SIGNGU_CODE_SE,
            total : data.TOT_LVPOP_CO,
        }))
        return modData;
    } catch (e) {
        console.log('seoul_err')
    }
}
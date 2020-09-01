import axios from 'axios';

var keys = require('./keys.json')
const seoul_key = keys['seoul_key']

// var backend_url = "http://192.168.0.30:8080/api/"
// const backend_url = "http://127.0.0.1:8000/api/";
const baseURL = "https://django-react-safehome.herokuapp.com/api/"

export const fetchCategoryData = async (category) =>{
    try{
        const res = await axios.get(baseURL+category);
        var modifiedData;
        if(category ==='crime'){
            modifiedData = res.data.map((data)=>({
                region_code : data.region_code,
                region_name : data.region_name,
                murder : data.murder,
                robber : data.robber,
                rape : data.rape,
                theft : data.theft,
                arrest : data.arrest +'%', // 비율
                violence : data.violence,
                total : data.total, // 모든 범죄 수
                arr_total : data.arr_total // 체포 된 수 
            }))
        }else if(category ==='population'){
            modifiedData = res.data.map((data)=>({
                region_code : data.region_code,
                region_name : data.region_name,
                household : data.household,
                total_male : data.total_male,
                total_female : data.total_female,
                for_male : data.for_male,
                for_female : data.for_female,
                total : data.total_total,
            }))
        }else if(category === 'fire'){
            modifiedData = res.data.map((data)=>({
                region_code : data.region_code,
                region_name : data.region_name,
                total : data.fire_damage,
            }))
        }else if(category === 'alcohol'){
            modifiedData = res.data.map((data)=>({
                region_code : data.region_code,
                region_name : data.region_name,
                dead_num : data.dead_num,
                casual_num : data.casual_num,
                casual_rate : data.casual_rate,
                acc_rate : data.acc_rate,
                total : data.accident_num,
            }))
        }else if(category === 'children'){
            modifiedData = res.data.map((data)=>({
                region_code : data.region_code,
                region_name : data.region_name,
                accident_rate : data.accident_rate,
                safe_num : data.safe_num,
                safe_rate : data.safe_rate,
                total : data.accident_num,
            }))
        }else if(category === 'flood'){
            modifiedData = res.data.map((data)=>({
                region_code : data.region_code,
                region_name : data.region_name,
                total : data.people,
            }))
        }else if(category === 'house'){
            modifiedData = res.data.map((data)=>({
                region_code : data.region_code,
                region_name : data.region_name,
                total : data.price,
            }))
        }
        console.log(modifiedData)
        return modifiedData;

    } catch (error) { /*  Official, handling error */
        // Error 
        if (error.response) {
            /*
            * The request was made and the server responded with a
            * status code that falls out of the range of 2xx
            */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            /*
            * The request was made but no response was received, `error.request`
            * is an instance of XMLHttpRequest in the browser and an instance
            * of http.ClientRequest in Node.js
            */
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error);
        // return 'Some error occured!'
        throw error
    }
}
export const fetchOneRegionData = async (region) => {
    // const regionCode = region.replace(/([A-Z])/g,'');
    try{
        const res = await axios.get(baseURL + 'rate/' + region)
        const d = res.data
        const modifiedData = {
                // ...d,
                region_code : d.areas,
                region_name : d.area,
                population : d.population,
                flood_vic : d.flood_vic,
                crime_num : d.crime_num,
                crime_arr : d.crime_arr,
                fire_cost : d.fire_cost,
                child_car_num : d.child_car_num,
                alc_car_num : d.alc_car_num,
                house_price : d.house_price,
        }
        return modifiedData;
    } catch (e) {
        console.log(e)
    }
    
}

export const fetchRegionDrawData = async() =>{
    try{
        const res = await axios.get(baseURL + 'draw_data/')
        return res.data;
    } catch (e){
        console.log(e)
    }
}
export const fetchNewsData = async () =>{
    try{
        const res = await axios.get(baseURL+'news/')
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const fetchTestData = async()=>{
    try{
        const res = await axios.get(`http://openapi.seoul.go.kr:8088/${seoul_key}/json/SPOP_DAILYSUM_JACHI/1/15/`);
        const modData = res.data.SPOP_DAILYSUM_JACHI.row.map((data)=>({
            region_code : "KR" + data.SIGNGU_CODE_SE,
            region_name : data.SIGNGU_NM,
            total : data.TOT_LVPOP_CO,
        }))
        return modData;
    } catch (e) {
        console.log('seoul_err')
    }
}
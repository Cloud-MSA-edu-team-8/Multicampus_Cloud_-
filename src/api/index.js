import axios from 'axios';

var keys = require('./keys.json')
const seoul_key = keys['seoul_key']

const baseURL = "https://django-react-safehome.herokuapp.com/api/"

export const fetchCategoryData = async (category) =>{
    try{
        const res = await axios.get(baseURL+category);
        var modifiedData
        if(category ==='crime'){
            modifiedData = res.data
        }
        else if(category ==='population'){
            modifiedData = res.data.map(data=>({
                region_code: data.region_code,
                household: data.household,
                total_male: data.total_male,
                total_female: data.total_female,
                total: data.total_total,
                for_male: data.for_male,
                for_female: data.for_female,
            }))
        }
        else if(category === 'fire'){
            modifiedData = res.data
            res.data.forEach((data,i)=>{
                modifiedData[i].total = data.fire_damage
                delete modifiedData[i].fire_damage
            })
        }
        else if(category === 'alcohol'){
            modifiedData = res.data

            res.data.forEach((data,i)=>{
                modifiedData[i].total = data.accident_num
                delete modifiedData[i].accident_num
            })
        }
        else if(category === 'children'){
            modifiedData = res.data.map(data=>({
                region_code : data.region_code,
                safe_num : data.safe_num,
                total : data.accident_num
            }))
        }
        else if(category === 'flood'){
            modifiedData = res.data
            res.data.forEach((data,i)=>{
                modifiedData[i].total = data.people
                delete modifiedData[i].people
            })
        }
        else if(category === 'house'){
            modifiedData = res.data
            res.data.forEach((data,i)=>{
                modifiedData[i].total = data.price
                delete modifiedData[i].price
            })
        }
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
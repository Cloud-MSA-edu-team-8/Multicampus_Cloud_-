import axios from 'axios';

var keys = require('./keys.json')
const seoul_key = keys['seoul_key']

// var backend_url = "http://192.168.0.30:8080/api/"
// const backend_url = "http://127.0.0.1:8000/api/";
const backend_url = "https://django-react-safehome.herokuapp.com/api/"

export const fetchCategoryData = async (category) =>{
    try{
        const res = await axios.get(backend_url+category);
        var modifiedData;
        if(category ==='crime'){
            modifiedData = res.data.map((data)=>({
                region_code : data.areas,
                region_name : data.area,
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
                region_code : data.areas,
                region_name : data.area,
                household : data.household,
                total_male : data.total_male,
                total_female : data.total_female,
                for_male : data.for_male,
                for_female : data.for_female,
                total : data.total_total,
            }))
        }else if(category === 'fire'){
            modifiedData = res.data.map((data)=>({
                region_code : data.areas,
                region_name : data.area,
                total : data.fire_damage,
            }))
        }else if(category === 'alcohol'){
            modifiedData = res.data.map((data)=>({
                region_code : data.areas,
                region_name : data.area,
                total : data.accident_num,
            }))
        }else if(category === 'children'){
            modifiedData = res.data.map((data)=>({
                region_code : data.areas,
                region_name : data.area,
                total : data.accident_num,
            }))
        }else if(category === 'flood'){
            modifiedData = res.data.map((data)=>({
                region_code : data.areas,
                region_name : data.area,
                total : data.people,
            }))
        }else if(category === 'house'){
            modifiedData = res.data.map((data)=>({
                region_code : data.areas,
                region_name : data.area,
                total : data.price,
            }))
        }
        // console.log(modifiedData)
        return modifiedData;

    } catch (e) {
        console.log(e)
    }
}
export const fetchOneRegionData = async (region) => {
    // const regionCode = region.replace(/([A-Z])/g,'');
    const specific_url =  backend_url + 'rate/' + region;
    try{
        const res = await axios.get(specific_url);
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
        const res = await axios.get(backend_url + 'svgd/')
        const modifiedData = res.data.map(d=>({
            // region_code : d.id,
            // district_color : d.colour,
            // svgd : d.location,
            region_code : d.location,
            district_color : d.code,
            svgd : d.colour,
        }))
        return modifiedData;
    } catch (e){
        console.log(e)
    }
}
export const fetchNewsData = async () =>{
    try{
        const res = await axios.get(backend_url+'news/')
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
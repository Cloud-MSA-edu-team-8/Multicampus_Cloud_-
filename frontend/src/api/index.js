import axios from 'axios';

export const fetchDjango = async()=>{
    try{
        const res = await fetch('http://localhost:8000/api/');
        return res.json();
    }catch(e){
        console.log(e);
    }
}
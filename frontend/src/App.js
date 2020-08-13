import React from 'react';
import { Posts, MapDraw, VectorLayersExample } from './components'

import styles from './App.module.css';
// import Choropleth from './components/Choropleth/Choropleth';

class App extends React.Component{
    state = {
        posts  : [],
        geojson : '',
    };
    async componentDidMount(){
        try {
            const res = await fetch('http://localhost:8000/api/')
            const posts = await res.json();
            this.setState({
                posts : posts 
            });
        } catch (e) {
            console.log(e);
        }
    }
    // getGeoJson = async () =>{
    //     try{
    //         const { data: {geojson} } = await axios.get(url)
    //     }
    // }
    // console.log(geodata)
    render() {
        const { posts, geojson } = this.state; // this is better to use 
        // console.log(geojson)
        return (
            <div>
            <div className ={ styles.container }>
                <h1>POSTS TEST</h1>
                <Posts posts={ posts }/>
            </div>
            <MapDraw/>
            </div>
        )
    }
}

export default App;
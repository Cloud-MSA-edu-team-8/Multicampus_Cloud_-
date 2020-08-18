import React from 'react';
import { Posts, MapDraw, VectorLayersExample, Goo_comp, DrawGoogleMap, UseSvg
        ,Picker, DrawTable } from './components'

import { fetchDjango, fetchTestData, fetchBackend } from './api';

import styles from './App.module.css';
import title_img from './images/title.png';

class App extends React.Component{
    state = {
        posts  : [],
        region : [],
        category :'',
    };
    async componentDidMount(){
        // const posts = await fetchDjango();
        // this.setState({
        //     posts : posts,
        // });
    }

    fetchFromBack = async()=>{
        try{
            const test = await fetchBackend();
            console.log(test);
        } catch (e) {
            console.log(e);
        }
    }
    handleCategoryChange = async (e) =>{
        var category = e.target.value,
            name = e.nativeEvent.srcElement.innerText;
        try{
            const data = await fetchBackend(category);
            this.setState({
                region : data,
                category :name,
            })
        }catch(e){

        }
    };
    render() {
        const { region, category } = this.state; // this is better to use 
        return (
            <div className={styles.container}>
                <img src={title_img} className={styles.img}/>
                <Picker handleFunc = {this.handleCategoryChange}/>
                <UseSvg region={region} category = {category}/>
                {/* <Goo_comp/> */}
                {/* <Posts posts={ posts }/> */}
                {/* <MapDraw/> */}
                {/* <DrawGoogleMap /> */}
                {/* <DrawTable data={region} /> */}
            </div>
        )
    }
}

export default App;
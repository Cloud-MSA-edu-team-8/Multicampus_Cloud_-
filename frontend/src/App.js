import React from 'react';
import { Posts, MapDraw, VectorLayersExample, Goo_comp, DrawGoogleMap, UseSvg
        ,Picker } from './components'

import { fetchDjango, fetchTestData } from './api';

import styles from './App.module.css';

class App extends React.Component{
    state = {
        posts  : [],
        tData : [],
    };
    async componentDidMount(){
        const posts = await fetchDjango();
        this.setState({
            posts : posts,
        });
    }
    fetchedTest = async(domain) =>{
        try{
            console.log(domain)
            const tData = await fetchTestData();
            this.setState({
                tData : tData
            });
        } catch (e) {

        }
    }

    render() {
        const { posts, tData } = this.state; // this is better to use 
        return (
            <div>
                <div className ={ styles.container }>
                    <Picker fetchedTest = {this.fetchedTest}/>
                    {/* <Goo_comp/> */}
                    {/* <Posts posts={ posts }/> */}
                </div>
                {/* <MapDraw/> */}
                {/* <DrawGoogleMap /> */}
                <UseSvg/>
            </div>
        )
    }
}

export default App;
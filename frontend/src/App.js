import React from 'react';
import { Posts, MapDraw, VectorLayersExample, Goo_comp, DrawGoogleMap } from './components'

import { fetchDjango } from './api';

import styles from './App.module.css';

class App extends React.Component{
    state = {
        posts  : [],
    };
    async componentDidMount(){
        const posts = await fetchDjango();
        this.setState({
            posts : posts 
        });
    }

    render() {
        const { posts } = this.state; // this is better to use 
        return (
            <div>
                <div className ={ styles.container }>
                    <Goo_comp/>
                    <h1>POSTS TEST</h1>
                    <Posts posts={ posts }/>
                </div>
                <MapDraw/>
                {/* <DrawGoogleMap /> */}
            </div>
        )
    }
}

export default App;
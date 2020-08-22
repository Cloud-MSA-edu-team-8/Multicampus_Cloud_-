import React from 'react';
import { UseSvg,Picker, DrawTable, Chart,MainHeader ,RadarChart, RegionPicker } from './components'

import { fetchTestData, fetchDjango, fetchBackend, fetchOneRegionData } from './api';

import styles from './App.module.css';

class App extends React.Component{
    state = {
        region : [],
        category :'',
        oneRegionData : null,
    };
    async componentDidMount(){
        try{
            const data = await fetchBackend('population');
            this.setState({
                region : data,
                category : '거주 인구 수',
            })
        }catch(e){

        }
    }

    fetchFromBack = async() => {
        try{
            const test = await fetchBackend();
            console.log(test);
        } catch (e) {
            console.log(e);
        }
    }
    handleCategoryChange = async (e) =>{
        const category = e.target.value,
                name = e.nativeEvent.srcElement.innerText;
        if(category === 'test') {
            try{
                const data =await fetchTestData();
                console.log(data);
                this.setState({
                    region : data,
                    category : name,
                })
            }catch(e){
                
            }
        }else{
        try{
            const data = await fetchBackend(category);
            this.setState({
                region : data,
                category :name,
            })
        }catch(e){
            console.log(e)
        }
        }
    };
    handleOneRegionData = async (regionCodeWithKR) =>{
        try{
            const oneRegionData = await fetchOneRegionData(regionCodeWithKR);
            this.setState({
                oneRegionData
            });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const { region, category, oneRegionData} = this.state; // this is better to use 

        return (
            <div className={styles.container}>
                <MainHeader/>
                <Picker handleFunc = {this.handleCategoryChange}/>
                <UseSvg region={region} category = {category}/>
                <Chart region={region} category = {category}/>
                <DrawTable region={region} category = {category} />

                <RegionPicker region = {region} handleOneRegionData={this.handleOneRegionData}/>
                <RadarChart oneRegionData = {oneRegionData}/>
            </div>
        )
    }
}

export default App;
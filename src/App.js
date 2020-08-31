import React from 'react';
import { UseSvg,Picker, DrawTable, Chart, Header
        ,RadarChart, Footer, News, Loading } from './components'

import { fetchCategoryData, fetchOneRegionData, fetchRegionDrawData
        ,fetchNewsData } from './api';

import { Typography } from '@material-ui/core';
import styles from './App.module.css';

class App extends React.Component{

    state = {
        loading : false,
        regions : [],
        category :'',
        regionDatasets : [],
        drawData : [],
        newsData : [],
    };
    async componentDidMount(){
        this.setState({loading :true})
        try{
            const regions = await fetchCategoryData('population');
            const drawData = await fetchRegionDrawData();
            const newsData = await fetchNewsData();
            this.setState({
                loading : false,
                regions : regions,
                category : '거주 인구 수', // default
                drawData,
                newsData,
            })
        }catch(e){

        }
    }

    handleCategoryChange = async (e) =>{
        const category = e.target.value,
                name = e.nativeEvent.srcElement.innerText;
        this.setState({loading :true})
        try{
            const data = await fetchCategoryData(category);
            this.setState({
                loading : false,
                regions : data,
                category :name,
            })
        }catch(error){
            console.log(error)
        }
    }

    handleOneRegionData = async (e) =>{
        const regionCodeWithKR = e.target.value
        this.setState({loading :true})
        try{
            const regionDataset = await fetchOneRegionData(regionCodeWithKR);
            this.setState({
                loading : false,
                regionDatasets : this.state.regionDatasets.concat(regionDataset)
            });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        const { loading, regions, category, regionDatasets, drawData, newsData } = this.state; // this is better to use 

        return (
            <>
            <div className={styles.container} id='start-point'>
                <Header/>
                <Picker handlePickerFunction={this.handleCategoryChange}/>
                {loading
                    ?   <Loading/>
                    :   <Typography variant="h3" align='justify'>{category}</Typography>}
                {regions.length 
                    ?
                    <>
                    <UseSvg regions={regions} category={category} drawData={drawData} />
                    <Chart regions={regions} category={category} drawData={drawData} />
                    <DrawTable regions={regions} category={category} />
                    <Picker regions={regions} handlePickerFunction={this.handleOneRegionData} />
                    </>
                    : <Loading/>
                }
                {loading
                    ?   <Loading/>
                    :   <Typography variant="h3" align='justify'>구별</Typography>}
                <RadarChart regionDatasets={regionDatasets} drawData={drawData} />
                <News newsData={newsData}/>
                <Footer/>
            </div>
            </>
        )
    }
}

export default App;
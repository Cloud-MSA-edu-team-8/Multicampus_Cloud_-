import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, IconButton} from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
// import { Route,BrowserRouter, Switch, Link } from 'react-router-dom';

import title_img from '../../images/title_200_47.png';

import styles from './Header.module.css';

import ProgressBar from './ProgressBar';

const useStyles = makeStyles((theme)=>({
    // appBar :{
    //     position:'fixed',
    //     background: '#21232a',
    // },
}));

const MainHeader = () => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)

    const listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
            requestAnimationFrame(()=>{
                calculateScrollDistance();
            })
        })
    }
    const calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by
        const winHeight = window.innerHeight;
        const docHeight = getDocHeight();
        const totalDocScrollLength = docHeight - winHeight;
        setScrollPosition(Math.floor(scrollTop / totalDocScrollLength * 100))
    }

    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }
    
    useEffect(()=>{
        listenToScrollEvent()
    },[])
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    const makeLabel = (label) =>{
        return <Typography variant="h6">{label}</Typography>
    }
    const navItems=[
        {
            target : "all"
        },
        {
            target : "oneRegion"
        }
    ]
    return(
        <>
        <div className={styles.container}>
            <AppBar className={classes.appBar} >
                <div className={styles.title_words}><del>고정관념은 버려라! 과연 그 동네는 안전할 것인가?</del></div>
                <div className={styles.toolbarWrap}>
                    <a className={styles.a} href="/"><img className={styles.img} src={title_img} /></a>
                    {/* <div>
                        <nav clssName={styles.navbar}>
                            <a href="#start-point">
                                Test0<i></i>
                            </a>
                            <a href="#dist-picker">
                                Test1<i></i>
                            </a>
                            <a href="#dist-picker">
                                Test2<i></i>
                            </a>
                        </nav>
                    </div> */}
                    <Toolbar>
                        {/* <BrowserRouter> */}
                            <Tabs
                            className={styles.tabs}
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="inherit"
                            variant="standard"
                            centered
                            >
                            <Tab label={makeLabel("전체")}><a href="dist-picker">저체</a></Tab>
                            <Tab label={makeLabel("구별")}/>
                            {/* <Tab label={makeLabel("전체")} to="/" component={Link}/>
                            <Tab label={makeLabel("구별")} to="/dist-picker"component={Link}/> */}
                            <Tab label={makeLabel("??? 뭐할까")} />
                            </Tabs>
                            {/* <Switch>
                                <Route exact path="/" component={Picker}/>
                                <Route path="/dist-picker" component={makeLabel("구별")}/>
                            </Switch>
                        </BrowserRouter> */}
                    </Toolbar>
                    <Button className={styles.loginBtn} color="inherit">Login</Button>
                </div>
                <ProgressBar scroll = {scrollPosition + '%'}/>
            </AppBar>
        </div>
        </>
    )

}
export default MainHeader;

import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Typography, IconButton} from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';

import title_img from '../../images/title_200_47.png';

import styles from './MainHeader.module.css';

const useStyles = makeStyles((theme)=>({
    appBar :{
        background: '#21232a',
    },
}));

const MainHeader = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    const makeLabel = (label) =>{
        return <Typography variant="h6">{label}</Typography>
    }
    return(
        <div className={styles.container}>
            <AppBar className={classes.appBar} position='fixed'>
                <div className={styles.title_words}>고정관념은 버려라! 과연 그 동네는 안전할 것인가?</div>
                <div className={styles.toolbarWrap}>
                    <a className={styles.a} href=""><img className={styles.img} src={title_img} /></a>
                    {/* <div>
                        <nav className={styles.navbar}>
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
                            <Tabs
                            className={styles.tabs}
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="inherit"
                            variant="standard"
                            centered
                            >
                            <a href="#start-point"><Tab label={makeLabel("전체")}/></a>
                            <a href="#dist-picker"><Tab label={makeLabel("구별")}/></a>
                            <Tab label={makeLabel("??? 뭐할까")} />
                            </Tabs>
                    </Toolbar>
                    <Button className={styles.loginBtn} color="inherit">Login</Button>
                </div>
            </AppBar>
        </div>
    )

}
export default MainHeader;

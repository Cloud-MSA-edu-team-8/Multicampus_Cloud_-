import React, {useState} from 'react';

import title_img from '../../images/title_200_47.png';

import styles from './MainHeader.module.css';

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Typography, IconButton} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme)=>({
    appBar :{
        background: '#21232a',
    },
    title: {
        flexGrow :1,
    },
    top_most_bar: {
        // width : "100%",
    },

    toolBar :{
        // borderRadius : 16,
    }
}));

const MainHeader = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const makeLabel = (label) =>{
        return <Typography variant="h6">{label}</Typography>
    }
    return(
        <div className={styles.container}>
            <AppBar className={classes.appBar} position='fixed'>
                <div className={styles.title_words}>어디살래...?? 뭐라고 써야될까 문과야.. 도와줘</div>
                <div className={styles.toolbarWrap}>
                    <a className={styles.a} href=""><img className={styles.img} src={title_img} /></a>
                    <Toolbar className = {classes.toolBar}>
                            <Tabs
                            className={styles.tabs}
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="inherit"
                            variant="scrollable"
                            centered
                            >
                            <Tab label={makeLabel("전체")} />
                            <Tab label={makeLabel("구별")} />
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

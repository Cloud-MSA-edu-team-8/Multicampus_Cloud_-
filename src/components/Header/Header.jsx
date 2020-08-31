import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, IconButton} from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
// import { Route,BrowserRouter, Switch, Link } from 'react-router-dom';

import title_img from '../../images/title_200_47.png';

import styles from './Header.module.css';

const useStyles = makeStyles((theme)=>({
    appBar :{
        position:'fixed',
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
    const navItems=[
        {
            target : "all"
        },
        {
            target : "oneRegion"
        }
    ]
    return(
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
            </AppBar>
        </div>
    )

}
export default MainHeader;

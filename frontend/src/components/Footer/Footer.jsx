import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
// import githubImg from '../../images/GitHub-Mark-32px.png';

const useStyles = makeStyles((theme)=>({
    container :{
        background: '#21232a',
        flexDirection:'column',
        display:'block',
        marginBottom:0,
        color:'white',
        position:'sticky',
        width:'100vw',
        marginTop:'100vh',
    },
    footerTag:{
        textAlign:'center',
        padding:'1rem',
    },
    aTag:{
        alignItems:'center',
        textDecoration: 'none',
        color : 'inherit',
    }
}));

const Footer = () =>{
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <footer className={classes.footerTag}>
                {/* <Typography variant='h6'>This is footer</Typography> */}
                <a className={classes.aTag} href="https://github.com/Cloud-MSA-edu-team-8" target="_blank">
                    Visit Our GitHub
                    {/* <img src={githubImg}></img> */}
                </a>
            </footer>
        </div>
    )
}

export default Footer;
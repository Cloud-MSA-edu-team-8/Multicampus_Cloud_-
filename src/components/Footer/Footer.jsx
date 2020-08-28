import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
// import githubImg from '../../images/GitHub-Mark-32px.png';

const useStyles = makeStyles((theme)=>({
    container :{
        background: '#21232a',
        color:'white',
        width:'100vw',
        marginTop:'30vh',
        textAlign:'center',
        padding:'3rem',
        flexShrink: 0,
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
        <footer className={classes.container}>
            <a className={classes.aTag} href="https://github.com/Multicampus-Cloud-MSA-safehome" target="_blank">
                <Typography variant="h6">Visit Our GitHub</Typography>
                {/* <img src={githubImg}></img> */}
            </a>
        </footer>
    )
}

export default Footer;
import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

import linkIcon from '../../images/link.png';
import styles from './Footer.moulde.css';
// import { Link } from 'react-router-dom';
// import githubImg from '../../images/GitHub-Mark-32px.png';

const useStyles = makeStyles((theme)=>({
    container :{
        background: '#21232a',
        color:'white',
        width:'100vw',
        marginTop:'30vh',
        textAlign:'center',
    },
    aTag:{
        alignItems:'center',
        textDecoration: 'none',
        color : 'inherit',
    },
    divTag:{
        marginTop: '10px'
    },
    fDiv:{
        padding:'3rem',
        maxWidth: '50vw',
        margin: '0 auto',
    }
}));
const LinkAndText = ({variant, text, link, component}) => {
    return(
        <Typography variant={variant} component ={component}> {text + ' '}
            <a href={link} >
                <img src={linkIcon} alt="img error" width="15" height="15"/>
            </a>
        </Typography>
    )
}
const Footer = () =>{
    const classes = useStyles();
    return (
        <div className={styles.containerWrap}>
        <footer className={classes.container}>
            <div className={classes.fDiv}>
                <LinkAndText 
                    variant="h5"
                    text="Visit Our GitHub "
                    link="https://github.com/Multicampus-Cloud-MSA-safehome"
                    />
                <div className={classes.divTag}>
                    <Typography variant="h6">[글꼴]</Typography>
                    <LinkAndText 
                        component="p"
                        text="한글 : Jua  "
                        link="https://fonts.google.com/specimen/Jua?query=jua"
                        />
                    <LinkAndText 
                        component="p"
                        text="영어 : Russo one "
                        link="https://fonts.google.com/specimen/Russo+One?query=russo+one"
                        />
                    <LinkAndText 
                        component="p"
                        text="로고 : 잘난체 "
                        link="https://www.goodchoice.kr/font"
                        />
                </div>
                <div className={classes.divTag}>
                    <Typography variant="h6">[데이터]</Typography>
                    <LinkAndText
                        component="p"
                        text="서울 열린데이터광장"
                        link="https://data.seoul.go.kr/"
                    />
                    <LinkAndText
                        component="p"
                        text="서울시 지도 SVG 좌표 데이터 "
                        link="http://www.gisdeveloper.co.kr/?p=8555"
                    />
                </div>
                <div className={classes.divTag}>
                    링크 아이콘 제작자{' '}
                    <a className={classes.aTag} href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">Freepik</a>{' '}
                    from <a className={classes.aTag} href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
        </footer>
        </div>
    )
}
export default Footer;
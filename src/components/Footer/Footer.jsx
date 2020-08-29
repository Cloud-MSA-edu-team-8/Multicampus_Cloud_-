import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

import linkIcon from '../../images/link.png';
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
const LinkAndText = ({variant, text, link}) => {
    return(
        <Typography variant={variant}> {text + ' '}
            <a href={link} >
                <img src={linkIcon} width="15" height="15"/>
            </a>
        </Typography>
    )
}
const Footer = () =>{
    const classes = useStyles();
    return (
        <footer className={classes.container}>
            <div className={classes.fDiv}>
                <LinkAndText 
                    variant="h6"
                    text="Visit Our GitHub "
                    link="https://github.com/Multicampus-Cloud-MSA-safehome"
                    />
                <div className={classes.divTag}>
                    <LinkAndText 
                        variant="span"
                        text="글꼴 [ 한글 : Jua  "
                        link="https://fonts.google.com/specimen/Jua?query=jua"
                        />
                    {', '}
                    <LinkAndText 
                        variant="span"
                        text="영어 : Russo one "
                        link="https://fonts.google.com/specimen/Russo+One?query=russo+one"
                        />
                    {', '}
                    <LinkAndText 
                        variant="span"
                        text="로고 : 잘난체 "
                        link="https://www.goodchoice.kr/font"
                        />
                    {' ]'}                
                </div>
                <div className={classes.divTag}>
                    링크 아이콘 제작자{' '}
                    <a className={classes.aTag} href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">Freepik</a>{' '}
                    from <a className={classes.aTag} href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
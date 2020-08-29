import React from 'react';

import styles from './News.module.css';
import Loading from '../Loading/Loading';
import { makeStyles } from '@material-ui/core/styles';
import { List, Typography, ListItemText, ListItem, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    list: {
        maxWidth : '50vw',
        background : '#f0f0f0',
    },
}));
  
const News = ({newsData}) =>{
    const classes = useStyles();
    if(!newsData) return <Loading which="news"/>
    
    return (
        <div className={styles.container}>
            <Typography variant="h3" align="center">News</Typography>
            <List className={styles.list}>
                {newsData.map(data=>(
                <a className={styles.a}href={data.link} target="_blank">
                    <ListItem className={styles.liItem}>
                        <ListItemText
                        primary={data.title}
                        primaryTypographyProps={{component:"li", variant:"body1"}}
                        secondary={
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                {data.contents}
                                </Typography>
                        }
                        />
                    </ListItem>
                    <Divider variant="fullWidth" component="li" />
                </a>
                ))}
            </List>
        </div>
    )
}

        {/* <div className={styles.container}>
            <h1>News</h1>
            <ul className={styles.news}>
            {newsData.map(data=>(
                    <li className={styles.li}><a href={data.link} target='_blank'><h4>{data.title}</h4></a></li>
            ))}
            </ul>
        </div> */}
export default News

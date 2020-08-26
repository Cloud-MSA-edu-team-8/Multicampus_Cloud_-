import React from 'react';

import styles from './News.module.css';
import Loading from '../Loading/Loading';

const News = ({newsData}) =>{
    if(!newsData) return <Loading which="news"/>
    return (
        <div className={styles.container}>
            <h1>News</h1>
            <ul className={styles.news}>
            {newsData.map(data=>(
                    <li className={styles.li}><a href={data.link} target='_blank'><h4>{data.title}</h4></a></li>
            ))}
            </ul>
        </div>
    )
}
export default News
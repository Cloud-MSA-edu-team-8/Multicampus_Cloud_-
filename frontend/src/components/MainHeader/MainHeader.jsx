import React from 'react';

import title_img from '../../images/title.png';

import styles from './MainHeader.module.css';
const MainHeader = () => {

    return(
        <a href=""><img src={title_img} className={styles.container}/></a>
    )
}
export default MainHeader;
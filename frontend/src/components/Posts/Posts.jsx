import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import styles from './Posts.module.css';

const Posts = ({posts}) => {
    // console.log(posts)
    if(!posts){
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <h1>POSTS TEST</h1>
            {posts.map((post, i)=>
            <List>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={i} />
                    </ListItemAvatar>
                    <ListItemText 
                        primary = {post.title}
                        secondary ={
                            <React.Fragment>
                                <Typography component="span" variant="body2" className={styles.inline} color="textPrimary">
                                    {post.content}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component ="li" />
            </List>
            )}
        </div>
    )
}
// {posts.map(item=>(
//     <div key={item.id}>
//         <h1>{item.title}</h1>
//         <span>{item.content}</span>
//     </div>
// ))}

export default Posts;
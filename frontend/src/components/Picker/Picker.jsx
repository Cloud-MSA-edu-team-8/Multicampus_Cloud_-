import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import styles from './Picker.module.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350,
    display:'center',
  },
}));

const Picker = ({handleFunc}) =>{
  const classes = useStyles();
  const [option, setOption] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOption = (event) => {
    setOption(event.target.value);
    handleFunc(event);
  };

  return (
    <div className={styles.container}>
      <FormControl className={classes.formControl}>
        <InputLabel id="cat">Select</InputLabel>
        <Select labelId="cat" id="cat" value={option} defaultValue='' 
          onChange={(e)=>{handleOption(e);}}
          open={open} onClose={handleClose} onOpen={handleOpen}
            >
          <MenuItem value={'population'}>인구수</MenuItem>
          <MenuItem value={'children'}>어린이 교통사고</MenuItem>
          <MenuItem value={'fire'}>화재</MenuItem>
          <MenuItem value={'flood'}>홍수</MenuItem>
          <MenuItem value={'alcohol'}>음주운전사고</MenuItem>
          <MenuItem value={'house'}>부동산</MenuItem>
        </Select>
        {/* <Select
          labelId="test"
          id="test"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={option}
          onChange={(e)=>{
              handleChange(e);
            }}
        > */}
      </FormControl>
    </div>
  );
}
export default Picker;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from './Picker.module.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));

const Picker = ({fetchedTest}) =>{
  const classes = useStyles();
  const [option, setOption] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.container}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={option}
          onChange={(e)=>{
              fetchedTest(e.target.value);
              handleChange(e);
            }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={"Test"}>Test</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default Picker;
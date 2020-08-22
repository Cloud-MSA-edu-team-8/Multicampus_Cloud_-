import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import styles from './Picker.module.css';

const useStyles = makeStyles(() => ({
	formControl: {
		minWidth: '35vw',
		display:'center',
	},
}));

const Picker = ({region, handleFunc}) =>{
	const classes = useStyles();
	const [option, setOption] = React.useState('');
	const [open, setOpen] = React.useState(false);

	if(!region){

	}

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
    	  <FormControl className={styles.form}>
        	<InputLabel id="cat">Select</InputLabel>
        	<Select labelId="cat" id="cat" value={option}
          	onChange={(e)=>{handleOption(e);}}
          	open={open}
          	onClose={handleClose}
          	onOpen={handleOpen}
	            >
			<MenuItem value={'population'}>거주 인구 수</MenuItem>
			<MenuItem value={'crime'}>범죄 발생 건수</MenuItem>    
			<MenuItem value={'house'}>평당 평균 가격</MenuItem>
          	<MenuItem value={'children'}>어린이 교통사고</MenuItem>
          	<MenuItem value={'fire'}>화재피해</MenuItem>
          	<MenuItem value={'flood'}>홍수피해인원</MenuItem>
          	<MenuItem value={'alcohol'}>음주운전사고</MenuItem>
			<MenuItem value={'test'}>TEST</MenuItem>
        	</Select>
      	</FormControl>
    	</div>
	);
}
export default Picker;
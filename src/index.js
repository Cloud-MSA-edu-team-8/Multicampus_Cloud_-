import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography :{
        fontFamily: 'Jua, Russo One, sans-serif'
    },
    inputlabel :{
        color:'white',
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'))
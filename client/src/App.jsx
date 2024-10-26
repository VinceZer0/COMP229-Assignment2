/*  File Name: App.jsx
  Student's Name: Vince Diego
  Student ID: 301196712 
  Date: September 28, 2024 
*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
 return (

 <Router>

 <MainRouter />

 </Router>

 );
};
export default App;

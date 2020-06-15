import React from 'react';
import { Link } from 'react-router-dom'
import {Container} from '@material-ui/core';
import BasketIcon from '../componets/home/BasketIcon';
import { makeStyles } from '@material-ui/core/styles';
import './main.css';

const MainTemplate = ({children, basketCount}) => {
  
  const useStyles = makeStyles({

    "@media (max-width: 500px)": {
      noPadding: {
        padding: "0"
    } 
    }
  });

  const classes = useStyles();

  return (
    <Container className={classes.noPadding}>
      <div id="title" style={{display: "flex", justifyContent: "space-between", margin: "30px"}}>
        <Link to="/" style={{width: "234px", height: "111px"}}><img src='/img/logo.svg' /></Link>  
        <Link to="/basket" style={{width: "75px", height: "75px"}}><BasketIcon basketCount={basketCount} /></Link>
      </div>
      {children}
    </Container>
  )
}

export default MainTemplate;
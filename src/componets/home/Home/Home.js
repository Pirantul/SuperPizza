import React from 'react';
import {Container} from '@material-ui/core';
import { Grid, Row } from 'react-material-responsive-grid';
import { makeStyles } from '@material-ui/core/styles';
import '../../../css/style.css';
import MainTemplate from '../../../templates/Main';
import Item from '../Item';
import data from '../../../data.json';

const Home = ({ onClickSale, basketCount}) => {


  const useStyles = makeStyles({

    "@media (max-width: 500px)": {
      noPadding: {
        padding: "0"
    } 
    }
  });

  const classes = useStyles();

  return (
    <MainTemplate basketCount={basketCount}>
      <Container  className={classes.noPadding}>
        <Grid>
          <Row>
            {data.map(product => {
              return <Item key={product.name} product={product} onClickSale={onClickSale} />
            })
            }
          </Row>
        </Grid>   
      </Container>
    </MainTemplate>
  )
}

export default Home;
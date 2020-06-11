import React from 'react';
import {Container} from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import '../../css/style.css';
import MainTemplate from '../../templates/Main';
import Item from '../Item';
import data from '../../data.json';

const Home = () => {

  const onClickSizeBtn = () => {
    console.log("click");
    
  }

  return (
    <MainTemplate >
      <Container>
        <Grid>
          <Row>
            {data.map(product => {
              return <Item key={product.name} product={product} onClickSizeBtn={onClickSizeBtn} />
            })
            }
          </Row>
        </Grid>   
      </Container>
    </MainTemplate>
  )
}

export default Home;
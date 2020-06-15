import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "../ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Total from "../Total/Total";

export default function ProductsList({ total, productsInBasket, onClickChangeProduct }) {

    return (
      <Grid container spacing={1} justify="center">
          <Grid item sm={12} md={10} lg={8}>
              <Typography variant="h6">
                  Your order:
              </Typography>
              <List>
                  { productsInBasket.length === 0 ? "Empty list" : null }
                  {productsInBasket
                    .sort((a, b) => a.name + a.size > b.name + b.size ? 1 : -1)
                    .map((product) => (
                      <ListItem key={product.name} product={product} onClickChangeProduct={onClickChangeProduct} />
                    ))}
              </List>
              <Total total={total} />
          </Grid>
      </Grid>
    );
}

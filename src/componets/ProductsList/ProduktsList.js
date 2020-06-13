import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GroupedButtons from "../GroupedButtons";
import './product-list.css';

export default function ProductsList({ productsInBasket }) {

  const useStyles = makeStyles({

    "@media (max-width: 500px)": {
      noPadding: {
        padding: "0"
    } 
    }
  });

  const classes = useStyles();

    return (
      <Grid container spacing={2} justify="center">
          <Grid item xs={12} md={6}>
              <Typography variant="h6">
                  Your order:
              </Typography>
              <List>
                  {productsInBasket.map((product) => (
                    <ListItem className={classes.noPadding}>
                        <ListItemAvatar>
                            <img
                              srcSet={`./img/${product.picture}`}
                              alt={`${product.name}`}
                              title={`${product.name}`}
                              className="product-image-in-list"
                            />
                        </ListItemAvatar>
                        <ListItemText
                          primary={product.name + ", " + product.size + " sm."}
                          secondary={product.description.length > 40
                            ? product.description.substr(0, 40) + "..."
                            : product.description}
                        />
                        <div style={{display: "flex"}}>
                          <GroupedButtons count={product.count}></GroupedButtons>
                          <div className="price" style={{textAlign: "center", marginBottom: "5px", marginLeft: "10px"}}><small>€</small>{product.price}</div>
                        </div>
                    </ListItem>
                  ))}
              </List>
          </Grid>
      </Grid>
    );
}

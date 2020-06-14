import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CurrencyFormat from 'react-currency-format';
import GroupedButtons from "../GroupedButtons";
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const MyListItem = ({product, onClickChangeProduct}) => {

  const useStyles = makeStyles({

    "@media (max-width: 500px)": {
      noPadding: {
        padding: "0"
    } 
    }
  });

  const classes = useStyles();

  const onClickDelete = () => {
    onClickChangeProduct({...product, action: 'DEL'});
  };

  const titleTextBig = `${product.name}, ${product.size} sm., ${product.weight} gr.`;
  const descriptionTextBig = product.description.length > 40
  ? product.description.substr(0, 40) + "..."
  : product.description;

  const multiplyCurrency = (a, b) => {
    return (a * b).toFixed(2);
  }
  
  return (
    <ListItem key={product.name} className={classes.noPadding}>
      <ListItemAvatar>
          <img
            srcSet={`./img/${product.picture}`}
            alt={`${product.name}`}
            title={`${product.name}`}
            className="product-image-in-list"
          />
      </ListItemAvatar>
      <div className="list-item-title">
        <ListItemText
          primary={ document.body.clientWidth > 646 ? titleTextBig : product.name }
          secondary={ document.body.clientWidth > 646 ? descriptionTextBig : `${product.size} sm., ${product.weight} gr.` }
        />
      </div>
      <div className="list-item-property">
        <GroupedButtons product={product} onClickChangeProduct={onClickChangeProduct}></GroupedButtons>
        <div className="list-item-line">
          <div className="price">
            <CurrencyFormat prefix={'€'} displayType={'text'} value={ multiplyCurrency(product.price, product.count )}  />
          </div>
          <div style={{marginTop: "-12px"}}>
            <IconButton edge="end" aria-label="delete" onClick={onClickDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </ListItem>
  )
}
export default MyListItem;
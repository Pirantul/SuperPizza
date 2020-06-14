import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
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
      <ListItemText
        primary={`${product.name}, ${product.size} sm., ${product.weight} gr.`}
        secondary={product.description.length > 40
          ? product.description.substr(0, 40) + "..."
          : product.description}
      />
      <GroupedButtons product={product} onClickChangeProduct={onClickChangeProduct}></GroupedButtons>
      <CurrencyTextField
        label=""
        variant="standard"
        value={product.price * product.count}
        currencySymbol="€"
        readOnly= "true"
        //minimumValue="0"
        outputFormat="string"
        decimalCharacter="."
        digitGroupSeparator=","
        style={{maxWidth: '75px', marginLeft:"10px"}}
        />
      <ListItemSecondaryAction onClick={onClickDelete}>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
export default MyListItem;
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { formatCurrency } from "../../../utils/formatCurrency";
import { assetUrl } from "../../../utils/assetUrl";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import GroupedButtons from "../GroupedButtons";

export default function BasketListItem({ product, onChangeProduct }) {
  const theme = useTheme();
  const isWide = useMediaQuery(theme.breakpoints.up("sm"));

  const onClickDelete = () => {
    onChangeProduct(product, "DEL");
  };

  const titleText = `${product.name}, ${product.size} cm, ${product.weight} g`;
  const descriptionText =
    product.description.length > 40
      ? `${product.description.slice(0, 40)}…`
      : product.description;

  const lineTotal = (Number(product.price) * product.count).toFixed(2);

  return (
    <ListItem className="layout-no-padding basket-list-item" alignItems="center">
      <ListItemAvatar>
        <img
          src={assetUrl(`img/${product.picture}`)}
          alt={product.name}
          title={product.name}
          className="product-image-in-list"
          loading="lazy"
        />
      </ListItemAvatar>
      <div className="list-item-title">
        <ListItemText
          primary={isWide ? titleText : product.name}
          secondary={
            isWide ? descriptionText : `${product.size} cm, ${product.weight} g`
          }
        />
      </div>
      <div className="list-item-property">
        <GroupedButtons product={product} onChangeProduct={onChangeProduct} />
        <div className="list-item-line">
          <div className="price">{formatCurrency(lineTotal)}</div>
          <IconButton
            edge="end"
            aria-label={`Remove ${product.name}`}
            onClick={onClickDelete}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
}

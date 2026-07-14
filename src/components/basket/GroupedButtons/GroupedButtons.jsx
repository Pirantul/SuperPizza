import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function GroupedButtons({ product, onChangeProduct }) {
  const handleIncrement = () => {
    onChangeProduct(product, "INC");
  };

  const handleDecrement = () => {
    onChangeProduct(product, "DEC");
  };

  return (
    <ButtonGroup size="small" aria-label={`Quantity for ${product.name}`}>
      {product.count > 1 && <Button onClick={handleDecrement}>-</Button>}
      <Button disabled>{product.count}</Button>
      <Button onClick={handleIncrement}>+</Button>
    </ButtonGroup>
  );
}

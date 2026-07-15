import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const qtyBtnSx = {
  minWidth: 36,
  color: "#2f3647",
  "&.Mui-disabled": {
    color: "#8a93a3",
    borderColor: "rgba(0, 0, 0, 0.23)",
    opacity: 1,
  },
};

export default function GroupedButtons({ product, onChangeProduct }) {
  const handleIncrement = () => {
    onChangeProduct(product, "INC");
  };

  const handleDecrement = () => {
    onChangeProduct(product, "DEC");
  };

  return (
    <ButtonGroup
      size="small"
      className="qty-buttons"
      aria-label={`Quantity for ${product.name}`}
    >
      <Button
        onClick={handleDecrement}
        disabled={product.count <= 1}
        sx={qtyBtnSx}
      >
        −
      </Button>
      <Button disabled sx={qtyBtnSx}>
        {product.count}
      </Button>
      <Button onClick={handleIncrement} sx={qtyBtnSx}>
        +
      </Button>
    </ButtonGroup>
  );
}

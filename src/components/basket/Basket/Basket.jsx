import Container from "@mui/material/Container";
import MainTemplate from "../../../templates/Main";
import ProductsList from "../ProductsList/ProductsList";

export default function Basket({
  total,
  basketCount,
  productsInBasket,
  onChangeProduct,
  onClearCart,
}) {
  return (
    <MainTemplate basketCount={basketCount}>
      <Container className="layout-no-padding">
        <ProductsList
          total={total}
          productsInBasket={productsInBasket}
          onChangeProduct={onChangeProduct}
          onClearCart={onClearCart}
        />
      </Container>
    </MainTemplate>
  );
}

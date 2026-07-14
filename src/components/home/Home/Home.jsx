import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MainTemplate from "../../../templates/Main";
import Item from "../Item";
import data from "../../../data.json";
import "../../../css/style.css";

export default function Home({ onAddToCart, basketCount }) {
  return (
    <MainTemplate basketCount={basketCount}>
      <Container className="layout-no-padding">
        <Grid container spacing={2} justifyContent="center">
          {data.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.name}>
              <Item product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainTemplate>
  );
}

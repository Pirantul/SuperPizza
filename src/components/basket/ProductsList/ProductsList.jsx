import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItem from "../ListItem";
import Total from "../Total/Total";

export default function ProductsList({
  total,
  productsInBasket,
  onChangeProduct,
  onClearCart,
}) {
  const sorted = [...productsInBasket].sort((a, b) =>
    `${a.name}${a.size}`.localeCompare(`${b.name}${b.size}`)
  );

  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <Typography variant="h6" component="h2" gutterBottom>
          Your order
        </Typography>
        <List>
          {sorted.length === 0 ? (
            <Typography color="text.secondary">Your basket is empty.</Typography>
          ) : (
            sorted.map((product) => (
              <ListItem
                key={`${product.name}-${product.size}`}
                product={product}
                onChangeProduct={onChangeProduct}
              />
            ))
          )}
        </List>
        <Total
          total={total}
          onClearCart={onClearCart}
          productsInBasket={productsInBasket}
        />
      </Grid>
    </Grid>
  );
}

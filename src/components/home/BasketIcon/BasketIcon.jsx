export default function BasketIcon({ basketCount }) {
  return (
    <div
      id="basket-icon"
      style={{
        position: "relative",
        width: "75px",
        height: "75px",
        backgroundImage: "url(/img/basket.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {basketCount > 0 && (
        <span id="in-basket" aria-label={`${basketCount} items in basket`}>
          {basketCount}
        </span>
      )}
    </div>
  );
}

export default function BasketIcon({ basketCount }) {
  return (
    <div id="basket-icon" className="basket-icon">
      <img
        src="/img/basket.jpg"
        alt=""
        className="basket-icon__img"
        width={75}
        height={75}
        aria-hidden="true"
      />
      <span id="in-basket" aria-label={`${basketCount} items in basket`}>
        {basketCount}
      </span>
    </div>
  );
}

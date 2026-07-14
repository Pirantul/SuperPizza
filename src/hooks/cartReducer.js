function calcTotals(products) {
  const basketCount = products.reduce((sum, item) => sum + item.count, 0);
  const total = products
    .reduce((sum, item) => sum + Number(item.price) * item.count, 0)
    .toFixed(2);
  return { basketCount, total };
}

function findIndex(products, name, size) {
  return products.findIndex((item) => item.name === name && item.size === size);
}

function cartReducer(state, action) {
  const { products } = state;

  switch (action.type) {
    case "ADD": {
      const { name, description, picture, size, weight, price } = action.payload;
      const index = findIndex(products, name, size);

      if (index >= 0) {
        const next = products.map((item, i) =>
          i === index ? { ...item, count: item.count + 1 } : item
        );
        return { products: next, ...calcTotals(next) };
      }

      const next = [
        ...products,
        { name, description, picture, size, weight, price, count: 1 },
      ];
      return { products: next, ...calcTotals(next) };
    }

    case "INC": {
      const { name, size } = action.payload;
      const next = products.map((item) =>
        item.name === name && item.size === size
          ? { ...item, count: item.count + 1 }
          : item
      );
      return { products: next, ...calcTotals(next) };
    }

    case "DEC": {
      const { name, size } = action.payload;
      const next = products
        .map((item) =>
          item.name === name && item.size === size && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter(Boolean);
      return { products: next, ...calcTotals(next) };
    }

    case "DEL": {
      const { name, size } = action.payload;
      const next = products.filter(
        (item) => !(item.name === name && item.size === size)
      );
      return { products: next, ...calcTotals(next) };
    }

    case "CLEAR":
      return { products: [], basketCount: 0, total: "0.00" };

    default:
      return state;
  }
}

export { cartReducer, calcTotals };

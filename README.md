# SuperPizza — demo pizza shop on React

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://react.dev/)
[![MUI](https://img.shields.io/badge/MUI-5-007FFF.svg)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff.svg)](https://vitejs.dev/)

**Demo e-commerce SPA:** pizza menu, shopping cart, checkout form. Built with React, Material UI, and static JSON catalog — no backend required.

> **Keywords:** react pizza shop · food delivery demo · shopping cart react · material ui e-commerce · pizza menu app · react spa demo · vite react

**Live demo:** https://pizza.rusgil.ru

---

## Features

- Responsive product grid (8 pizzas, multiple sizes per item)
- Size selector and live price/weight per pizza
- Shopping cart with quantity controls and remove
- Order form with validation (name, address, phone)
- EUR total with USD conversion (static rate from `currency-rate.json`)
- HashRouter — works on static hosting (GitHub Pages, nginx, etc.)

---

## Quick start

```bash
git clone https://github.com/Pirantul/SuperPizza.git
cd SuperPizza
npm install
npm start
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build → dist/
npm run preview  # preview the build locally
```

Requires **Node.js 18+**.

---

## Project structure

```
src/
├── components/
│   ├── home/           # menu page — Item, Home, BasketIcon
│   └── basket/         # cart page — list, totals, order dialogs
├── hooks/
│   ├── cartReducer.js  # cart state logic
│   └── useCart.js      # cart hook used by App
├── templates/
│   └── Main.jsx        # header + logo + basket link
├── data.json           # pizza catalog
├── currency-rate.json  # EUR → USD rate for display
└── App.jsx             # routes + cart provider
public/
└── img/                # product photos, logo, basket icon
```

---

## Customize menu

Edit `src/data.json` — each product:

```json
{
  "name": "Margherita",
  "description": "tomato, mozzarella, basil",
  "picture": "1.jpg",
  "sizes": [
    { "size": "25", "price": "8.50", "weight": "650" }
  ]
}
```

Drop images into `public/img/` and reference the filename in `picture`.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| UI | React 18 |
| Components | MUI 5 (Material UI) |
| Routing | React Router 6 (HashRouter) |
| Build | Vite 6 |
| Data | Static JSON files |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview `dist/` |

---

## License

MIT — free for learning and portfolio use.

---

## Author

[Pirantul](https://github.com/Pirantul)

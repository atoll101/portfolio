import React from "react";
import { Link } from "react-router-dom";

const drinksData = [
  {
    id: 1,
    title: "Iced Matcha Latte",
    description:
      "Vibrant green matcha cascades and swirls into chilled, creamy milk. A beautifully smooth and refreshing drink, with a perfect harmony of earthy, slightly sweet notes and cool, creamy flavour.",
    image: "/images/icedmatchalatte.avif",
  },
  {
    id: 2,
    title: "Matcha Strawberry Latte",
    description:
      "Layers of strawberry puree, milk, and ceremonial-grade matcha.",
    image: "/images/matchastrawberry.avif",
  },
  {
    id: 3,
    title: "Coconut Cloud Matcha",
    description:
      "Earthy and vibrant matcha topped with a creamy, cloud-like coconut foam for a smooth and refreshing sip.",
    image: "/images/coconutcloudmatcha.avif",
  },
  {
    id: 4,
    title: "Earl Grey Matcha",
    description:
      "A captivating fusion where earthy matcha meets the fragrant, citrus notes of Earl Grey for a uniquely aromatic and smooth experience.",
    image: "/images/earlgreymatcha.avif",
  },
  {
    id: 5,
    title: "Matcha Tiramisu",
    description:
      "Velvety layers of rich mascarpone cream and soft, matcha-soaked ladyfingers. A dusting of matcha sugar on top slowly melts into the cream, creating an elegant, lightly textured dessert that balances earthy, sweet, and airy notes.",
    image: "/images/matchatiramisu.avif",
  },
];

function Cafe({ toggleTheme, theme }) {
  const ThemeToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <i className="fas fa-sun theme-icon sun-icon"></i>
      <i className="fas fa-moon theme-icon moon-icon"></i>
    </button>
  );

  return (
    <div className="section-block cafe-page">
      <div className="section-header-with-toggle">
        <h3>cafe</h3>
        <div className="theme-toggle-container main-content-toggle">
          <ThemeToggleButton />
        </div>
      </div>

      <div className="drinks-grid-container">
        {drinksData.map((drink) => (
          <div key={drink.id} className="drink-card">
            <img
              src={drink.image}
              alt={drink.title}
              className="drink-card-image"
            />
            <div className="drink-card-content">
              <h4 className="drink-card-title">{drink.title}</h4>
              <p className="drink-card-description">{drink.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cafe;

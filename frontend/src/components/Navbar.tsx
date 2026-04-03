import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { dark, setDark } = useTheme();

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(`/products?q=${search}`);
  };

  return (
    <nav className="navbar">
      <h2>URBAN SHOP</h2>

      <form onSubmit={handleSearch}>
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
        </button>

      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/products">Categories</Link>{" "}
        <Link to="/wishlist">❤️</Link>
        <Link to="/cart">🛒 ({cart.length})</Link>
      </div>
    </nav>
  );
}
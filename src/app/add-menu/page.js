"use client";
import { useState } from "react";
import Link from "next/link";
import "./add-menu.css";  // Import new styles

export default function AddMenu() {
  const [dish, setDish] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sufficientFor, setSufficientFor] = useState("1 person");
  const [price, setPrice] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ ${dish} added to the ${mealType} menu!`);
    setDish("");
    setQuantity("");
    setSufficientFor("1 person");
    setPrice("");
    setMealType("Breakfast");
  };

  return (
    <div className="page-wrapper"> {/* ✅ Added wrapper */}
      <h2 className="add-menu-title">🍽️ Add a New Menu Item</h2>

      <div className="add-menu-container">
        <form className="menu-form" onSubmit={handleSubmit}>
          <label>Dish Name:</label>
          <input
            type="text"
            value={dish}
            onChange={(e) => setDish(e.target.value)}
            required
          />

          <label>Quantity:</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <label>Sufficient For:</label>
          <select
            value={sufficientFor}
            onChange={(e) => setSufficientFor(e.target.value)}
          >
            <option>1 person</option>
            <option>2 persons</option>
            <option>3 persons</option>
          </select>

          <label>Price (₹):</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label>Meal Type:</label>
          <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>

          <button type="submit">➕ Add Menu</button>
        </form>
      </div>

      {/* 🔙 Back to Dashboard */}
      <Link href="/admin-dashboard">
        <button className="home-button">⬅️ Back to Dashboard</button>
      </Link>
    </div>
  );
}

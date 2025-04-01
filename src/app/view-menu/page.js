"use client";
import { useState } from "react";
import Link from "next/link";
import "../admin-dashboard.css"; // Reuse styles

export default function ViewMenu() {
  // 📝 Updated Dummy Menu Data (Veg items only)
  const [menus, setMenus] = useState([
    {
      type: "Breakfast",
      date: "2025-03-30",
      items: [
        { name: "Idli", quantity: "2", sufficientFor: "1 person", price: "₹30" },
        { name: "Dosa", quantity: "1", sufficientFor: "1 person", price: "₹40" },
        { name: "Poha", quantity: "1 plate", sufficientFor: "1 person", price: "₹35" },
        { name: "Upma", quantity: "1 bowl", sufficientFor: "1 person", price: "₹30" },
        { name: "Aloo Paratha", quantity: "2", sufficientFor: "1 person", price: "₹50" },
      ],
    },
    {
      type: "Lunch",
      date: "2025-03-30",
      items: [
        { name: "Veg Meals", quantity: "1 plate", sufficientFor: "1 person", price: "₹100" },
        { name: "Paneer Butter Masala", quantity: "1 bowl", sufficientFor: "2 persons", price: "₹180" },
        { name: "Dal Tadka", quantity: "1 bowl", sufficientFor: "2 persons", price: "₹120" },
        { name: "Mix Veg Curry", quantity: "1 bowl", sufficientFor: "2 persons", price: "₹140" },
        { name: "Jeera Rice", quantity: "1 plate", sufficientFor: "1 person", price: "₹90" },
      ],
    },
    {
      type: "Dinner",
      date: "2025-03-30",
      items: [
        { name: "Veg Biryani", quantity: "1 plate", sufficientFor: "1 person", price: "₹150" },
        { name: "Roti with Dal", quantity: "3 rotis", sufficientFor: "1 person", price: "₹80" },
        { name: "Gobi Manchurian", quantity: "1 plate", sufficientFor: "2 persons", price: "₹120" },
        { name: "Pulao", quantity: "1 plate", sufficientFor: "1 person", price: "₹130" },
        { name: "Mushroom Masala", quantity: "1 bowl", sufficientFor: "2 persons", price: "₹160" },
      ],
    },
  ]);

  return (
    <div className="page-container">
      <h2 className="view-menu-title">📅 Today's Available Menus</h2>

      {menus.length === 0 ? (
        <p>No menus available.</p>
      ) : (
        <div className="menu-list">
          {menus.map((menu, index) => (
            <div key={index} className="menu-box">
              <h3 className="view-menu-title">{menu.type} - {menu.date}</h3>

              {/* ✅ Updated Table Styling */}
              <table className="menu-table">
                <thead>
                  <tr>
                    <th>Dish Name 🍽️</th>
                    <th>Quantity 📦</th>
                    <th>Sufficient For 👥</th>
                    <th>Price 💰</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.items.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.sufficientFor}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {/* 🔙 Back to Dashboard */}
      <Link href="/admin-dashboard">
        <button className="home-button">⬅️ Back to Dashboard</button>
      </Link>
    </div>
  );
}

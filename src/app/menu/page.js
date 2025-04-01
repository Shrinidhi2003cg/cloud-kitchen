"use client"; // ✅ Required for `useRouter`

import "./menu.css"; // ✅ Import styles
import "./menu-style.css"; // ✅ Import the new CSS

import { useRouter } from "next/navigation"; // ✅ Import Next.js Router

export default function MenuPage() {
  const router = useRouter(); // ✅ Initialize Router

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      {/* 🍳 Breakfast Section */}
      <div className="menu-section">
        <h2>Breakfast</h2>
        <div className="menu-list">
          <div className="menu-item">
            <img src="/salad.jpg" alt="Mediterranean Salad" />
            <div className="menu-text">
              <h3>Mediterranean Salad</h3>
              <p>Refreshing European breakfast with greens & feta.</p>
            </div>
          </div>

          <div className="menu-item">
            <img src="/idly.jpg" alt="Idly" />
            <div className="menu-text">
              <h3>Idly</h3>
              <p>Soft Indian rice cakes with chutney & sambar.</p>
            </div>
          </div>

          <div className="menu-item">
            <img src="/pbj.jpg" alt="Bread PBJ" />
            <div className="menu-text">
              <h3>Bread PBJ</h3>
              <p>Classic English breakfast with peanut butter & jelly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🍛 Lunch Section */}
      <div className="menu-section">
        <h2>Lunch</h2>
        <div className="menu-list">
          <div className="menu-item">
            <img src="/biryani.jpg" alt="Biryani" />
            <div className="menu-text">
              <h3>Spicy Biryani</h3>
              <p>Fragrant basmati rice cooked with spices & meat.</p>
            </div>
          </div>

          <div className="menu-item">
            <img src="/thali.jpg" alt="Thali" />
            <div className="menu-text">
              <h3>Indian Thali</h3>
              <p>A complete Indian meal with rice, roti, and sides.</p>
            </div>
          </div>

          <div className="menu-item">
            <img src="/sandwich.jpg" alt="Sandwich" />
            <div className="menu-text">
              <h3>Grilled Sandwich</h3>
              <p>Cheesy grilled sandwich with fresh vegetables.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🍽 Dinner Section */}
      <div className="menu-section">
        <h2>Dinner</h2>
        <div className="menu-list">
          <div className="menu-item">
            <img src="/pasta.jpg" alt="Pasta" />
            <div className="menu-text">
              <h3>Creamy Pasta</h3>
              <p>Rich and creamy Alfredo pasta with seasonings.</p>
            </div>
          </div>

          <div className="menu-item">
            <img src="/burger.jpg" alt="Burger" />
            <div className="menu-text">
              <h3>Juicy Burger</h3>
              <p>Classic cheese burger with fresh lettuce & fries.</p>
            </div>
          </div>

          <div className="menu-item">
            <img src="/pizza.jpg" alt="Pizza" />
            <div className="menu-text">
              <h3>Cheesy Pizza</h3>
              <p>Delicious cheesy pizza with fresh toppings.</p>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      {/* 🚀 Back to Landing Page Button */}
      <div className="button-container">
        <button className="back-button" onClick={() => router.push("/")}>
          ⬅️ Back to Landing Page
        </button>
      </div>
    </div>
  );
}

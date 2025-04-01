import Link from "next/link";
import Hero from "./components/Hero"; // ✅ Hero Section
import About from "./components/About"; // ✅ About Section
import Footer from "./components/Footer"; // ✅ Footer Section
import "./home-style.css"; // ✅ New CSS for home page styles

export default function Home() {
  return (
    <div className="home-page">
      {/* ✅ Hero Section */}
      <Hero />

      {/* ✅ Today's Specials - Separate Block for Centering */}
      <div className="specials-heading">
        <h2>Today's Specials</h2>
      </div>

      {/* ✅ Specials Menu */}
      <div className="menu">
        <div className="menu-item">
          <img src="/pizza.jpg" alt="Pizza" />
          <h3>Cheesy Pizza</h3>
          <p>Delicious cheesy pizza with fresh toppings.</p>
        </div>
        <div className="menu-item">
          <img src="/burger.jpg" alt="Burger" />
          <h3>Juicy Burger</h3>
          <p>Classic cheese burger with fresh lettuce & fries.</p>
        </div>
        <div className="menu-item">
          <img src="/pasta.jpg" alt="Pasta" />
          <h3>Creamy Pasta</h3>
          <p>Rich and creamy Alfredo pasta with seasonings.</p>
        </div>
      </div>

      {/* ✅ View Full Menu Button */}
      <div className="button-container">
        <Link href="/menu">
          <button className="menu-button">🍽️ View Full Menu</button>
        </Link>
      </div>

      {/* ✅ About Section */}
      <About />

      {/* ✅ Footer Section */}
      <Footer />
    </div>
  );
}

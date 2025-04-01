import Link from "next/link";

export default function Hero() {
    return (
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Cloud Kitchen 🍽️</h1>
          <p>Delicious meals, delivered fresh every day and night!</p>
        </div>
        {/* ✅ Admin Login Button */}
        <div className="admin-login">
          <Link href="/admin">
            <button className="admin-button">🔑 Admin Login</button>
          </Link>
        </div>
      </div>
    );
}

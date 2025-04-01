    "use client";
import Link from "next/link";
import "../admin-dashboard.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <h1>📊 Admin Dashboard</h1>

      {/* View Menus Button */}
      <Link href="/view-menu">
        <button className="dashboard-button">📅 View Menus</button>
      </Link>

      {/* Add New Menu Button */}
      <Link href="/add-menu">
        <button className="dashboard-button">➕ Add New Menu</button>
      </Link>

      {/* Home Button */}
      <Link href="/">
        <button className="home-button">🏠 Home</button>
      </Link>
    </div>
  );
}

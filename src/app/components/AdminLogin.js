"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../admin-style.css";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "admin123") {
      router.push("/admin-dashboard"); // ✅ Redirect to dashboard after login
    } else {
      alert("Incorrect password! Try again.");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>

        {/* ✅ Home Button */}
        <Link href="/">
          <button className="home-button">🏠 Home</button>
        </Link>
      </div>
    </div>
  );
}

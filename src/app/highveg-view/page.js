'use client'
import React, { useEffect, useState } from 'react';

const ViewHighVegMenu = () => {
  const [dishes, setDishes] = useState([]);

  const fetchDishes = () => {
    fetch('http://localhost:5000/highveg')
      .then(res => res.json())
      .then(data => setDishes(data))
      .catch(err => console.error("Failed to fetch dishes:", err));
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f2f2f2' }}>
      <h1 style={{ textAlign: 'center' }}>🌿 High-End Veg Menu (View Only)</h1>

      {dishes.length === 0 ? (
        <p>Loading menu...</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
          <thead style={{ backgroundColor: '#8ecae6', color: '#fff' }}>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Meal Type</th>
              <th>Serving</th>
              <th>Chef</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#e0f7fa' : '#ffffff' }}>
                <td>{dish.name}</td>
                <td>₹{dish.price}</td>
                <td>{dish.mealType}</td>
                <td>{dish.serving}</td>
                <td>{dish.chef}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewHighVegMenu;

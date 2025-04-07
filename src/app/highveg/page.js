'use client'
import React, { useEffect, useState } from 'react';
import './highveg.css'; // Make sure your CSS file exists

const HighVegMenuPage = () => {
  const [dishes, setDishes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    mealType: '',
    serving: '',
    chef: '',
  });

  const fetchDishes = () => {
    fetch('http://localhost:5000/highveg')
      .then(res => res.json())
      .then(data => setDishes(data))
      .catch(err => console.error("Failed to fetch dishes:", err));
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/highveg/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Dish added successfully ✅");
        setFormData({ name: '', price: '', mealType: '', serving: '', chef: '' });
        fetchDishes();
      } else {
        alert("Something went wrong 😓");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this dish?")) {
      try {
        const res = await fetch(`http://localhost:5000/highveg/delete/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          alert("Dish deleted ✅");
          fetchDishes();
        } else {
          alert("Failed to delete ❌");
        }
      } catch (err) {
        console.error("Error deleting dish:", err);
      }
    }
  };

  return (
    <div className="highveg-container">
      <h1 className="highveg-heading">🌿 High-End Veg Menu</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="highveg-form">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Dish Name" required />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <input name="mealType" value={formData.mealType} onChange={handleChange} placeholder="Meal Type" required />
        <input name="serving" type="number" value={formData.serving} onChange={handleChange} placeholder="Serving" required />
        <input name="chef" value={formData.chef} onChange={handleChange} placeholder="Chef Name" required />
        <button type="submit">Add Dish</button>
      </form>

      {/* Table */}
      {dishes.length === 0 ? (
        <p>Loading menu...</p>
      ) : (
        <table className="highveg-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Meal Type</th>
              <th>Serving</th>
              <th>Chef</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish, index) => (
              <tr key={index}>
                <td>{dish.name}</td>
                <td>₹{dish.price}</td>
                <td>{dish.mealType}</td>
                <td>{dish.serving}</td>
                <td>{dish.chef}</td>
                <td>
                  <button
                    onClick={() => handleDelete(dish._id)}
                    style={{
                      backgroundColor: 'crimson',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HighVegMenuPage;

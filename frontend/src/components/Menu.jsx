import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/menu-items"; // trailing slash!

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(API_URL);
        setMenuItems(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch menu:",
          error.response?.data || error.message
        );
      }
    };

    fetchMenu();
  }, []);

  const refreshMenu = async () => {
    try {
      const response = await axios.get(API_URL);
      setMenuItems(response.data);
    } catch (error) {
      console.error(
        "Failed to refresh menu:",
        error.response?.data || error.message
      );
    }
  };

  const addItem = async () => {
    try {
      await axios.post(API_URL, {
        name,
        price: parseFloat(price),
        inventory_count: parseInt(inventory),
      });
      setName("");
      setPrice("");
      setInventory("");
      refreshMenu();
    } catch (error) {
      console.error(
        "Failed to add item:",
        error.response?.data || error.message
      );
      alert("Failed to add item. Check console for details.");
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}/`);
      refreshMenu();
    } catch (error) {
      console.error(
        "Failed to delete item:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Menu Items</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Inventory"
        value={inventory}
        onChange={(e) => setInventory(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      <ul>
        {menuItems.map((item) => (
          <li key={item.item_id}>
            {item.name} - ${item.price} ({item.inventory_count})
            <button onClick={() => deleteItem(item.item_id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

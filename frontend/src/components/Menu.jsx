import React, {  useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/menu-items/";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");
 const fetchMenu = async () => {
    const response = await axios.get(API_URL);
    setMenuItems(response.data);
  };
  // Fetch menu items
//   useEffect(() => {
//     fetchMenu();
//   }, []);

 

  // Add item
  const addItem = async () => {
    await axios.post(API_URL, {
      name: name,
      price: price,
      inventory_count: inventory,
    });

    setName("");
    setPrice("");
    setInventory("");
    fetchMenu();
  };

  // Delete item
  const deleteItem = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
    fetchMenu();
  };

  return (
    <>
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
              {item.name} - ${item.price} (Stock: {item.inventory_count})
              <button onClick={() => deleteItem(item.item_id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu;

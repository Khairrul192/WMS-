// 1. IMPORTS (Always at the top)
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  LogOut, 
  RefreshCw, 
  Search 
} from 'lucide-react';

function App() {
  // 2. STATE (Inside the function)
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0 });
  const [searchTerm, setSearchTerm] = useState('');

  // Login Phase (register and login with popup)
  const handleAction = async (path) => {
  try {
    const res = await axios.post(`http://localhost:8080/api/${path}`, formData);
    
    // Check if the response matches your backend's success messages
    if (res.data.username || res.data === "Login Successful!" || res.data === "Registration Successful!") {
      if (path === 'login') {
        // --- ADD THE POP-UP HERE ---
        alert("Login Successful! Welcome to WMS."); 
        
        setIsLoggedIn(true);
        fetchItems();
      } else {
        alert("Registration Successful! You can now login.");
      }
    } else {
      alert(res.data); // Shows errors like "User not found" from the backend
    }
  } catch (err) {
    alert("Connection Error: Is the Spring Boot backend running on port 8080?");
  }
};

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/items");
      setItems(res.data);
    } catch (err) { 
      console.error("Could not fetch items from backend."); 
    }
  };

  const handleAddItem = async () => {
    try {
      await axios.post("http://localhost:8080/api/items", newItem);
      alert("Item Added!");
      fetchItems();
    } catch (err) { 
      alert("Error adding item to database."); 
    }
  };

  // 4. RENDER LOGIC
  if (isLoggedIn) {
    return (
      <div className="main-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-brand">
            <Package size={28} color="#3b82f6" />
            <h2 style={{marginLeft: '12px'}}>Khai WMS</h2>
          </div>
          <ul className="sidebar-menu">
            <li className="active"><LayoutDashboard size={20} /> <span>Inventory</span></li>
            <li><ShoppingCart size={20} /> <span>Orders</span></li>
            <li><BarChart3 size={20} /> <span>Reports</span></li>
            <li><Settings size={20} /> <span>Settings</span></li>
          </ul>
          <button className="logout-btn-sidebar" onClick={() => setIsLoggedIn(false)}>
            <LogOut size={18} /> <span>Logout</span>
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="content-area">
          <header className="content-header">
            <div className="header-title">
              <h2>Inventory Management</h2>
              <p>Real-time stock tracking</p>
            </div>

          </header>

          <div className="inventory-grid">
            <div className="add-item-card">
              <h3>Add New Stock</h3>
              <div className="input-group">
                <input type="text" placeholder="Item Name" onChange={(e) => setNewItem({...newItem, name: e.target.value})} />
              </div>
              <div className="input-group">
                <input type="number" placeholder="Quantity" onChange={(e) => setNewItem({...newItem, quantity: e.target.value})} />
              </div>
              <button className="save-btn" onClick={handleAddItem}>Save to Warehouse</button>
            </div>

            <div className="item-list-card">
              <div className="list-header">
    <h3>Current Stock</h3>
    
    {/* Moved Search and Refresh here to be side-by-side */}
    <div className="header-actions">
      <div className="search-container-small">
        <Search size={14} color="#64748b" />
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      
      <button className="refresh-btn" onClick={fetchItems}>
        <RefreshCw size={16} />
        <span>Refresh</span>
      </button>
    </div>
  </div>

              <table>
                <thead>
                  <tr><th>ID</th><th>Name</th><th>Quantity</th></tr>
                </thead>
                <tbody>
                  {items
                    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(item => (
                      <tr key={item.id}>
                        <td><span className="id-badge">#{item.id}</span></td>
                        <td><strong>{item.name}</strong></td>
                        <td>{item.quantity} units</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 5. LOGIN PAGE (Default view)
  return (
    // Inside the return block for the login page
<div className="login-container">
  <div className="login-card">
    <h2>WMS Portal</h2>
    <input type="text" placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
    <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
    
    <button className="login-btn" onClick={() => handleAction('login')}>
      Login
    </button>
    
    {/* Change this button to use reg-btn class */}
    <button className="reg-btn" onClick={() => handleAction('register')}>
      Register
    </button>
  </div>
</div>
  );
}

export default App;
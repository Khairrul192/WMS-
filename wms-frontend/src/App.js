import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { LayoutDashboard, Package, ShoppingCart, BarChart3, Settings, LogOut, RefreshCw, Search } from 'lucide-react';

// --- SUB-COMPONENT: Inventory Table Page ---
const InventoryTable = ({ items, searchTerm, setSearchTerm, fetchItems }) => (
  <>
    <header className="content-header">
      <div className="header-title">
        <h2>Inventory Management</h2>
        <button className="refresh-btn" onClick={fetchItems}><RefreshCw size={16} /><span>Refresh</span></button>
        <input 
            type="text" 
            placeholder="Search SKU or Name..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
      </div>
      <div className="header-actions">
        <Link to="/add-item" className="save-btn" style={{ textDecoration: 'none' }}>+ Add Item</Link>
        
      </div>
    </header>

    <div className="full-width-card">
      <table className="inventory-table">
        <thead>
          <tr><th>SKU</th><th>Name</th><th>Quantity</th><th>Location</th><th>Lot</th><th>Status</th></tr>
        </thead>
        <tbody>
          {items.filter(item => 
            (item.item_name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.item_code?.toLowerCase().includes(searchTerm.toLowerCase()))
          ).map(item => (
            <tr key={item.id}>
              <td><span className="sku-badge">{item.item_code}</span></td>
              <td><strong>{item.item_name}</strong></td>
              <td>{item.quantity} units</td>
              <td>{item.location_id || 'N/A'}</td>
              <td>{item.lot || 'N/A'}</td>
              <td><span className={`status-pill ${item.quantity > 0 ? 'in-stock' : 'out-stock'}`}>{item.quantity > 0 ? 'In Stock' : 'Out Stock'}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

// --- SUB-COMPONENT: Add Item Form Page ---
const AddItemPage = ({ fetchItems }) => {
  const navigate = useNavigate();
  const [item, setItem] = useState({ item_code: '', item_name: '', quantity: 0, location_id: '', lot: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/items", item);
      alert("Item Added!");
      fetchItems();
      navigate("/"); // Go back to table
    } catch (err) { alert("Error saving item."); }
  };

  return (
    <div className="add-item-container">
      <h2>Add New Stock</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input type="text" placeholder="SKU / Item Code" onChange={e => setItem({...item, item_code: e.target.value})} required />
        <input type="text" placeholder="Item Name" onChange={e => setItem({...item, item_name: e.target.value})} required />
        <input type="number" placeholder="Quantity" onChange={e => setItem({...item, quantity: e.target.value})} />
        <input type="text" placeholder="Location" onChange={e => setItem({...item, location_id: e.target.value})} />
        <input type="text" placeholder="Lot" onChange={e => setItem({...item, lot: e.target.value})} />
        <div className="form-buttons">
          <button type="submit" className="save-btn">Save to Warehouse</button>
          <p></p>
          <button type="button" className="refresh-btn" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAction = async (path) => {
    try {
      const res = await axios.post(`http://localhost:8080/api/${path}`, formData);
      if (res.data.username || res.data === "Login Successful!") {
        setIsLoggedIn(true);
        fetchItems();
      } else { alert(res.data); }
    } catch (err) { alert("Backend Error: Is Spring Boot running?"); }
  };

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/items");
      setItems(res.data);
    } catch (err) { console.error("Fetch error"); }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2>WMS Portal</h2>
          <input type="text" placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
          <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
          <button className="login-btn" onClick={() => handleAction('login')}>Login</button>
          <button className="reg-btn" onClick={() => handleAction('register')}>Register</button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="main-layout">
        <aside className="sidebar">
          <div className="sidebar-brand"><Package size={28} color="#3b82f6" /><h2>Khai WMS</h2></div>
          <ul className="sidebar-menu">
            <li className="active"><Link to="/"><LayoutDashboard size={20} /> <span>Inventory</span></Link></li>
            <li><ShoppingCart size={20} /> <span>Orders</span></li>
          </ul>
          <button className="logout-btn-sidebar" onClick={() => setIsLoggedIn(false)}><LogOut size={18} /> Logout</button>
        </aside>

        <main className="content-area">
          <Routes>
            <Route path="/" element={<InventoryTable items={items} searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchItems={fetchItems} />} />
            <Route path="/add-item" element={<AddItemPage fetchItems={fetchItems} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
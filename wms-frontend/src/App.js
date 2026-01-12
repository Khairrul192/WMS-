import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ItemRegForm from './ItemRegForm'; 
import axios from 'axios';
import { 
  LayoutDashboard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Database, 
  MapPin, 
  Users, 
  UserCircle, 
  History,
  Package, 
  LogOut, 
  Search 
} from 'lucide-react';

// --- SUB-COMPONENT: Inventory Table Page ---
const InventoryTable = ({ items, searchTerm, setSearchTerm }) => (
    <div className="table-container">
        <div className="table-header">
            <h2>Stock</h2>
            <div className="table-header-actions">
                <div className="search-wrapper">
                    <Search className="search-icon" size={18} />
                    <input 
                        type="text" 
                        className="search-input"
                        placeholder="Search by item name..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* */}
                <Link to="/add-item">
                    <button className="add-stock-btn">Add New Stock</button>
                </Link>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Item Code</th>
                    <th>Alternate Item Code</th>
                    <th>Item Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Client</th>
                </tr>
            </thead>
            <tbody>
                {items
                    .filter(item => (item.item_name || "").toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(item => (
                        <tr key={item.item_code}>
                            <td>{item.item_code}</td>
                            {/* FIXED: Using altitem_code to match your DB data */}
                            <td>{item.altitem_code}</td> 
                            <td>{item.item_name}</td>
                            <td>{item.type}</td>
                            <td>
                                <span className={`status-pill ${item.status === 'Available' ? 'in-stock' : 'out-stock'}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td>{item.vendor}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
);

// --- SUB-COMPONENT: Sidebar ---
const Sidebar = ({ setIsLoggedIn }) => {
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState({ inbound: false, outbound: false });
    const toggleMenu = (menu) => {
        setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };
    // Logic to move the active blue highlight
    const isActive = (path) => location.pathname === path ? "active" : "";

    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <div className="sidebar-brand">
                    <Package size={28} color="#3b82f6" />
                    <h2>WMS</h2>
                </div>
                
                <nav className="sidebar-nav">
                    <ul className="sidebar-menu">
                        <li className={isActive("/")}>
                            <Link to="/"><LayoutDashboard size={20} /> <span>Dashboard</span></Link>
                        </li>
                        <li className={`has-submenu ${openMenus.outbound ? 'open' : ''}`}>
                            <div className="menu-item" onClick={() => toggleMenu('outbound')}>
                                <ArrowUpRight size={20} /> <span>Outbound</span>
                            </div>
                            <ul className="submenu">
                                <li className={isActive("/outbound/sales")}><Link to="/outbound/sales">Sales</Link></li>
                                <li className={isActive("/outbound/transfer")}><Link to="/outbound/transfer">Transfer</Link></li>
                                <li className={isActive("/outbound/return")}><Link to="/outbound/return">Return</Link></li>
                            </ul>
                        </li>
                        <li className={`has-submenu ${openMenus.inbound ? 'open' : ''}`}>
                            <div className="menu-item" onClick={() => toggleMenu('inbound')}>
                                <ArrowDownLeft size={20} /> <span>Inbound</span>
                            </div>
                            <ul className="submenu">
                                <li className={isActive("/inbound/purchase")}><Link to="/inbound/purchase">Purchase</Link></li>
                                <li className={isActive("/inbound/customer-return")}><Link to="/inbound/customer-return">Customer Return</Link></li>
                            </ul>
                        </li>
                        <li className={isActive("/stock")}>
                            <Link to="/"><Database size={20} /> <span>Stock</span></Link>
                        </li>
                        <li className={isActive("/location")}>
                            <Link to="/location"><MapPin size={20} /> <span>Location</span></Link>
                        </li>
                        <li className={isActive("/client")}>
                            <Link to="/client"><Users size={20} /> <span>Client</span></Link>
                        </li>
                        <li className={isActive("/user")}>
                            <Link to="/user"><UserCircle size={20} /> <span>User</span></Link>
                        </li>
                        <li className={isActive("/logs")}>
                            <Link to="/logs"><History size={20} /> <span>Logs</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="sidebar-footer">
                <button className="logout-btn-sidebar" onClick={() => setIsLoggedIn(false)}>
                    <LogOut size={18} /> <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

// --- MAIN APP COMPONENT ---
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
            } else { alert(res.data); }
        } catch (err) { alert("Backend Error: Is Spring Boot running?"); }
    };

    const fetchItems = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/items");
            setItems(res.data);
        } catch (err) { console.error("Fetch error"); }
    };

    useEffect(() => {
        if (isLoggedIn) fetchItems();
    }, [isLoggedIn]);

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
                <Sidebar setIsLoggedIn={setIsLoggedIn} />

                {/* Content area now has proper padding to avoid sidebar overlap */}
                <main className="content-area">
                    <Routes>
                        <Route path="/" element={<InventoryTable items={items} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
                        <Route path="/add-item" element={<ItemRegForm fetchItems={fetchItems} />} /> 
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VendorList = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/vendor")
            .then(res => setVendors(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="table-container">
            <div className="table-header">
                <h2>Vendor List</h2>
                <Link to="/add-vendor">
                    <button className="add-stock-btn">Add New Vendor</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>VENDOR CODE</th>
                        <th>VENDOR NAME</th>
                        <th>REG NUMBER</th>
                        <th>OFFICE NO</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map(v => (
                        <tr key={v.id}>
                            <td>{v.vendorcode}</td>
                            <td>{v.vendor}</td>
                            <td>{v.regnumber}</td>
                            <td>{v.officeno}</td>
                            <td>
                                <span className={`status-pill ${v.status === 'Active' ? 'available' : 'unavailable'}`}>
                                    {v.status || 'Active'}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VendorList;
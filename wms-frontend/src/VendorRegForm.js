import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';

const VendorRegForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        vendor: '',
        vendorcode: '',
        regnumber: '',
        vendoradd: '',
        officeno: '',
        status: 'Active'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // URL MUST match your @RequestMapping("/api/vendor")
            await axios.post("http://localhost:8080/api/vendor", formData);
            alert("Vendor Registered Successfully!");
            navigate("/vendor");
        } catch (err) {
            console.error(err);
            alert("Error saving vendor");
        }
    };

    return (
        <div className="form-page-container">
            <div className="registration-card">
                <h2>Vendor Registration</h2>
                <form onSubmit={handleSubmit} className="grid-precise-flow">
                    {/* Line 1: Vendor Name */}
                    <div className="form-field span-3">
                        <label>Vendor Name:</label>
                        <input type="text" name="vendor" onChange={handleChange} required />
                    </div>

                    {/* Line 2: Code, Reg No, Office No */}
                    <div className="form-field">
                        <label>Vendor Code:</label>
                        <input type="text" name="vendorcode" onChange={handleChange} required />
                    </div>
                    <div className="form-field">
                        <label>Registration Number:</label>
                        <input type="text" name="regnumber" onChange={handleChange} />
                    </div>
                    <div className="form-field">
                        <label>Office Number:</label>
                        <input type="text" name="officeno" onChange={handleChange} />
                    </div>

                    {/* Line 3: Address and Status */}
                    <div className="form-field span-2">
                        <label>Address:</label>
                        <input type="text" name="vendoradd" onChange={handleChange} />
                    </div>
                    <div className="form-field">
                        <label>Status:</label>
                        {/* FIX: formData.status instead of vendorData.status */}
                        <select name="status" value={formData.status} onChange={handleChange}>
                            <option value="Active">Active</option>
                            <option value="Deactive">Deactive</option>
                        </select>
                    </div>

                    <div className="form-button-group">
                        <button type="submit" className="btn-save">Save</button>
                        <button type="button" className="btn-cancel" onClick={() => navigate("/vendor")}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VendorRegForm;
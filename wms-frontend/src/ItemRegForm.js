import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './itemregister.css'; 

const ItemRegForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vendor: '', item_code: '', AltitemCode: '', item_name: '', 
    description: '', status: 'Available', type: 'EA', 
    unitprice: '', weight: '', length: '', height: '', width: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-page-container">
      <div className="registration-card">
        <h2 style={{ marginBottom: '30px', color: '#1e293b' }}>Add New Stock</h2>
        <form className="grid-precise-flow">
          
          {/* Line 1: Vendor (Full Width) */}
          <div className="form-field span-3">
            <label>Vendor :</label>
            <input name="vendor" type="text" onChange={handleChange} placeholder="Enter vendor name..." />
          </div>

          {/* Line 2: Item Code, Alternate Item Code, Item Name */}
          <div className="form-field">
            <label>Item Code :</label>
            <input name="item_code" type="text" onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Alternate Item Code :</label>
            <input name="AltitemCode" type="text" onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Item Name :</label>
            <input name="item_name" type="text" onChange={handleChange} />
          </div>

          {/* Line 3: Description, Status */}
          <div className="form-field span-2">
            <label>Description :</label>
            <input name="description" type="text" onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Status :</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          {/* Line 4: Type, Unit Price, Weight */}
          <div className="form-field">
            <label>Type :</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="EA">EA - EACH</option>
              <option value="PC">PC - PACKS</option>
            </select>
          </div>
          <div className="form-field">
            <label>Unit Price (RM):</label>
            <input name="unitprice" type="number" onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Weight (KG):</label>
            <input name="weight" type="number" onChange={handleChange} />
          </div>

          {/* Line 5: Length, Height, Width */}
          <div className="form-field">
            <label>Length (CM):</label>
            <input name="length" type="number" onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Height (CM):</label>
            <input name="height" type="number" onChange={handleChange} />
          </div>
          <div className="form-field">
            <label>Width (CM):</label>
            <input name="width" type="number" onChange={handleChange} />
          </div>

          {/* Actions - Pinned to bottom right */}
          <div className="form-button-group">
            <button type="button" className="btn-cancel" onClick={() => navigate("/")}>Cancel</button>
            <button type="submit" className="btn-save">Save Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemRegForm;
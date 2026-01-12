import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ItemRegForm = ({ fetchItems }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    item_code: '', 
    item_name: '', 
    AltitemCode: '',
    description: '',
    status: '', 
    expiration: '', 
    type: '',
    unitprice: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    vendor: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/items", formData);
      alert("Item Registered Successfully!");
      fetchItems();
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error saving item.");
    }
  };

  const handleChange = (e) => {
  const { name, value, type } = e.target;
  setFormData({...formData, [name]: type === 'number' ? parseInt(value, 10) || 0 : value});
};

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Stock</h2>
      <form onSubmit={handleSubmit} className="aligned-form">
        
        <div className="form-group">
          <label>Item Code :</label>
          <input name="item_code" type="text" value={formData.item_code} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Item Name :</label>
          <input name="item_name" type="text" value={formData.item_name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Alternate Item Code :</label>
          <input name="AltitemCode" type="text" value={formData.AltitemCode} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Description :</label>
          <input name="description" type="text" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Status :</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="" disabled>Status</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>

        <div className="form-group">
          <label>Expiration :</label>
          <select name="expiration" value={formData.expiration} onChange={handleChange}>
            <option value="" disabled>Expiration</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label>Type :</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="" disabled>Type</option>
            <option value="EA">EA - EACH</option>
            <option value="PC">PC - PACKS</option>
            <option value="CS">CS - CASE</option>
          </select>
        </div>

        <div className="form-group">
          <label>Unit Price (RM):</label>
          <input name="unitprice" type="number" value={formData.unitprice} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Weight (KG) :</label>
          <input name="weight" type="number" value={formData.weight} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Width (CM):</label>
          <input name="width" type="number" value={formData.width} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Length (CM):</label>
          <input name="length" type="number" value={formData.length} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Height (CM):</label>
          <input name="height" type="number" value={formData.height} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Vendor :</label>
          <input name="vendor" type="text" value={formData.vendor} onChange={handleChange} />
        </div>

        <div className="form-actions">
          <button type="submit" className="formsave-btn">Save</button>
          <button type="button" className="formcancel-btn" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ItemRegForm;
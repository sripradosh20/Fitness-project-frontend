import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updiet.css'; // Use the same CSS file

const PremiumPlanUpdate = () => {
  const [plans, setPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/premium-plans');
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans', error);
      }
    };
    fetchPlans();
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setCurrentPlan(null);
    setEditMode(false);
  };

  const handleSave = async () => {
    if (editMode) {
      try {
        await axios.put(`http://localhost:8080/api/premium-plans/${currentPlan.id}`, currentPlan);
        setPlans(plans.map(plan => (plan.id === currentPlan.id ? currentPlan : plan)));
      } catch (error) {
        console.error('Error updating plan', error);
      }
    } else {
      try {
        const response = await axios.post('http://localhost:8080/api/premium-plans', currentPlan);
        setPlans([...plans, response.data]);
      } catch (error) {
        console.error('Error adding new plan', error);
      }
    }
    handleClose();
  };

  const handleEdit = (plan) => {
    setCurrentPlan(plan);
    setEditMode(true);
    handleShow();
  };

  const handleDelete = async (plan) => {
    try {
      await axios.delete(`http://localhost:8080/api/premium-plans/${plan.id}`);
      setPlans(plans.filter(p => p.id !== plan.id));
    } catch (error) {
      console.error('Error deleting plan', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPlan(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="path/to/logo.png" alt="Logo" className="custom-logo" />
          </Link>
          <div className="navbar-collapse collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/contact-us">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="custom-container">
        <div className="text-right mb-3">
          <button className="btn btn-primary custom-button" onClick={() => {
            setCurrentPlan({ name: '', price: '' });
            setEditMode(false);
            handleShow();
          }}>Add New Plan</button>
        </div>
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.name}</td>
                <td>{plan.price}</td>
                <td>{plan.description}</td>
                <td>
                  <button className="btn btn-warning custom-button" onClick={() => handleEdit(plan)}>Edit</button>
                  <button className="btn btn-danger custom-button" onClick={() => handleDelete(plan)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header custom-modal-header">
                  <h5 className="modal-title">{editMode ? 'Edit Plan' : 'Add Plan'}</h5>
                  <button type="button" className="close" onClick={handleClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Plan Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={currentPlan?.name || ''}
                        onChange={handleChange}
                        placeholder='Plan Name'
                      />
                    </div>
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        value={currentPlan?.price || ''}
                        onChange={handleChange}
                        placeholder='Price'
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={currentPlan?.description || ''}
                        onChange={handleChange}
                        placeholder='Description'
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary custom-button" onClick={handleClose}>Close</button>
                  <button type="button" className="btn btn-primary custom-button" onClick={handleSave}>{editMode ? 'Update' : 'Save'}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumPlanUpdate;

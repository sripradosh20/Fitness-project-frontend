import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './updiet.css';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const [currentUser, setCurrentUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  // Fetch users from backend on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/registration');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };
    fetchUsers();
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setCurrentUser(null);
    setEditMode(false);
  };

  const handleSave = async () => {
    if (editMode) {
      // Update user in backend
      try {
        await axios.put(`http://localhost:8080/api/registration/${currentUser.id}`, currentUser);
        setUsers(users.map(user => (user.id === currentUser.id ? currentUser : user)));
      } catch (error) {
        console.error('Error updating user', error);
      }
    } else {
      // Create new user in backend
      try {
        const response = await axios.post('http://localhost:8080/api/registration', currentUser);
        setUsers([...users, response.data]);
      } catch (error) {
        console.error('Error creating user', error);
      }
    }
    handleClose();
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setEditMode(true);
    handleShow();
  };

  const handleDelete = async (user) => {
    try {
      await axios.delete(`http://localhost:8080/api/registration/${user.id}`);
      setUsers(users.filter(u => u.id !== user.id));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  const handleStatusChange = async (user) => {
    const updatedStatus = user.uStatus === 'Active' ? 'Inactive' : 'Active';
    const updatedUser = { ...user, uStatus: updatedStatus };

    try {
      await axios.put(`http://localhost:8080/api/registration/${user.id}`, updatedUser);
      setUsers(users.map(u => (u.id === user.id ? updatedUser : u)));
    } catch (error) {
      console.error('Error updating user status', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img src="path/to/logo.png" alt="fitspace" className="custom-logo" />
          </Link>
          <div className="navbar-collapse collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/plan">Premium Plan</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/wrkout">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="custom-container">
        <div className="text-right mb-3">
          <button className="btn btn-primary custom-button" onClick={handleShow}>Add New User</button>
        </div>
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th> {/* Ideally, this should be hashed or not shown */}
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.full_name}</td>
                <td>{user.email_id}</td>
                <td>{user.password}</td> {/* Again, consider not displaying passwords */}
                <td>
                  <button 
                    className={`btn custom-button ${user.uStatus === 'Active' ? 'btn-success' : 'btn-secondary'}`}
                    onClick={() => handleStatusChange(user)}
                  >
                    {user.uStatus}
                  </button>
                </td>
                <td>
                  <button className="btn btn-warning custom-button" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="btn btn-danger custom-button" onClick={() => handleDelete(user)}>Delete</button>
                  <Link className="btn btn-primary custom-button" to={`/upload-diet-plan/${user.id}`}>Upload Diet Plan</Link>
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
                  <h5 className="modal-title">{editMode ? 'Edit User' : 'Add User'}</h5>
                  <button type="button" className="close" onClick={handleClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-control" name="full_name" value={currentUser?.full_name || ''} onChange={handleChange} placeholder='Full Name' />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" name="email_id" value={currentUser?.email_id || ''} onChange={handleChange} placeholder='Email' />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password" value={currentUser?.password || ''} onChange={handleChange} placeholder='Password' />
                    </div>
                    <div className="form-group">
                      <label>Status</label>
                      <select className="form-control" name="uStatus" value={currentUser?.uStatus || 'Active'} onChange={handleChange}>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
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

export default UserManagement;

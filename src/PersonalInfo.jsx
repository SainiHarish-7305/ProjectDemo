// import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import ProfilePictureForm from './Components/ProfilePicture';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import GenderDropdown from './Components/Gender';


function PersonalDetails({ username, setUsername, currentPassword, setCurrentPassword, newPassword, setNewPassword, customGender, setCustomGender }) {
  const navigate = useNavigate();

  const handleNext = () => {
    // You can add validation or form submission logic here
    console.log('Username:', username);
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);

    navigate('/professionaldetails');
  };
  return (

    <div className="form-container">
      <form action="">
        <div className="profile-section">
          <i className="bi bi-person-circle icon"></i>
          <ProfilePictureForm />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            placeholder="Enter Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div>
          <GenderDropdown customGender={customGender} setCustomGender={setCustomGender}></GenderDropdown>
        </div>
        <button
          type="button"
          onClick={handleNext}
          className="btn btn-primary"
        >
          Next
        </button>
      </form>

      <style jsx>{`
    .form-container {
      max-width: 400px;
      margin: 40px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      font-family: sans-serif;
    }

    .profile-section {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    .icon {
      font-size: 48px;
      margin-right: 10px;
    }

    .form-group {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 5px;
      font-weight: 600;
    }

    input {
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    input:focus {
      border-color: #007bff;
      outline: none;
    }

    .btn-primary {
      width: 100%;
      padding: 10px;
      font-size: 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-top:30px;
    }

    .btn-primary:hover {
      background-color: #0056b3;
    }
  `}</style>
    </div >

  );
}

export default PersonalDetails

import { useState } from 'react';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';

function ProfessinalDetails({ profession, setProfession, companyName, setCompanyName, address, setAddress }) {


  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (address.trim() === '') return;
    if (profession === 'Entrepreneur' && companyName.trim() === '') return;

    alert('Form submitted successfully!');
  };

  return (

    <div className="form-container">
      <h2>Professional Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Profession</label>
          <select value={profession} onChange={(e) => setProfession(e.target.value)}>
            <option value="">-- Select Profession --</option>
            <option value="Student">Student</option>
            <option value="Developer">Developer</option>
            <option value="Entrepreneur">Entrepreneur</option>
          </select>
        </div>

        {profession === 'Entrepreneur' && (
          <div className="form-group">
            <label>Company Name <span className="required">*</span></label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            {submitted && companyName.trim() === '' && (
              <p className="error">Company Name is required.</p>
            )}
          </div>
        )}

        <div className="form-group">
          <label>Address Line 1 <span className="required">*</span></label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {submitted && address.trim() === '' && (
            <p className="error">Address is required.</p>
          )}
        </div>

        <button className="btn btn-primary" type="button" onClick={() => navigate('/preferences')}>Next</button>
      </form>

      {/* Simple CSS */}
      <style>{`
        .form-container {
          width: 400px;
          margin: 30px auto;
          padding: 20px;
          background: #f7f7f7;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          font-family: sans-serif;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 600;
        }

        input, select {
          width: 100%;
          padding: 8px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .required {
          color: red;
        }

        .error {
          color: red;
          font-size: 0.9rem;
          margin-top: 4px;
        }

        button {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>

  );
}

export default ProfessinalDetails;
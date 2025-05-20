import React from 'react';

function Summary({ username,
  currentPassword,
  newPassword,
  profession,
  gender,
  companyName,
  address,
  country,
  state,
  city,
  subscriptionPlan,
  newsletter, }) {

  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <div className="summary-form">
        <div className="form-row">
          <label>Profile Photo:</label>
          {/* <div>{profilePhoto ? <img src={profilePhoto} alt="Profile" width="100" /> : 'Not uploaded'}</div> */}
          <div>abc@gmail.com</div>
        </div>

        <div className="form-row">
          <label>Username:</label>
          <div>{username}</div>
        </div>

        <div className="form-row">
          <label>Current Password:</label>
          <div>{'*'.repeat(currentPassword.length)}</div>
        </div>

        <div className="form-row">
          <label>New Password:</label>
          <div>{'*'.repeat(newPassword.length)}</div>
        </div>

        <div className="form-row">
          <label>Gender:</label>
          <div>{gender}</div>
        </div>

        <div className="form-row">
          <label>Profession:</label>
          <div>{profession}</div>
        </div>

        {profession === 'Entrepreneur' && (
          <div className="form-row">
            <label>Company Name:</label>
            <div>{companyName}</div>
          </div>
        )}

        <div className="form-row">
          <label>Address Line 1:</label>
          <div>{address}</div>
        </div>

        <div className="form-row">
          <label>Country:</label>
          <div>{country}</div>
        </div>

        <div className="form-row">
          <label>State:</label>
          <div>{state}</div>
        </div>

        <div className="form-row">
          <label>City:</label>
          <div>{city}</div>
        </div>

        <div className="form-row">
          <label>Subscription Plan:</label>
          <div>{subscriptionPlan}</div>
        </div>

        <div className="form-row">
          <label>Newsletter:</label>
          <div>{newsletter ? 'Subscribed' : 'Not Subscribed'}</div>
        </div>
      </div>

      <style>{`
    .summary-container {
      max-width: 600px;
      margin: 40px auto;
      padding: 30px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      font-family: sans-serif;
    }

    h2 {
      text-align: center;
      margin-bottom: 25px;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .summary-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-row {
      display: flex;
      justify-content: space-between;
      border: 1px solid #ccc;
      border-radius: 6px;
      padding: 10px 15px;
      background: #f9f9f9;
    }

    .form-row label {
      font-weight: 600;
      color: #333;
      min-width: 160px;
    }

    .form-row div {
      flex: 1;
      color: #555;
      text-align: right;
    }

    img {
      border-radius: 8px;
    }
  `}</style>
    </div>

  );
}

export default Summary;

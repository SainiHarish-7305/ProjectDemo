import React, { useState } from 'react';

export default function ProfilePictureForm() {
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhoto(null);
    }
  };

  const handleRemove = () => {
    setPhoto(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo) {
      console.log('Submitted profile picture:', photo);
      // Send to backend or save in state
    } else {
      alert('Please upload a picture first.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <h2>Upload Profile Picture</h2>

      <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />

      {photo && (
        <div className="preview-section">
          <img src={photo} alt="Preview" className="preview-img" />
          <br />
          <button type="button" onClick={handleRemove} className="btn btn-secondary">
            Remove Picture
          </button>
        </div>
      )}

      <br />
      {/* {photo == null && <button type="button" className="btn btn-primary" onClick={() => handleFileChange()}>Select Photo</button>} */}

      <style jsx>{`
    .upload-form {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 12px;
      background-color: #f9f9f9;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      font-family: sans-serif;
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    .file-input {
      display: block;
      margin: 0 auto 20px auto;
      padding: 8px;
      font-size: 1rem;
    }

    .preview-section {
      text-align: center;
      margin-bottom: 20px;
    }

    .preview-img {
      width: 150px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      margin-bottom: 10px;
    }

    .btn {
      padding: 10px 16px;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
    }

    .btn-primary {
      background-color: #007bff;
      color: white;
      display: block;
      width: 100%;
    }

    .btn-primary:hover {
      background-color: #0056b3;
    }

    .btn-secondary {
      background-color: #dc3545;
      color: white;
      margin-top: 8px;
    }

    .btn-secondary:hover {
      background-color: #b02a37;
    }
  `}</style>
    </form>

  );
}

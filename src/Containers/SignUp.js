import React, { useState } from 'react';
import Header from './Header';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    const loginData = {
        email: email,
        password: password
      };

    fetch('http://localhost:8080/employee_app/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       
      <form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '400px', width: '100%' }} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
        <div style={{ marginBottom: '15px' }}>
          <label>Email :</label>
          <input type="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Full Name:</label>
          <input type="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Date Of Birth</label>
          <input type="date" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '3px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

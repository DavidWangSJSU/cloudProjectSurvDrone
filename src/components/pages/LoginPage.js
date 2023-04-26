import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { async } from 'q';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Perform authentication here, and handle routing upon successful authentication.
    sendRequest().then(async()=>{
      const res=await axios.get(
        `http://localhost:5001/api/getuserProfile/${email}`
      );
      console.log("USER DETAILS:",res.data.user);
      window.sessionStorage.setItem("userdetails",JSON.stringify(res.data.user));
      navigate("/dashboard");
    });
  };

  const sendRequest=async()=>{
      const res=await axios.post('http://localhost:5001/api/login',{
          email:email,
          password:password,
      },{withCredentials: true}).catch(err=>console.log(err))
      const data=await res.data;
      return data;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

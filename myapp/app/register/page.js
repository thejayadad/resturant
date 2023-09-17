'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await axios.post('http://localhost:3000/api/register', formData);
          console.log('Registration successful:', response.data);
         setFormData({
            username: '',
            email: '',
            password: '',
          });
        } catch (error) {
          console.error('Registration failed:', error.message);
        }
      };
  return (
    <section>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </section>
  )
}

export default Register
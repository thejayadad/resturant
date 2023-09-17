'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const router = useRouter();

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        if (password === '' || email === '') {
          toast({
            title: 'Error',
            description: 'Fill all fields!',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          return;
        }

        if (password.length < 6) {
          toast({
            title: 'Error',
            description: 'Password must be at least 6 characters long',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          return;
        }

        try {
          const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
          });

          if (res?.error == null) {
            router.push('/');
          } else {
            toast({
              title: 'Error',
              description: 'Error occurred while logging in',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <section>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
    <p>
      Need an account?{' '}
      <span>
        <Link href="/register">Register</Link>
      </span>
    </p>
  </section>
  )
}

export default Login
import Link from "next/link";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, email, password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'applications/json' },
      body: JSON.stringify({ username, password })
    };

    try {
      const response = await fetch('http://localhost:3000/api/user/login', requestOptions);
      const data = await response.json();

      if (response.ok) {
        console.log('User logged in successfully: ', data);
      } else {
        console.error('Login failed', data.error);
      }

    } catch (error) {
      console.log('Error logging in: ', error);
    }
  };

  return (
    <>
      <Link href="/">Home</Link>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input type="name" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log in</button>
        <Link href="/register">Create a new account.</Link>
      </form>
    </>
  );
}

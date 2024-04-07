import {
  Button,
  Container,
  Fieldset,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email, password);

  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('auth-token')
    if (authToken) {
      router.push('/dashboard')
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    try {
      const response = await fetch(
        "https://split-right-api.onrender.com/api/auth/login",
        requestOptions
      );
      const data = await response.json();

      if (!response.ok) {
        console.error("Login failed", data.error);
      } else {
        console.log("User logged in successfully: ", data);
        localStorage.setItem('auth-token', data.token)
        router.push('/dashboard')
      }
    } catch (error) {
      console.log("Error logging in: ", error);
    }
  };

  return (
    <>
      <Link href="/">Yofin</Link>
      <form onSubmit={handleSubmit}>
        <Container size="xs">
          <Fieldset legend="Login">
            <TextInput
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="Your email"
            />
            <PasswordInput
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              label="password"
              placeholder="Choose a password"
            />
            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
            <Link href="/register">Create a new account.</Link>
          </Fieldset>
        </Container>
      </form>
    </>
  );
}

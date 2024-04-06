import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Center, Container, Fieldset, Group, PasswordInput, TextInput } from "@mantine/core";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, email, password);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/user/register/",
        requestOptions
      );
      const data = await response.json();
      console.log("User registered successfully: ", data);
      router.push("/login");
    } catch (error) {
      console.log("Error registering user: ", error);
    }
  };

  return (
    <>
      <Link href="/">Yofin</Link>
      <form onSubmit={handleSubmit}>
        <Container size="xs">
          <Fieldset legend="Sign Up">
            <TextInput
              type="name"
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              placeholder="Choose a username"
            />
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
          <Link href="login">Already have an account?</Link>
          </Fieldset>
        </Container>
        {/* <div>
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
        </div> */}
        {/* <button type="submit">Sign Up</button> */}

      </form>
    </>
  );
}

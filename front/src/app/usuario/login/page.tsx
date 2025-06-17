"use client";

import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const url = "http://localhost:5003"
  async function efetuarLogin(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(`${url}/api/usuari/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });
    if (!response.ok) {
      alert("Login ou senha incorretos!");
      return;
    }

    
    const token = await response.text();
    localStorage.setItem('token', token);
    router.push("/produto/listar");
    console.log(token, "token")
  }
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={efetuarLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="E-mail"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <TextField
            fullWidth
            margin="normal"
            label="Senha"
            type="password"
            autoComplete="current-password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{mt : 2}}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;

import React, { useState } from 'react';
import {
  LoginContainer,
  LoginForm,
  LoginTitle,
  LoginInput,
  LoginButton,
  LoginError,
  BackgroundOverlay,
} from './Login.styled';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Por favor, preencha todos os campos.');
    } else {
      setError('');
      // Lógica de autenticação aqui
      console.log('Usuário:', username);
      console.log('Senha:', password);
    }
  };

  return (
    <LoginContainer>
      <BackgroundOverlay />
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>Login</LoginTitle>
        {error && <LoginError>{error}</LoginError>}
        <LoginInput
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type="submit">Entrar</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;

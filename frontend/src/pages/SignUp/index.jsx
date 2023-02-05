import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import {
  Container,
  AuthBox,
  Logo,
  Info,
} from '../SignIn/styles';

import { Input } from '../../components/Input';
import { Divisor } from '../../components/Divisor';
import { PrimaryBtn, SecondaryBtn } from '../../components/Btns';

// Hooks
import { useAuth } from '../../hooks/auth';

export function SignUp() {
  const { user, signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) navigate("/");
    return
  }, [user])

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Container>
      <AuthBox>
        <Logo>Logo</Logo>
        <Info style={{ marginBottom: 30 }}>Informe seus dados para criar uma conta</Info>
        <Input
          label="Nome completo"
          border
          placeholder="Insira seu nome completo"
          value={name}
          onChange={(e) => setName(e?.target?.value)}
          />
        <Input
          label="Nome de usuário"
          border
          placeholder="Insira um usuário"
          value={username}
          onChange={(e) => setUsername(e?.target?.value)}
          />
        <Input
          label="Senha"
          border
          type="password"
          placeholder="Sua senha secreta"
          value={pass}
          onChange={(e) => setPass(e?.target?.value)}
          />
        <PrimaryBtn text="Cadastrar" onClick={() => signUp({ name, username, pass })} />
        <Divisor label="Ou" />
        <SecondaryBtn noBorder text="Acessar minha conta" onClick={() => navigate('/signin')} />
      </AuthBox>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import {
  Container,
  AuthBox,
  Logo,
  Info,
} from './styles';

import { Input } from '../../components/Input';
import { Divisor } from '../../components/Divisor';
import { PrimaryBtn, SecondaryBtn } from '../../components/Btns';

// Hooks
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) navigate("/");
    return
  }, [user])


  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  return (
    <Container>
      <AuthBox>
        <Logo>Logo</Logo>
        <Info style={{ marginBottom: 30 }}>Identifique-se para continuar</Info>
        <Input
          label="Nome de usuário"
          border
          placeholder="Insira seu nome de usuário"
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
        <PrimaryBtn text="Entrar" onClick={() => signIn({ username, pass })}/>
        <Divisor label="Ou" />
        <SecondaryBtn noBorder text="Criar uma conta" onClick={() => navigate('/signup')}/>
      </AuthBox>
    </Container>
  );
}

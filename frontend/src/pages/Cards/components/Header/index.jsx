import React from 'react';
import { FiLogOut } from "react-icons/fi";

import { Container, User, Logout} from './styles';

// Hooks
import { useAuth } from '../../../../hooks/auth';

export function Header() {
  const { user, signOut } = useAuth();

  return (<Container>
    <User>{user?.user || "Usuário exemplo"}</User>
    <Logout onClick={signOut}>
      <FiLogOut color="white" />
    </Logout>
  </Container>);
}

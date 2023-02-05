import React, { useEffect, useState, useContext, createContext } from 'react';

import { api } from '../service/api';

// Hooks
import { useAlerts } from './alerts';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const { alert } = useAlerts();
  const [user, setUser] = useState(null);

  api.defaults.headers.authorization = user?.token ? `Bearer ${user?.token}` : null;

  function saveSession(data) {
    localStorage.setItem('session', JSON.stringify(data));
  }

  function recoverSession() {
    const data = JSON.parse(localStorage.getItem('session')) || null;
    setUser(data); 
  }

  async function signIn({ username, pass }) {
    const { data } = await api.post('/signin', { user: username, pass });

    if (data?.error) return alert('Erro', data?.error);

    setUser(data);
    saveSession(data);
  }

  async function signUp({ name, username, pass }) {
    const { data } = await api.post('/signup', { user: username, pass, name });

    if (data?.error) return alert('Erro', data?.error);

    setUser(data);
    saveSession(data)
  }

  function signOut() {
    localStorage.removeItem('session');
    setUser(null);
  }

  useEffect(() => {
    recoverSession()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signUp,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  const context = useContext(AuthContext);
  return context
}
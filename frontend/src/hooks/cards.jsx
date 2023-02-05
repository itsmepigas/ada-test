import React, { useEffect, useState, useContext, createContext } from 'react';

import { api } from '../service/api';

// Componets
import { View } from '../pages/Cards/components/View';

// Hooks
import { useAlerts } from './alerts';


const CardsContext = createContext({});

export function CardsProvider({ children }) {
  const { alert } = useAlerts();

  const priorities = [
    {
      type: 'low',
      name: 'Baixa',
    },
    {
      type: 'medium',
      name: 'Média',
    },
    {
      type: 'high',
      name: 'Alta',
    }
  ];

  const statuses = [
    {
      type: 'new',
      name: 'Novo',
    },
    {
      type: 'pending',
      name: 'Pendente',
    },
    {
      type: 'inProgress',
      name: 'Em andamento',
    },
    {
      type: 'completed',
      name: 'Concluído',
    }
  ];


  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(null);
  const [openView, setOpenView] = useState(false);

  async function get() {
    const { data } = await api.get('/cards');

    if (data?.error) return alert('Erro', data?.error);

    setCards(data?.cards);
  }

  async function create(card) {
    const { data } = await api.post('/cards', { ...card });

    if (data?.error) return alert('Erro', data?.error);

    setCards(data?.cards);

  }

  async function update(card) {
    const { data } = await api.put(`/cards/${card?.id}`, { ...card });

    if (data?.error) return alert('Erro', data?.error);

    setCards(data?.cards);

  }

  async function remove(id) {
    const { data } = await api.delete(`/cards/${id}`);

    if (data?.error) return alert('Erro', data?.error);

    setCards(data?.cards);
  }

  function edit(Card = null) {
    setCard(Card);
    setOpenView(true);
  }

  return (
    <CardsContext.Provider value={{
      cards,
      get,
      create,
      update,
      remove,
      edit,
      priorities,
      statuses,
    }}>
      {children}
      { openView && <View card={card} onClose={() => {
        setOpenView(false)
        setCard(null)
      }} /> }
    </CardsContext.Provider>
  );
}

export function useCards(){
  const context = useContext(CardsContext);
  return context
}
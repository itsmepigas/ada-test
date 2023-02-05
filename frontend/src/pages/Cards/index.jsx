import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Container, Column, Title, ColumnContent } from './styles';

import { Header } from './components/Header';
import { Card } from './components/Card';
import { Add } from '../../components/Btns';

// Hooks
import { useAuth } from '../../hooks/auth';
import { useCards } from '../../hooks/cards';
import { useAlerts } from '../../hooks/alerts';

export function Cards() {
  const { alert } = useAlerts();
  const { user } = useAuth();
  const { cards, update, edit, get } = useCards();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.token) navigate("/signin");
    get()
    return
  }, [user]);

  function handleDND(result) {
    if (!result?.destination) return;
    
    if (result?.source?.droppableId === "completed" && result?.destination?.droppableId !== "completed") {
      return alert('Atenção', "Você não pode mover um card concluído para outro status!");
    }

    const cardIndex = cards.findIndex(c => c?.id === result?.draggableId);

    update({
      ...cards[cardIndex],
      status: result?.destination?.droppableId
    });
  }

  return (
    <>
      <Header />
      <Container>
        <DragDropContext onDragEnd={handleDND}>
        <Column>
          <Title>Novo</Title>
          <Droppable droppableId='new'>
            {
              (provided) => (
                <ColumnContent {...provided.droppableProps} ref={provided.innerRef}>
                  {
                    cards
                      ?.filter(c => c?.status === "new")
                      ?.map((c, i) => <Card key={c?.id} card={c} index={i} />)
                    }
                  {provided.placeholder}
                </ColumnContent>
              )
            }
          </Droppable>
        </Column>
        <Column>
          <Title>Pendentes</Title>
          <Droppable droppableId='pending'>
            {
              (provided) => (
                <ColumnContent {...provided.droppableProps} ref={provided.innerRef}>
                  {
                    cards
                      ?.filter(c => c?.status === "pending")
                      ?.map((c, i) => <Card key={c?.id} card={c} index={i} />)
                    }
                  {provided.placeholder}
                </ColumnContent>
              )
            }
          </Droppable>
        </Column>
        <Column>
          <Title>Em andamento</Title>
          <Droppable droppableId='inProgress'>
            {
              (provided) => (
                <ColumnContent {...provided.droppableProps} ref={provided.innerRef}>
                  {
                    cards
                      ?.filter(c => c?.status === "inProgress")
                      ?.map((c, i) => <Card key={c?.id} card={c} index={i} />)
                    }
                  {provided.placeholder}
                </ColumnContent>
              )
            }
          </Droppable>
        </Column>
        <Column>
          <Title>Concluídos</Title>
          <Droppable droppableId='completed'>
            {
              (provided) => (
                <ColumnContent {...provided.droppableProps} ref={provided.innerRef}>
                  {
                    cards
                      ?.filter(c => c?.status === "completed")
                      ?.map((c, i) => <Card key={c?.id} card={c} index={i} />)
                    }
                  {provided.placeholder}
                </ColumnContent>
              )
            }
          </Droppable>
        </Column>
        </DragDropContext>
        <Add onClick={edit} />
      </Container>
    </>
  );
}

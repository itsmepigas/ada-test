import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Container, Priority, Title, Description } from './styles';

// Hooks
import { useCards } from '../../../../hooks/cards';

export function Card({ card, index }) {
  const { edit } = useCards();

  let color = "green";
  if (card?.priority === "high") color = "red";
  if (card?.priority === "medium") color = "orange";

  return (
    <Draggable draggableId={card?.id} index={index}>
      {
        provided => (
          <Container
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            onClick={() => edit(card)}
            >
              <Priority priority={color} />
              <Title>{card?.title}</Title>
              <Description>{card?.description}</Description>
          </Container>    
        )
      }
    </Draggable>
  );
}

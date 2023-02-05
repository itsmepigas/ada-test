import React, { useState } from 'react';
import { FiX, FiCheck, FiTrash2 } from 'react-icons/fi';

import { Overlay, Box, Title, BtnCancel, Actions, Save, Delete } from './styles';

// Components
import { Input } from './components/Input';
import { Dropdown } from './components/Dropdown';

// Hooks
import { useCards } from '../../../../hooks/cards';

export function View({ card, onClose }) {
  const { create, update, remove, priorities, statuses } = useCards();


  const [title, setTitle] = useState(card?.title || "");
  const [description, setDescription] = useState(card?.description || "");
  const [priority, setPriority] = useState(card?.priority || null);
  const [status, setStatus] = useState(card?.status || "new");

  function handleSave() {
    if (card?.id) {
      update({
        ...card,
        title,
        description,
        status,
        priority
      })
    } else {
      create({
        title,
        description,
        priority
      })
    }


    onClose();
  }

  return (
    <Overlay>
      <Box>
        <Title>{card?.id ? "Editar tarefa" : "Adicionar tarefa"}</Title>
        
        <Input
          placeholder="Nome da tarefa"
          label="Título"
          value={title}
          onChange={e => setTitle(e?.target?.value)}
          />
        <Input
          placeholder="Descrição da tarefa"
          label="Descrição"
          value={description}
          onChange={e => setDescription(e?.target?.value)}
          />
        <Dropdown
          data={priorities}
          label="Prioridade"
          value={priority}
          onSelect={(e) => setPriority(e)}
          />
        {
          card?.id && (
            <Dropdown
              data={statuses}
              label="Status"
              value={status}
              onSelect={(e) => setStatus(e)}
            />  
          )
        }
        <BtnCancel onClick={onClose}>
          <FiX color="white" />
        </BtnCancel>
        <Actions>
          <Save onClick={handleSave}>
            <FiCheck color="#00a000" />
          </Save>
          {
            card?.id && (
              <Delete onClick={() => {
                  remove(card?.id)
                  onClose()
                }}>
                <FiTrash2 color="#da1e1e" />
              </Delete>  
            )
          }
        </Actions>
      </Box>
    </Overlay>
  );
}

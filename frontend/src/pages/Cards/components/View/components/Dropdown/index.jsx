import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Container, Label, List, Item, Value, Placeholder, Icon } from './styles';

export function Dropdown({ data, label, value, onSelect }) {

  const [opened, setOpened] = useState(false);

  return (
    <Container onClick={() => setOpened(!opened)}>
      <Label>{label}</Label>
      <Icon>
        {opened ? <FiChevronUp color="#8a2be2"/> : <FiChevronDown color="#8a2be2"/>}
      </Icon>

      {
        value ? <Value>{data?.find(d => d?.type === value)?.name}</Value> : <Placeholder>Clique para selecionar</Placeholder>
      }
      
      {
        opened && (
          <List>
            {data?.map(d => <Item key={d?.type} onClick={() => onSelect(d?.type)}>{d?.name}</Item>)}
          </List>
        )
      }
    </Container>
  );
}

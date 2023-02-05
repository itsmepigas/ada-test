import React from 'react';

import { PrimaryBtn } from '../Btns';

import { Overlay, Box, Title, Content } from './styles';

export function Alert({ title, content, onClose }) {
  return (
    <Overlay>
      <Box>
        {title && <Title>{title}</Title>}
        {content && <Content>{content}</Content>}
        <PrimaryBtn style={{ width: 60 }} text="Ok" onClick={onClose}/>
      </Box>
    </Overlay>
  );
}

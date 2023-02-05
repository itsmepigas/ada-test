import React from 'react';

import { Container, Label, InputText } from './styles';

export function Input({label, ...props}) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText {...props}/>
    </Container>
  );
}

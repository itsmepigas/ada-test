import React from 'react';

import { Container, Label, InputText } from './styles';

export function Input({
  border,
  borderColor,
  label,
  ...props
}) {
  return (
    <Container
      border={border}
      borderColor={borderColor}
      >
        {
          label && <Label>{label}</Label>
        }
        <InputText {...props} />
    </Container>
  );
}

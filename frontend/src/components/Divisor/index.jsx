import React from 'react';

import { Container, Line, Label } from './styles';

export function Divisor({ label }) {
  return (
  <Container>
    <Line />
    {label && <Label>{label}</Label>}
    <Line />
  </Container>
);
}

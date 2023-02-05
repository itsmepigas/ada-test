import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: #8a2be28d;
  height: 40px;
  margin-bottom: 20px;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: -7px;
  color: #8a2be2;
  font-size: 11px;
`;

export const InputText = styled.input`
  border: none;
  background: transparent;
  color: #333;
  padding: 9px 10px 7px;
  width: 100%;
  height: 40px;
  font-size: 13px;
`;
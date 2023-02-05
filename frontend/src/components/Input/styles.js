import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40px;
  margin: 15px;
  border-radius: 7px;
  border: ${e => e?.border ? `1px solid ${e.borderColor || "#8a2be2"}` : 'none'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  color: ${e => e.color || "#8a2be2"};
  position: absolute;
  top: -7px;
  left: 7px;
  background: white;
  font-size: 13px;
  line-height: 13px;
  padding: 0px 5px;
`;

export const InputText = styled.input`
  width: 100%;
  height: 38px;
  border: none;
  border-radius: 7px;
  padding: 7px 15px;
`;

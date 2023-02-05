import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: auto;
  height: 50px;
  background: #8a2be2;
  box-shadow: 0px 2px 2px #33334d;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 40px;
`;

export const User = styled.p`
  color: white;
`;

export const Logout = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-left: 15px;
  cursor: pointer;

  :hover {
    opacity .7;
  }
`;
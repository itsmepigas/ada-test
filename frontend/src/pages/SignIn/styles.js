import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #8a2be2;
  padding: 0px 200px;
  align-items: center;
  justify-content: flex-end;
`;

export const AuthBox = styled.div`
  width: 400px;
  padding: 60px 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px 4px #3333334d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.h2`
  color: #8a2be2;
  font-size: 32px;
  margin-bottom: 15px;
`;

export const Info = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;
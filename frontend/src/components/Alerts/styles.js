import styled, { keyframes } from 'styled-components';


const opening = keyframes`
  0% { transform: scale(0) }
  80% { transform: scale(1.2) }
  90% { transform: scale(0.9) }
  100% { transform: scale(1) }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: #3333334d;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  min-width: 360px;
  background: white;
  padding: 30px 20px 20px;
  position: relative;
  border-radius: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: ${opening} 0.4s linear
`;

export const Title = styled.h5`
  font-size: 16px;
  margin-bottom: 10px;
  
`;

export const Content = styled.p`
  font-size: 13px;
  margin-bottom: 30px;
`;
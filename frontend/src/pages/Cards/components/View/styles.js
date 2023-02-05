import styled from 'styled-components';

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
  padding: 40px;
  position: relative;
  border-radius: 7px;
`;

export const BtnCancel = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #666;
  cursor: pointer;
  position: absolute;
  top: -12px;
  right: -12px;


  :hover {
    opacity: .7;
  }
`;

export const Title = styled.h4`
  margin-bottom: 30px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  width: 100%;
`;


export const Save = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00a0002d;
  cursor: pointer;

  :hover {
    opacity: .7;
  }
`;

export const Delete = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #da1e1e2d;
  cursor: pointer;

  :hover {
    opacity: .7;
  }
`;

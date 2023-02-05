import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const PrimaryBtnContainer = styled.div`
  min-width: 120px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #8a2be2;
  cursor: pointer;


  :hover {
    opacity: .7;
  }
`;


export const PrimaryBtnText = styled.span`
  font-weight: bold;
  color: white;
  font-size: 13px;
`;


export const SecondaryBtnContainer = styled.div`
  min-width: 150px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: ${e => e?.noBorder ? "none" : "1px solid #8a2be2"};
  cursor: pointer;

  :hover {
    opacity: .7;
  }
`;


export const SecondaryBtnText = styled.span`
  color: #8a2be2;
  font-size: 13px;
`;

export const BtnCircleContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #8a2be2;
  cursor: pointer;
  position: fixed;
  bottom: 60px;
  right: 60px;

  :hover {
    opacity: .7;
  }
`;

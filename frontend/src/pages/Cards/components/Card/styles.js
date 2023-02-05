import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 60px;
  background: white;
  border-radius: 3px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 2px #3333332a;
  position: relative;
  overflow: hidder;
  padding: 15px;

  :hover {
    opacity: .7;

  }
`;

export const Priority = styled.div`
  border: 10px solid transparent;
  border-bottom-color: ${e => e?.priority};
  height: 10px;
  width: 10px;
  transform: rotate(45deg);
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const Title = styled.h4`
  margin-bottom: 5px;
`


export const Description = styled.span`
  font-size: 13px;
`;


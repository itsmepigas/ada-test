import styled from 'styled-components';

export const Container = styled.div`
  position: fixed:
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 70px 40px 20px;
`;

export const Column = styled.div`
  width: 24%;
  padding: 5px 0px 10px;
  background: #f8f8f8;
  height: calc(100vh - 90px);
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  padding: 5px;
  text-align: center;
`;

export const ColumnContent = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

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

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  width: 32px;
  height: 40px;
  z-index: 50
`;

export const List = styled.ul`
  width: 100%;
  min-height: 40px;
  border: 0.5px solid #8a2be21a;
  border-bottom-style: solid;
  border-bottom-color: #8a2be2;
  border-bottom-width: 4px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  position: absolute;
  top: 38.5px;
  z-index: 100;
  background: white;
  font-size: 13px;
`;

export const Item = styled.li`
  border-bottom-style: solid;
  border-bottom-color: #8a2be22a;
  border-bottom-width: 0.5px;
  height: 40px;
  width: 100%;
  color: #333;
  list-style: none;
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  align-items: center;

  :hover {
    background: #8a2be2;
    color: white;
  }
`;

export const Value = styled.span`
  color: #333;
  width: 100%;
  height: 40px;
  padding: 9px 10px 7px;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const Placeholder = styled.span`
  color: #3333337d;
  width: 100%;
  height: 40px;
  padding: 9px 10px 7px;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
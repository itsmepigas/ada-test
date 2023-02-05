import React from 'react';
import { FiPlus } from "react-icons/fi";

import {
  PrimaryBtnContainer,
  PrimaryBtnText,
  SecondaryBtnContainer,
  SecondaryBtnText,
  BtnCircleContainer
} from './styles';

export function PrimaryBtn({ text, onClick, ...props }) {
  return (
    <PrimaryBtnContainer onClick={onClick} {...props}>
      <PrimaryBtnText>{text}</PrimaryBtnText>
    </PrimaryBtnContainer>
  );
}

export function SecondaryBtn({ noBorder, text, onClick }) {
  return (
    <SecondaryBtnContainer noBorder={noBorder} onClick={onClick}>
      <SecondaryBtnText>{text}</SecondaryBtnText>
    </SecondaryBtnContainer>
  );
}

export function Add({ onClick }) {
  return (
    <BtnCircleContainer onClick={onClick}>
      <FiPlus color="white" />
    </BtnCircleContainer>
  )
}
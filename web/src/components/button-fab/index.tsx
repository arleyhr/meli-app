import React from 'react';
import { ButtonContainer } from './style';

type ButtonFabProps = {
  toggleTheme: () => void;
};

export default function ButtonFab(props: ButtonFabProps) {
  return (
    <ButtonContainer onClick={() => props.toggleTheme()}>
      <span aria-label="toggle theme" />
    </ButtonContainer>
  );
}

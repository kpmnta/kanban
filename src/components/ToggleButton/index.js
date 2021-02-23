import React from 'react'
import styled from "styled-components"
import {lightTheme, darkTheme, theme} from "../../theme.js";

const ToggleButton = styled.button`
  /* background: ${({ theme }) => theme.bgColor}; */
  background: ${(props) => props.theme.bgColor};
  border: none; 
  color: ${(props) => props.theme.text};
  /* color: ${({ theme }) => theme.text}; */
  border-radius: 8px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;

  &:hover {
    background: ${({ theme }) => theme.bgColor};
  }
`;


const Toggle = ({theme,  toggleTheme }) => {
  return (
    <ToggleButton theme={theme} onClick={toggleTheme} >
      Mudar Tema
    </ToggleButton>
    );
};

export default Toggle;
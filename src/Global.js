import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: normal;
  list-style: none;  
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

html, 
body {
  height: 100%;
  min-height: 100vh;
}

body {
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.text};
  margin: 0;    
  padding: 0;    
  font-family: sans-serif;    
  transition: all 0.25s linear;
}

.App {
  font-family: sans-serif;
  background: ${({ theme }) => theme.bgColor};
  height: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.container};
  padding: 8px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
}

h1 {
  font-size: 16px;
  padding: 4px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.bgColor};
  text-align: center;
  color: ${({ theme }) => theme.text};
}
`;

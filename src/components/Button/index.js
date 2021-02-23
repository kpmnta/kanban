import styled from 'styled-components';

const Button = styled.button`
  margin-top: 8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s; 
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`; 

export default Button;
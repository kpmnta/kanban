import react from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    color: #FFF;
    font-weight: bold;
`;

export default function Navbar() {
    return(
        <Nav>
            <span>Lista de Tarefas</span>
        </Nav>
    );
}
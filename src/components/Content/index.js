import styled from 'styled-components';

const Content = styled.div`
	padding: 16px 4px;
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
`; 

export default Content;
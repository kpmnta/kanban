import styled from 'styled-components';

const EmptyList = styled.div`
	text-align: center;
	border: 1px dashed ${({ theme }) => theme.border};
	border-radius: 5px;
	padding: 4px;
`; 

export default EmptyList;
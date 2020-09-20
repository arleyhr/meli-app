import styled from 'styled-components';

export const ResultsContent = styled.section`
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? theme.colors.main : 'white'};
  border-radius: 4px;
  padding: ${(props) => props.theme.space.$1};
`;

export const Bread = styled.div`
  margin: ${(props) => props.theme.space.$1} 0;
`;

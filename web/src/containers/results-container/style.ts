import styled from 'styled-components';

export const ResultsContent = styled.section`
  background-color: white;
  border-radius: 4px;
  padding: ${(props) => props.theme.space.$1};
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

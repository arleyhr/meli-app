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

export const NotFound = styled.div`
  background-color: white;
  margin-top: ${(props) => props.theme.space.$2};
  padding: ${(props) => props.theme.space.$1} 100px
    ${(props) => props.theme.space.$2} 100px;
  box-sizing: border-box;

  h3 {
    font-size: ${(props) => props.theme.fontSize.$4};
  }
`;

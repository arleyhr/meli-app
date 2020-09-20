import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BreadLink = styled(Link)`
  color: ${(props) => props.theme.colors.gray200};
  font-size: ${(props) => props.theme.fontSize.$2};
  text-decoration: none;
  padding-right: 5px;

  &::after {
    padding-left: 5px;
    content: '>';
    width: 10px;
  }
`;

export const BreadcrumbsContainer = styled.div`
  box-sizing: border-box;
  margin: ${(props) => props.theme.space.$1} 0;
  padding: 0 ${(props) => props.theme.space.$2};
  width: 100%;

  ${BreadLink}:last-child::after {
    display: none;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

import styled from 'styled-components';

export const MeliButton = styled.button`
  background-color: ${(props) => props.theme.colors.blue};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  height: 46px;
  text-align: center;
  width: 100%;
  &:hover {
    opacity: 0.9;
  }
`;

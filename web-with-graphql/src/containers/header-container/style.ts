import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.main};
  height: 56px;
  padding: 5px;
  max-width: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  max-width: 1200px;
`;

export const LogoContainer = styled(Link)`
  flex: 1;
  height: 40px;
  margin-right: ${(props) => props.theme.space.$1};
  width: 80px;
  img {
    max-height: 100%;
  }
`;

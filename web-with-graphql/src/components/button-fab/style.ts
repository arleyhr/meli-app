import styled from 'styled-components';
import lightImage from '../../assets/light.png';
import darkImage from '../../assets/dark.png';

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? theme.colors.blue : theme.colors.main};
  border: none;
  border-radius: 50%;
  bottom: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  height: 48px;
  outline: none;
  position: fixed;
  right: 40px;
  width: 48px;
  padding: 0;
  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    opacity: 0.9;
  }

  span {
    background-image: url(${(props) =>
      props.theme.name === 'dark' ? lightImage : darkImage});
    background-repeat: no-repeat;
    background-size: 36px;
    background-position: center;
    display: block;
    margin: 0 auto;
    height: 48px;
    width: 48px;
  }
`;

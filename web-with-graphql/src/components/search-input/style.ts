import styled from 'styled-components';

export const InputContainer = styled.form`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  width: 100%;
`;

export const SelectSites = styled.select`
  background-color: white;
  border: none;
  border-right: thin solid ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.gray200};
  height: 40px;
  outline: none;
  padding-left: 5px;
  padding-right: 10px;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const Input = styled.input`
  background-color: white;
  border: none;
  box-sizing: border-box;
  height: 40px;
  flex: 1;
  padding-left: 10px;
  padding-right: 5px;
  outline-color: ${(props) => props.theme.colors.blue};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray300};
    font-size: ${(props) => props.theme.fontSize.$3};
  }
`;

export const IconButton = styled.button`
  background-color: white;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  height: 40px;
  outline-color: ${(props) => props.theme.colors.blue};
  width: 46px;

  img {
    max-width: 90%;
  }
`;

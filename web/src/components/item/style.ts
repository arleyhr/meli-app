import styled from 'styled-components';

export const ItemContainer = styled.li`
  border-bottom: thin solid
    ${({ theme }) =>
      theme.name === 'dark' ? theme.colors.gray300 : theme.colors.gray};
  display: flex;
  align-items: flex-start;
  margin: ${(props) => props.theme.space.$1} 0;
  width: 100%;

  &:last-child {
    border: none;
  }

  @media screen and (max-width: 550px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const PhotoContainer = styled.figure`
  height: 180px;
  width: 180px;
  img {
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }
`;

export const RightSideContent = styled.div`
  flex: 1;
  margin-top: ${(props) => props.theme.space.$1};
  margin-right: ${(props) => props.theme.space.$1};
  .info {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${(props) => props.theme.space.$2};

    .info-price {
      span {
        font-size: ${(props) => props.theme.fontSize.$4};
      }
    }

    .info-condition {
      font-size: ${(props) => props.theme.fontSize.$1};
    }
  }

  a {
    text-decoration: none;
    h2 {
      color: ${(props) => props.theme.colors.gray200};
      font-size: ${(props) => props.theme.fontSize.$3};
      font-weight: 400;
      max-width: 450px;
    }
  }
`;

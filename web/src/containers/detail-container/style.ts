import styled from 'styled-components';

export const DetailContent = styled.section`
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? theme.colors.main : 'white'};
  border-radius: 4px;
  padding: 0 ${(props) => props.theme.space.$2};
  padding-top: ${(props) => props.theme.space.$1};
`;
export const InfoContent = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const ItemImageContainer = styled.figure`
  margin-left: 0;
  margin-top: ${(props) => props.theme.space.$1};
  width: 100%;

  img {
    border-radius: 4px;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    max-width: 680px;
  }
`;

export const ItemData = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: ${(props) => props.theme.space.$2};
    margin-top: ${(props) => props.theme.space.$2};
  }

  .info {
    font-size: ${(props) => props.theme.fontSize.$2};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.$4};

    @media screen and (min-width: 768px) {
      padding-right: 40px;
    }
  }

  .price {
    display: block;
    font-size: ${(props) => props.theme.fontSize.$6};
    margin: ${(props) => props.theme.space.$2} 0;
  }

  button {
    margin-top: ${(props) => props.theme.space.$1};
    margin-bottom: ${(props) => props.theme.space.$1};
    width: 100%;

    @media screen and (min-width: 768px) {
      width: 300px;
    }
  }
`;

export const DescriptionContent = styled.div`
  padding-bottom: ${(props) => props.theme.space.$2};

  h2,
  p {
    margin-bottom: ${(props) => props.theme.space.$2};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.$5};
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media screen and (min-width: 768px) {
    margin: ${(props) => props.theme.space.$1};
    max-width: 720px;
    h2,
    p {
      margin-left: ${(props) => props.theme.space.$2};
    }
  }
`;

export const NotFound = styled.div`
  color: ${(props) => props.theme.colors.gray200};
  margin: ${(props) => props.theme.space.$2};
  text-align: center;
`;

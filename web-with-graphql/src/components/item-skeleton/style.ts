import styled from 'styled-components';

export const ItemContainer = styled.li`
  border-bottom: thin solid ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: flex-start;
  margin: ${(props) => props.theme.space.$1} 0;
  width: 100%;

  &:last-child {
    border: none;
  }
`;

export const PhotoContainer = styled.figure`
  height: 180px;
  width: 180px;

  @media screen and (min-width: 768px) {
    max-width: 180px;
    .react-loading-skeleton {
      height: 180px;
    }
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
  }
`;

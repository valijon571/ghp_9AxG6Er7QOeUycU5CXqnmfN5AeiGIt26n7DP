import styled from "styled-components";

export const FilterStyle = styled.div`
  & body {
    background: green;
  }
  & div {
    margin: 10px;

    & .pagination {
      display: flex;
      justify-content: center;
      & ul {
        display: flex;
        flex-wrap: wrap;
        margin: -10px;
        padding: 0;
        list-style: none;
        margin: 10px;
        & li {
          margin: 10px;
        }
      }
    }
  }
`;

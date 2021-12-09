import styled from "styled-components";

export const TableContainer = styled.table`
  border-collapse: collapse;
  height: 1px;
  margin: auto;
  table-layout: fixed;

  th {
    font-weight: bold;
  }

  tr {
    height: 100%;
  }

  td: {
    height: 100%;
  }

  tr:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

export const StyledHeader = styled.th`
  color: #808080;
  font-family: Roboto;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  padding: 5px;
`;

export const StyledContent = styled.td`
  padding: 5px;
`;

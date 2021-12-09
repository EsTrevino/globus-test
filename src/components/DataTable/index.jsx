import React from "react";

import { TableContainer, StyledHeader, StyledContent } from "./styled";

const DataTable = ({ columns, data }) => {
  return (
    <TableContainer>
      <thead>
        {columns.map(({ name, label }, index) => (
          <StyledHeader key={`${name}-${index}`}>{label}</StyledHeader>
        ))}
      </thead>

      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(({ name, render }, index) => {
              const value = item[name];
              return (
                <StyledContent key={`${name}-${index}`}>
                  {render ? render(item) : value}
                </StyledContent>
              );
            })}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default DataTable;

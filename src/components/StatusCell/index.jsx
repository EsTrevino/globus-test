import React from "react";
import SanitizeHtmlComponent from "./SanitizeHtmlComponent";
import { StyledCellContainer } from "./styled";
import { getStatusCellView } from "./utils";

const StatusCell = ({ status }) => {
  return (
    <StyledCellContainer>
      {getStatusCellView(status)}
      <SanitizeHtmlComponent status={status.niceStatus} />
    </StyledCellContainer>
  );
};

export default StatusCell;

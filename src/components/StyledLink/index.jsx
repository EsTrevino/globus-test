import React from "react";

//todo fix name display
const StyledLink = ({ email, fullName }) => {
  return <a href={`mailto:${email}`}>{fullName}</a>;
};

export default StyledLink;

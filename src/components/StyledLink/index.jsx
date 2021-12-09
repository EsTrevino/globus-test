import React from "react";

const StyledLink = ({ email, fullName }) => {
  return <a href={`mailto:${email}`}>{fullName}</a>;
};

export default StyledLink;

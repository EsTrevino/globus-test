import React from "react";
import { sanitizeHtml, boldString, wordsOfInterest } from "./utils";

const SanitizeHtmlComponent = ({ status }) => {
  const htmlString = boldString(status, wordsOfInterest);
  return <div dangerouslySetInnerHTML={sanitizeHtml(htmlString)} />;
};

export default SanitizeHtmlComponent;

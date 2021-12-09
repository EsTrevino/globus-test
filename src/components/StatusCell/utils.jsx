import React from "react";
import DOMPurify from "dompurify";
import { convertDate, getRemainingTimeDuration } from "../../utils";

export const sanitizeHtml = htmlTextString => {
  return { __html: DOMPurify.sanitize(htmlTextString) };
};

export const boldString = (str, subStrArr) => {
  subStrArr.forEach(subStr => {
    const strRegExp = new RegExp(subStr, "g");
    str = str.replace(strRegExp, "<b>" + subStr + "</b>");
  });
  return str;
};

export const wordsOfInterest = [
  "success",
  "Success",
  "SUCCESS",
  "fail",
  "Fail",
  "FAIL",
  "error",
  "Error"
];

export const getStatusCellView = ({ calculatedStatus, endDate, remaining }) => {
  switch (calculatedStatus) {
    case "INACTIVE":
      return <div>not started</div>;
    case "SUCCESS":
      return <div>Completed: {convertDate(endDate)}</div>;
    case "ERROR":
      return <div>Halted: {convertDate(endDate)}</div>;
    case "INPROGRESS":
      return <div>Time Remaining: {getRemainingTimeDuration(remaining)}</div>;
  }
};

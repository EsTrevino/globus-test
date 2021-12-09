import React from "react";
import { compareDesc } from "date-fns";
import StatusCell from "../../components/StatusCell";
import TextCell from "../../components/TextCell";
import StyledLink from "../../components/StyledLink";
import { convertRawBytes, convertDate } from "../../utils";

export const columns = [
  {
    name: "status",
    label: "status",
    render: ({ status }) => <StatusCell status={status} />
  },
  {
    name: "progress",
    label: "progress",
    render: ({ progress }) => (
      <TextCell>{getProgressCellView(progress)}</TextCell>
    )
  },
  {
    name: "user",
    label: "user",
    render: ({ user }) => (
      <TextCell>
        <StyledLink {...user} />
      </TextCell>
    )
  },
  {
    name: "requestDate",
    label: "request date",
    render: ({ requestDate }) => <TextCell>{convertDate(requestDate)}</TextCell>
  }
];

export const mapDataForTable = data =>
  data.map(item => {
    return {
      id: item.id,
      status: {
        startDate: item.start_date,
        endDate: item.end_date,
        niceStatus: item.status,
        calculatedStatus: item.calculatedStatus,
        remaining: item.remaining
      },
      progress: {
        total: item.total,
        processed: item.processed
      },
      user: {
        username: item.username,
        fullName: item.fullname,
        email: item.email
      },
      requestDate: item.request_date
    };
  });

export const getCalculatedStatus = ({
  start_date,
  end_date,
  total,
  processed
}) => {
  if (!start_date) return "INACTIVE";
  if (start_date && !end_date && total !== processed) return "INPROGRESS";
  if (start_date && end_date && total !== processed) return "ERROR";
  if (start_date && end_date && total === processed) return "SUCCESS";
};

export const getProgressCellView = ({ total, processed }) => {
  if (!processed) return `0b/${convertRawBytes(total)}`;
  return `${convertRawBytes(processed)}/${convertRawBytes(total)}`;
};

export const initialSort = data => {
  const dataWithCalculatedStatus = data.map(item => {
    return { ...item, calculatedStatus: getCalculatedStatus(item) };
  });

  const inActiveInProgressItems = dataWithCalculatedStatus
    .filter(
      item =>
        item.calculatedStatus === "INACTIVE" ||
        item.calculatedStatus === "INPROGRESS"
    )
    .sort((a, b) => {
      return a.calculatedStatus.localeCompare(b.calculatedStatus);
    });

  const otherItems = dataWithCalculatedStatus
    .filter(
      item =>
        item.calculatedStatus === "SUCCESS" || item.calculatedStatus === "ERROR"
    )
    .sort((a, b) => {
      return compareDesc(new Date(a.end_date), new Date(b.end_date));
    });

  return [...inActiveInProgressItems, ...otherItems];
};

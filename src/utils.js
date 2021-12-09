import fileSize from "filesize";
import { format, intervalToDuration, isValid } from "date-fns";

export const convertDate = dateString => {
  const date = new Date(dateString);
  return isValid(date) && format(date, "MM/dd/yyyy hh:mm aa");
};

export const getRemainingTimeDuration = remainingTimeInMilliseconds => {
  const duration = intervalToDuration({
    start: 0,
    end: remainingTimeInMilliseconds
  });

  if (duration.days < 2) {
    return `${duration.hours}:${duration.minutes}:${duration.seconds}`;
  }

  return `${duration.days} days`;
};

export const convertRawBytes = rawBytes => {
  return rawBytes && fileSize(rawBytes);
};

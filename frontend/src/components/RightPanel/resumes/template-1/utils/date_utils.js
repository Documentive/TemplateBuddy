import * as objectUtils from "./object_utils";

const convertMonthToName = (month) => {
  const monthToName = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  return monthToName[month];
};

export const getStartEndDateString = (obj) => {
  let dateString = "";

  if ("startDate" in obj) {
    dateString +=
      convertMonthToName(
        objectUtils.getKeyOrEmptyString(obj, ["startDate", "month"])
      ) +
      " " +
      objectUtils.getKeyOrEmptyString(obj, ["startDate", "year"]);
  }

  dateString += " - ";

  if ("endDate" in obj) {
    dateString +=
      convertMonthToName(
        objectUtils.getKeyOrEmptyString(obj, ["endDate", "month"])
      ) +
      " " +
      objectUtils.getKeyOrEmptyString(obj, ["endDate", "year"]);
  } else {
    dateString += "Present";
  }

  return dateString;
};

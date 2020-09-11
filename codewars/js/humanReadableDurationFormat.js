// level: 4kyu
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const timesFormat = {
    year: 60 * 60 * 24 * 365,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  let secondsTotal = seconds;
  const unitsTimeObject = {};

  Object.values(timesFormat).forEach((duration, i) => {
    const unitTimeValue = Math.trunc(secondsTotal / duration);

    if (unitTimeValue !== 0)
      unitsTimeObject[Object.keys(timesFormat)[i]] = unitTimeValue;
    secondsTotal -= duration * unitTimeValue;
  });

  const unitsTimeKeys = Object.keys(unitsTimeObject);

  return unitsTimeKeys.reduce((utT, ut, index) => {
    let separator = "";
    if (index === unitsTimeKeys.length - 2) separator = " and ";
    if (index < unitsTimeKeys.length - 2) separator = ", ";

    return `${utT}${unitsTimeObject[unitsTimeKeys[index]]} ${ut}${
      unitsTimeObject[ut] > 1 ? "s" : ""
    }${separator}`;
  }, "");
}

console.log(formatDuration(3662));

/*
 * Option with .map and extra function to determine the delimiter
 */

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const timesFormat = {
    year: 60 * 60 * 24 * 365,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  let secondsTotal = seconds;
  const unitsTimeObject = {};

  Object.values(timesFormat).forEach((timeFormat, i) => {
    const unitTimeValue = Math.trunc(secondsTotal / timeFormat);
    if (unitTimeValue !== 0)
      unitsTimeObject[Object.keys(timesFormat)[i]] = unitTimeValue;
    secondsTotal -= unitTimeValue * timeFormat;
  });

  const unitsTimeKeys = Object.keys(unitsTimeObject);
  let response = "";

  response += unitsTimeKeys
    .map((unitTime, index) => {
      let time = unitsTimeObject[unitsTimeKeys[index]];
      return getValueAndDelimiter(unitsTimeKeys.length, index, time, unitTime);
    })
    .join("");

  return response;
}

function getValueAndDelimiter(arrayLength, index, time, unitTime) {
  let value = `${time} ${unitTime}${time > 1 ? "s" : ""}`;
  if (index === 0) return value;
  if (arrayLength > 1 && arrayLength - 1 == index) return ` and ${value}`;

  return `, ${value}`;
}

console.log(formatDuration(3662));

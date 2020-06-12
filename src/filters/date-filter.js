const appendSuffix = (n) => {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

const addZero = (number) => {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
};

module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWithSuffix = appendSuffix(dateObject.getDate());

  return `${dayWithSuffix} ${
    months[dateObject.getMonth()]
  } ${dateObject.getFullYear()} at ${addZero(dateObject.getHours())}:${addZero(
    dateObject.getMinutes()
  )}`;
};

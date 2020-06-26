const { DateTime } = require("luxon");
const siteSettings = require("../_data/site.js");
const locale = siteSettings.locale.locale;
// const locale = "UTC";
const timeZone = siteSettings.locale.timeZone;

const appendDateSuffix = (n) => {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

// module.exports = (value) => {
//   const dateObject = DateTime.fromISO(value);

//   const formattedDate = appendDateSuffix(dateObject.toFormat("d"));
//   const formattedMonthYear = dateObject.toFormat("MMMM yyyy");
//   const formattedTime = dateObject.toFormat("T");
//   return `${formattedDate} ${formattedMonthYear} at ${formattedTime}`;
// };
module.exports = (value) => {
  const dateObject = DateTime.fromISO(value, {
    locale: locale,
    zone: timeZone,
  });

  const formattedDate = appendDateSuffix(dateObject.toFormat("d"));
  const formattedMonthYear = dateObject.toFormat("MMMM yyyy");
  const formattedTime = dateObject.toFormat("T");
  return `${formattedDate} ${formattedMonthYear} at ${formattedTime}`;
};

const { DateTime } = require("luxon");
const siteSettings = require("../_data/siteSettings.js");
const timeZone = siteSettings.timeZone || "Europe/London";

module.exports = (value) => {
  const dateObject = DateTime.fromISO(value, {
    zone: timeZone,
  });

  const formattedDate = dateObject.toFormat("MMMM d, yyyy");
  return `${formattedDate}`;
};

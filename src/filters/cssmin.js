const CleanCSS = require("clean-css");

module.exports = function cssmin(styles) {
  return new CleanCSS({}).minify(styles).styles;
};

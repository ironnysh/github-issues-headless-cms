const env = process.env.ELEVENTY_ENV;
const dateFilter = require("./src/filters/date-filter.js");
const markdownify = require("./src/filters/markdownify.js");
const cssmin = require("./src/filters/cssmin.js");
const htmlMin = require("./src/transforms/html-min.js");

module.exports = function (eleventyConfig) {
  // Filters
  eleventyConfig.addFilter("dateFilter", dateFilter);
  eleventyConfig.addFilter("markdownify", markdownify);
  eleventyConfig.addFilter("cssmin", cssmin);

  // Transforms
  if (env === "production") {
    eleventyConfig.addTransform("htmlmin", htmlMin);
  }

  eleventyConfig.addWatchTarget("./src/assets/css");

  return {
    dir: {
      input: "src",
    },
    // markdownTemplateEngine: "njk",
  };
};

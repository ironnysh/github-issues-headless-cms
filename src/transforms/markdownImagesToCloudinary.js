const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Cloudinary_Cloud_Name = require("../_data/site.js")
  .Cloudinary_Cloud_Name;

module.exports = function (value, outputPath) {
  if (outputPath.endsWith(".html")) {
    const DOM = new JSDOM(value, {
      resources: "usable",
    });

    const document = DOM.window.document;
    const articleImages = [...document.querySelectorAll("article.post img")];

    if (articleImages.length) {
      articleImages.forEach((image) => {
        image.setAttribute("loading", "lazy");

        const originalSource = image.getAttribute("src");

        const newSource = `https://res.cloudinary.com/${Cloudinary_Cloud_Name}/image/fetch/f_auto/${originalSource}`;

        image.setAttribute("src", newSource);
      });
    }
    return "<!DOCTYPE html>\r\n" + document.documentElement.outerHTML;
  }
  return value;
};

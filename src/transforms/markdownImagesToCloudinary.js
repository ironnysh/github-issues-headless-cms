const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const probeImage = require("probe-image-size");
const Cloudinary_Cloud_Name = require("../_data/siteSettings.js").Cloudinary_Cloud_Name;

module.exports = async function (value, outputPath) {
  // async function getImageDimensions(imageURL) {
  //   const response = probeImage(imageURL).then(function (response) {
  //     return response;
  //   });
  //   return response;
  // }

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

        // const imageDimensions = (async () => {
        //   const { width, height } = await getImageDimensions(originalSource);

        //   return [width, height];
        // })();

        // const data = async (originalSource) => {
        //   const imageDimensions = await getImageDimensions(originalSource);
        //   return imageDimensions;
        // };
        // console.log(data);

        // image.setAttribute("width", width);
        // image.setAttribute("height", height);

        image.setAttribute("src", newSource);
      });
    }
    return "<!DOCTYPE html>\r\n" + document.documentElement.outerHTML;
  }
  return value;
};

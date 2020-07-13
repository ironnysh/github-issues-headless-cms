module.exports = function strip(htmlString) {
  return htmlString.replace(/(<([^>]+)>)/ig, "");;
};

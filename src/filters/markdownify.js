const md = require("markdown-it")({
  html: false,
  breaks: true,
  linkify: true,
  xhtmlOut: true,
  typographer: true
});
module.exports = function markdownify(markdownString) {
  return md.render(markdownString);
};

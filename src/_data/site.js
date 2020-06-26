// This is a file where you can set your preferences for the site

module.exports = {
  // The title of your website
  title: "Github Issues as a CMS",

  // Your name
  author: "Ed Johnson-Williams",

  // A description of your website
  description:
    "A blog that uses a Github repository's issues as a headless CMS",

  // The URL where your website will be published
  url: "https://github-issues-headless-cms.netlify.app",

  locale: {
    locale: "en-GB",
    timeZone: "Europe/London",
    // timeZone: "America/Los_Angeles",
  },

  // Which Github repository's issues list do you want to use? username/repository-name
  repository: "edjw/github-issues-headless-cms",

  // Uncomment this if your Github repository is private
  // repositoryVisibility: "private",

  // If you want to use Cloudinary for your images, what is your Cloudinary cloud name? (optional)
  Cloudinary_Cloud_Name: "ed-johnson-williams",

  // The URL where a social image for your site is published
  socialImageURL: "",

  // Do you want to use titles on your posts and URLs? If it's a microblog, you probably don't. If it's a normal blog, you probably do. (true or false)
  useTitles: true,

  // Do you want to show comments from the Github Issue as a comment on the website? (true or false)
  showComments: true,

  // Who do you want to allow to post? ["OWNER"] means just you. ["OWNER", "COLLABORATOR"] means you and anyone you've added to the repository. ["OWNER", "COLLABORATOR", "NONE"] means you, anyone you've added to the repository, and all Github users
  allowedPostUserTypes: ["OWNER"],

  // Who do you want to allow to comment?
  allowedCommentUserTypes: ["OWNER", "NONE"],

  // Show Github labels as tags? (true or false)
  showLabels: true,
};

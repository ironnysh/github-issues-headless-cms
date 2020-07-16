// This is a file where you can set your preferences for the site

module.exports = {
  // The title of your website
  title: "Github Issues as a CMS",

  // The subtitle of your website (optional)
  subtitle: "A blog that uses a Github repository's issues as a headless CMS. On this site, it's just the outstanding issues on this project but you could put anything in the issues: blogposts, microblog posts to syndicate to Twitter, images, anything",

  // Your name
  author: "Ronny Shani",

  // A description of your website (This is used for default social media descriptions)
  description:
    "A blog that uses a Github repository's issues as a headless CMS.",

  // The URL where your website will be published
  url: "https://github-issues-headless-cms.netlify.app",

  // Set the timezone you want dates and times to be in. Default is Europe/London.
  // A list is here https://timezonedb.com/time-zones
  // timeZone: "Europe/London",

  // Which Github repository's issues list do you want to use? username/repository-name
  repository: "ironnysh/github-issues-headless-cms",

  // Uncomment this if your Github repository is private
  // repositoryVisibility: "private",

  // If you want to use Cloudinary for your images, what is your Cloudinary cloud name? (optional)
  Cloudinary_Cloud_Name: "",

  // The URL where a social image for your site is published
  socialImageURL: "",

  // Do you want to use titles on your posts and URLs? If it's a microblog, you probably don't. If it's a normal blog, you probably do. (true or false)
  useTitles: true,

  // Do you want to show comments from the Github Issue as a comment on the website? (true or false)
  showComments: true,

  // Who do you want to allow to post? ["OWNER"] means just you. ["OWNER", "COLLABORATOR"] means you and anyone you've added to the repository. ["OWNER", "COLLABORATOR", "NONE"] means you, anyone you've added to the repository, and all Github users
  allowedPostUserTypes: ["OWNER"],

  // Who do you want to allow to comment? ["OWNER", "NONE"] means you and all Github users
  allowedCommentUserTypes: ["OWNER", "NONE"],

  // Show Github labels as tags? (true or false)
  showLabels: true,
};

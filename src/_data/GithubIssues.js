const siteSettings = require("./site.js");
const repositoryVisibility = siteSettings.repositoryVisibility || "public";
if (repositoryVisibility === "private") {
  require("dotenv").config({ path: "src/.env" });
}
const repository = siteSettings.repository;
const showComments = siteSettings.showComments || false;
const showLabels = siteSettings.showLabels || false;
const allowedPostUserTypes = siteSettings.allowedPostUserTypes || ["OWNER"];
const allowedCommentUserTypes = siteSettings.allowedCommentUserTypes || [
  "OWNER",
];

const Cache = require("@11ty/eleventy-cache-assets");

async function getComments(issueNumber) {
  try {
    let json = await Cache(
      `https://api.github.com/repos/${repository}/issues/${issueNumber}/comments`,
      {
        duration: "1d",
        type: "json",
      }
    );

    let commentsToKeep = await Promise.all(
      json
        .filter((comment) =>
          allowedCommentUserTypes.includes(comment.author_association)
        )
        .map(async (comment) => {
          return {
            id: String(comment.id),
            url: comment.html_url,
            user: comment.user.login,
            userAvatar: comment.user.avatar_url,
            content: comment.body,
            date: comment.created_at,
          };
        })
    );
    // console.log(commentsToKeep);
    return commentsToKeep;
  } catch (error) {
    console.log(`${error}`);
    return;
  }
}

async function getIssues(repository) {
  const headers = {};

  if (repositoryVisibility === "private") {
    headers.authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  try {
    let json = await Cache(
      `https://api.github.com/repos/${repository}/issues`,
      {
        duration: "1d",
        type: "json",
        fetchOptions: {
          headers,
        },
      }
    );
    if (json.length > 0) {
      let issues = await Promise.all(
        json
          .filter(
            (issue) =>
              !issue.labels.some((label) => label.name == "no-publish") &&
              allowedPostUserTypes.includes(issue.author_association)
          )
          .map(async (issue) => {
            return {
              id: String(issue.id),
              url: issue.html_url,
              title: issue.title,
              content: issue.body,
              date: issue.created_at,
              tags:
                showLabels == true && issue.labels.length > 0
                  ? issue.labels
                  : false,
              comments:
                showComments == true && issue.comments > 0
                  ? await getComments(String(issue.number))
                  : false,
            };
          })
      );

      // console.log(issues);

      return issues;
    } else {
      console.warn(
        "\n\n***No Github Issues found. You might need to add your Github repository in `_data/site.json` and add at least 1 issue to that repository.***\n\n"
      );
    }
  } catch (error) {
    console.log(`${error}`);
  }
}

module.exports = async function () {
  const issuesData = await getIssues(repository);
  return issuesData;
};

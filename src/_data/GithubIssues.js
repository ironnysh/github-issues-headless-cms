const siteSettings = require("./site.json");
const repository = siteSettings.repository;
const showComments = siteSettings.showComments;
const showLabels = siteSettings.showLabels;

const Cache = require("@11ty/eleventy-cache-assets");

async function getComments(issueNumber) {
  let json = await Cache(
    `https://api.github.com/repos/${repository}/issues/${issueNumber}/comments`,
    {
      duration: "1d",
      type: "json",
    }
  );

  if (json.length) {
    let commentsToKeep = await Promise.all(
      json.map(async (comment) => {
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
  } else
    console.warn(
      "No issues found. You might need to add your Github repository in `_data/site.json` and add at least 1 issue."
    );
}

async function getIssues(repository) {
  let json = await Cache(`https://api.github.com/repos/${repository}/issues`, {
    duration: "1d",
    type: "json",
  });

  let issues = await Promise.all(
    json.map(async (issue) => {
      return {
        id: String(issue.number),
        url: issue.html_url,
        title: issue.title,
        content: issue.body,
        date: issue.created_at,
        tags:
          showLabels == true && issue.labels.length > 0 ? issue.labels : false,
        comments:
          showComments == true && issue.comments > 0
            ? await getComments(String(issue.number))
            : false,
      };
    })
  );

  // console.log(issues);

  return issues;
}

module.exports = async function () {
  const issuesData = await getIssues(repository);
  return issuesData;
};

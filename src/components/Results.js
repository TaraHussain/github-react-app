import React from "react";

const Results = (props) => {
  const { repos } = props;
  console.log("Repos are:", repos.data);

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <li key={item.id}>
          <p id="repoName">{item.name}</p>
          <p className="repoNamePlus"> Fork Counts : {item.forks_count}</p>
          <p className="repoNamePlus">
            Stargazers Counts : {item.stargazers_count}
          </p>
          <p className="repoNamePlus">
            Issue Counts : {item.open_issues_count}
          </p>
        </li>
      ))
    ) : (
      <li>No Repos Found</li>
    );

  return <ul>{listRepos}</ul>;
};

export default Results;

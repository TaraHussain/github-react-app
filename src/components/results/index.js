import React from "react";
import "./results.css";

const Results = (props) => {
  const { repos } = props;
  console.log("Repos are:", repos.data);

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <>
          <div className="row">
            <div className="repoContainer" id="column" key={item.id}>
              <p id="repoName">
                <a href={item.html_url}>{item.name}</a>
              </p>
              <p className="repoNamePlus"> Fork Counts : {item.forks_count}</p>
              <p className="repoNamePlus">
                Stargazers Counts : {item.stargazers_count}
              </p>
              <p className="repoNamePlus">
                Issue Counts : {item.open_issues_count}
              </p>
            </div>

            <div className="repoContainer" id="column" key={item.id}>
              <p id="repoName">
                <a href={item.html_url}>{item.name}</a>
              </p>
              <p className="repoNamePlus"> Fork Counts : {item.forks_count}</p>
              <p className="repoNamePlus">
                Stargazers Counts : {item.stargazers_count}
              </p>
              <p className="repoNamePlus">
                Issue Counts : {item.open_issues_count}
              </p>
            </div>

            <div className="repoContainer" id="column" key={item.id}>
              <p id="repoName">
                <a href={item.html_url}>{item.name}</a>
              </p>
              <p className="repoNamePlus"> Fork Counts : {item.forks_count}</p>
              <p className="repoNamePlus">
                Stargazers Counts : {item.stargazers_count}
              </p>
              <p className="repoNamePlus">
                Issue Counts : {item.open_issues_count}
              </p>
            </div>
          </div>
        </>
      ))
    ) : (
      <div>No Repos Found</div>
    );

  return <div>{listRepos}</div>;
};

export default Results;

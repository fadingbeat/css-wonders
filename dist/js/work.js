import { octokit } from "../../environment.js";

const repo = await octokit.request(
  "GET /users/{username}/repos{?type,sort,direction,per_page,page}",
  {
    username: "fadingbeat",
  }
);

console.log("owner ", repo.data);
const repositories = repo.data;
// get repositories array and take name, description, language and html url values
let reposArr = [];
const getRepos = () => {
  for (let i = 0; i < repositories.length; i++) {
    // create object
    reposArr[i] = {
      name: repositories[i].name,
      description: repositories[i].description,
      language: repositories[i].language,
      html_url: repositories[i].html_url,
    };
  }
};

getRepos();

const reposList = document.querySelector("#gh-repo-list");
reposList.innerHTML = reposArr.map(
  (repo) => `Name: ${repo.name} Description: ${repo.description}`

  // <div>
  //   <div>Name: ${repo.name}</div>
  //   <p>Description: ${repo.description}</p>
  //   <p>Language used: ${repo.language}</p>
  //   <p>Link to repository: ${repo.html_url}</p>
  // </div>
);

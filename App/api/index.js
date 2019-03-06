import Api from "./Api";

const repoUrl = "https://api.github.com/users/supreetsingh247/repos";

class ApiHelper {
  static getRepos() {
    return Api.get(repoUrl).then(res => {
      console.log(res);
      return { repos: getReposFromData(res) };
    });
  }
}

export default ApiHelper;

const getReposFromData = data => {
  return data.map(
    ({ full_name: name, stargazers_count: stars, description, language }) => ({
      name,
      stars,
      description,
      language
    })
  );
};

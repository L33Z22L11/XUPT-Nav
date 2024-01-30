function getLastCommit(ele, repo) {
  console.log(`Getting last commit of ${repo}`);
  fetch(`https://api.github.com/repos/${repo}/commits`)
    .then(response => response.json())
    .then(data => {
      ele.textContent = `上次更新: ${new Date(data[0].commit.committer.date).toLocaleString()}`
    })
    .catch(error => {
      ele.textContent = `更新获取失败: ${error}`
      console.warn(error)
    });
}
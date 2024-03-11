/* 作者：纸鹿/Zhilu (github.com/L33Z22L11)
获取某个 GitHub Repository 的上一次 commit 时间，使用 WTFPL 协议开源。
使用方式参考：
<script src="/path-to-commit.js"
  onload="getLastCommit(document.getElementById('lastCommit'), 'L33Z22L11/XUPT-Nav')"></script>
 */

function getLastCommit(ele, repo) {
  fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`)
    .then(response => response.json())
    .then(data => {
      ele.textContent = `${new Date(data[0].commit.committer.date).toLocaleString()}`
    })
    .catch(error => {
      ele.textContent = `(获取失败)`
      ele.setAttribute('title', error)
      console.warn(error)
    })
}
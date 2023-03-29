let nav = {
  name: "西柚导航",
  description: "",
  list: [],
  ele: document.getElementsByClassName("navlist"),
}

nav.list[0] = [{
  name: "线上课时", icon: "fa-solid fa-chalkboard-user", item: [
    { text: "学习通", link: "http://i.chaoxing.com/" },
    { text: "U校园", link: "https://u.unipus.cn/user/student" },
    { text: "iWrite", link: "http://iwrite.unipus.cn/student" },
    { text: "中国大学MOOC", link: "https://icourse163.org/home.htm" },
  ]
}, {
  name: "西邮生活", icon: "fa-solid fa-school", item: [
    { text: "校园信息门户", desc: "教务 内网 邮箱", link: "http://i.xiyou.edu.cn/" },
    { text: "🔥教务系统", link: "http://www.zfjw.xupt.edu.cn/jwglxt" },
    { text: "内网资源", desc: "WebVPN", link: "http://sec.xupt.edu.cn/" },
    { text: "教育邮箱", link: "http://webmail.xupt.edu.cn/" },
    { text: "青年大学习", desc: "微信“西邮青年”", icon: "fa-brands fa-weixin", js: "dialog.wxQR(this.textContent)" },
    { text: "第二课堂", desc: "微信“西邮青年”", icon: "fa-brands fa-weixin", js: "dialog.wxQR(this.textContent)" },
    { text: "西邮官网", link: "http://xupt.edu.cn/" },
    { text: "常用服务导航", link: "http://xupt.edu.cn/xxfw/cyfw1.htm" },
    { text: "办事大厅", link: "http://one.xupt.edu.cn/EIP" },
    { text: "信息直通车", link: "http://ztc.sec.xupt.edu.cn/" },
  ]
}, {
  name: "考试学习", icon: "fa-solid fa-pen-ruler", item: [
    { text: "西邮试卷", desc: "欢迎commit", icon: "fa-brands fa-github", link: "https://github.com/JiaHuann/XUPT-Exam-Collection" },
    { text: "打字背单词", desc: "Qwerty Learner", link: "https://qwerty.kaiyi.cool/" },
    { text: "洛谷", link: "https://www.luogu.com.cn/" },
    { text: "力扣", link: "https://leetcode.cn/" },
    { text: "学信网", link: "https://www.chsi.com.cn/" },
    { text: "四六级", desc: "考试报名", link: "https://cet-bm.neea.edu.cn/" },
  ]
}, {
  name: "西邮周边", icon: "fa-solid fa-circle-nodes", item: [
    // { text: "校园网", link: "https://github.com/drcoms/drcom-generic/wiki/可用学校列表" },
    { text: "逸夫楼地图", desc: "手机访问才正常", icon: "fa-solid fa-mobile-screen-button", link: "https://8.u.h5mc.com/c/7oor/ygju/index.html" },
    { text: "东区教室导航", desc: "微信“隔壁小O”", icon: "fa-brands fa-weixin", link: "https://mp.weixin.qq.com/s/CZR_d2SmltiZyl-oCz3zhA" },
    { text: "西邮合集", icon: "fa-brands fa-bilibili", desc: "半岛的孤城", link: "https://space.bilibili.com/32187583/channel/collectiondetail?sid=53061" },
  ]
},]

nav.list[1] = [{
  name: "第三方导航", icon: "fa-solid fa-signs-post", item: [
    { text: "半岛导航", desc: "西邮 学习", link: "https://www.bandao.ltd/guidance/" },
    { text: "掘金酱", desc: "开发者", link: "https://e.juejin.cn/" },
    { text: "别摸鱼", desc: "AI 新媒体", link: "https://biemoyu.com/" },
    { text: "下次一定", desc: "影视 工具 装机", link: "https://www.iiice.cn/" },
    { text: "蜗牛导航", desc: "开发 设计", link: "https://s.eallion.com/" },
    { text: "禾坡导航", desc: "运营 美工", link: "http://www.hepou.com/" },
  ]
}, {
  name: "校友推荐", icon: "fa-solid fa-inbox",
  desc: `<a onclick="dialog.msg('联系方式')"><i class="fa-solid fa-pen-to-square"></i> 我要投稿</a>`,
  item: [
    { text: "旅游地图", desc: "云游西安", link: "http://ditu.ps123.net/china/923.html" },
  ]
}, {
  name: "在线工具", icon: "fa-solid fa-toolbox", item: [
    { text: "菜鸟工具", link: "https://c.runoob.com/" },
    { text: "稿定PS", link: "https://ps.gaoding.com/" },
    { text: "帮小忙", link: "https://tool.browser.qq.com/" },
    { text: "MikuTools", link: "http://tools.miku.ac/" },
  ]
}, {
  name: "软件下载", icon: "fa-solid fa-cube", item: [
    { text: "联想应用商店", link: "https://lestore.lenovo.com/" },
    { text: "果核剥壳", link: "https://www.ghxi.com/" },
    { text: "微软商店解析", link: "https://store.rg-adguard.net/" },
    { text: "Digit77", link: "https://www.digit77.com/" },
  ]
}, {
  name: "友链", icon: "fa-solid fa-link",
  desc: `<a onclick="dialog.msg('联系方式')"><i class="fa-solid fa-user-plus"></i> 添加友链</a>`,
  item: [
    { text: "纸鹿小站", link: "https://zhilu.cyou/" },
    { text: "半岛的小屋", link: "https://www.bandao.ltd/" },
    { text: "plus studio", link: "https://studyinglover.com/" },
  ]
},]

nav.list.forEach((list, i) => {
  nav.ele[i].innerHTML = list.map(group => `
    <div class="card">
    <div class="between">
    <h4><i class="${group.icon}"></i> ${group.name}</h4>
    ${group.desc ? `<p class="dim">${group.desc}</p>` : ``}
    </div>
    <div class="list">
    ${group.item.map(item => `
      <a ${item.desc ? `data-sub="${item.desc}"` : ``}
      ${item.js ? `onclick="${item.js}"` : `href="${item.link}"`}
      >${item.icon ? `<i class="${item.icon}"></i>` : ``}${item.text}</a>
      `).join(`\n`)}
    </div>
    </div>`).join(`\n`)
})

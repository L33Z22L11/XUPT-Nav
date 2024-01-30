let nav = {
  name: "西柚导航",
  description: "",
  list: [],
  ele: document.getElementsByClassName("navlist"),
}

nav.list[0] = [{
  name: "线上课时", icon: "fa-solid fa-chalkboard-user", item: [
    { text: "学习通", icon: "iconfont icon-chaoxing", link: "http://i.chaoxing.com/" },
    { text: "U校园", icon: "fa-solid fa-u", link: "https://u.unipus.cn/user/student" },
    { text: "iWrite", icon: "fa-solid fa-pen-nib", link: "http://iwrite.unipus.cn/student" },
    { text: "中国大学MOOC", icon: "fa-solid fa-book-open", link: "https://icourse163.org/home.htm" },
  ]
}, {
  name: "西邮生活", icon: "fa-solid fa-school", item: [
    { text: "教务系统", desc: "校务行小程序查分更快", icon: "fa-regular fa-calendar-days", link: "http://www.zfjw.xupt.edu.cn/jwglxt" },
    { text: "奖学金/退费", desc: "支付宝扫码领取", icon: "fa-solid fa-wallet", js: "dialog.showMsg('西邮财务处')" },
    { text: "我在校园", desc: "网页版登录", icon: "fa-solid fa-location-dot", js: "dialog.showMsg(this.textContent)" },
    { text: "青年大学习", desc: "需要微信扫码", icon: "fa-solid fa-medal", js: "dialog.showMsg(this.textContent)" },
    { text: "第二课堂", desc: "学分申报", icon: "fa-solid fa-book-bookmark", js: "dialog.showMsg(this.textContent)" },
    { text: "个人中心", desc: "校园信息门户", icon: "fa-solid fa-street-view", link: "http://i.xiyou.edu.cn/" },
    { text: "内网资源", desc: "WebVPN", icon: "fa-solid fa-building-lock", link: "http://sec.xupt.edu.cn/" },
    { text: "电子教材", desc: "西邮图书馆", icon: "fa-solid fa-book", link: "https://xyoujc.mh.chaoxing.com/engine2/general-rest/4072742/proxy-more-url?wfwfid=22861" },
    { text: "教育邮箱", desc: "页面右上角能申请", icon: "fa-solid fa-envelope", link: "http://webmail.xupt.edu.cn/" },
    { text: "西邮官网", icon: "fa-solid fa-globe", link: "http://xupt.edu.cn/" },
    { text: "常用服务导航", icon: "fa-solid fa-taxi", link: "http://xupt.edu.cn/xxfw/cyfw1.htm" },
    { text: "办事大厅", icon: "fa-solid fa-building-columns", link: "http://one.xupt.edu.cn/EIP" },
    { text: "信息直通车", icon: "fa-solid fa-train-subway", link: "http://ztc.sec.xupt.edu.cn/" },
    { text: "正版软件", icon: "fa-solid fa-cubes", link: "http://ms.xupt.edu.cn/" },
  ]
}, {
  name: "考试学习", icon: "fa-solid fa-pen-ruler", item: [
    { text: "西邮试卷", desc: "欢迎commit", icon: "fa-brands fa-github", link: "https://github.com/JiaHuann/XUPT-Exam-Collection" },
    { text: "电路仿真", desc: "CircuitJS1", icon: "fa-solid fa-plug", link: "http://www.falstad.com/circuit/circuitjs.html" },
    { text: "船长的网课", desc: "期末保命复习视频", icon: "fa-solid fa-hard-drive", link: "https://pan.sehcz.ltd/%E6%88%91%E7%9A%84%E7%BD%91%E7%9B%98/%E6%9C%9F%E6%9C%AB%E4%BF%9D%E5%91%BD" },
    { text: "安娜的档案", desc: "世界最大互联网图书馆", icon: "fa-solid fa-book-bookmark", link: "https://zh.annas-archive.org/" },
    { text: "zlibrary", desc: "免费电子书下载", icon: "fa-solid fa-book-atlas", link: "https://zh.zlibrary-east.se/" },
    { text: "打字背单词", desc: "Qwerty Learner", icon: "fa-solid fa-keyboard", link: "https://qwerty.kaiyi.cool/" },
    { text: "力扣", icon: "fa-solid fa-code", link: "https://leetcode.cn/" },
    { text: "学信档案", icon: "fa-solid fa-address-card", link: "https://my.chsi.com.cn/archive/index.action" },
    { text: "四六级报名", icon: "fa-solid fa-scroll", link: "https://cet-bm.neea.edu.cn/" },
  ]
}, {
  name: "西邮周边", icon: "fa-solid fa-circle-nodes", item: [
    // { text: "校园网", link: "https://github.com/drcoms/drcom-generic/wiki/可用学校列表" },
    { text: "逸夫楼地图", desc: "手机访问才正常", icon: "fa-solid fa-map-location-dot", js: "dialog.showMsg(this.textContent)" },
    { text: "东区教室导航", desc: "微信“隔壁小O”", icon: "fa-solid fa-route", link: "https://mp.weixin.qq.com/s/CZR_d2SmltiZyl-oCz3zhA" },
    { text: "西邮合集", desc: "半岛的孤城", icon: "fa-brands fa-bilibili", link: "https://space.bilibili.com/32187583/channel/collectiondetail?sid=53061" },
    { text: "邮立方", desc: "校园MC交流", icon: "iconfont icon-minecraft", link: "https://cop.cooo.site" },
    { text: "西柚oi", desc: "校园交流群", icon: "iconfont icon-xiaohongshu", js: "dialog.showMsg(this.textContent)" },
  ]
},]

nav.list[1] = [{
  name: "第三方导航", icon: "fa-solid fa-signs-post", item: [
    { text: "半岛导航", desc: "西邮 学习", link: "https://www.bandao.ltd/guidance/" },
    { text: "掘金酱", desc: "开发者", link: "https://e.juejin.cn/" },
    { text: "别摸鱼", desc: "AI 新媒体", link: "https://biemoyu.com/" },
    { text: "下次一定", desc: "影视 工具 装机", link: "https://www.iiice.cn/" },
    { text: "蜗牛导航", desc: "开发 设计", link: "https://s.eallion.com/" },
  ]
}, {
  name: "AI工具", icon: "fa-solid fa-robot",
  item: [
    { text: "文心一言", link: "https://yiyan.baidu.com/" },
    { text: "通义千问", link: "https://qianwen.aliyun.com/" },
    { text: "讯飞星火", link: "https://xinghuo.xfyun.cn/desk" },
    { text: "智谱清言", link: "https://chatglm.cn/" },
    { text: "昆仑天工", link: "https://search.tiangong.cn/" },
    { text: "商汤商量", link: "https://chat.sensetime.com/" },
    { text: "腾讯混元", link: "https://hunyuan.tencent.com/" },
    { text: "ChatGPT", link: "https://chat.openai.com/" },
    { text: "Poe", link: "https://poe.com/" },
    { text: "Copilot", link: "https://copilot.microsoft.com/" },
    { text: "Perplexity", link: "https://www.perplexity.ai/" },
    { text: "Theb.ai", link: "https://beta.theb.ai/" },
  ]
}, {
  name: "校友推荐", icon: "fa-solid fa-inbox",
  desc: `<a onclick="dialog.showMsg('联系方式')"><i class="fa-solid fa-pen-to-square"></i> 我要投稿</a>`,
  item: [
    { text: "旅游地图", desc: "云游西安", link: "http://ditu.ps123.net/china/923.html" },
    { text: "Arch指南", icon: "iconfont icon-archlinux", desc: "纸鹿自建镜像", link: "https://arch.cooo.site/" },
    { text: "领红包", desc: "每天薅羊毛", icon: "fa-brands fa-alipay", js: "dialog.showMsg('支付宝红包')" },
  ]
}, {
  name: "在线工具", icon: "fa-solid fa-toolbox", item: [
    { text: "菜鸟工具", desc: "运行代码", link: "https://c.runoob.com/" },
    { text: "在线PS", desc: "稿定设计", link: "https://ps.gaoding.com/" },
    { text: "帮小忙", desc: "QQ浏览器", link: "https://tool.browser.qq.com/" },
    { text: "MikuTools", desc: "小工具集合", link: "http://tools.miku.ac/" },
    { text: "测网速", desc: "东北大学", link: "https://speed4.neu6.edu.cn/" },
    { text: "网络测速", desc: "USTC反代", link: "http://revproxy.ustc.edu.cn:8000/" },
    { text: "IP检查", desc: "Sukka", link: "https://ip.skk.moe/" },
    { text: "IP测试", desc: "YesTool", link: "https://myip.yestool.org/" },
  ]
}, {
  name: "软件下载", icon: "fa-solid fa-cube", item: [
    { text: "Win软件", desc: "联想应用商店", icon: "fa-brands fa-microsoft", link: "https://lestore.lenovo.com/" },
    { text: "果核剥壳", link: "https://www.ghxi.com/" },
    { text: "微软商店解析", icon: "fa-solid fa-bag-shopping", link: "https://store.rg-adguard.net/" },
    { text: "Win镜像", desc: "UUPDump", icon: "fa-brands fa-windows", link: "https://www.uupdump.cn/" },
    { text: "Mac软件", desc: "Digit77破解", icon: "fa-brands fa-apple", link: "https://www.digit77.com/" },
    { text: "JB激活", icon: "iconfont icon-apple-mask-icon", desc: "JetBra.in", link: "https://3.jetbra.in/" },
  ]
}, {
  name: "友链", icon: "fa-solid fa-link",
  desc: `<a onclick="dialog.showMsg('联系方式')"><i class="fa-solid fa-user-plus"></i> 添加友链</a>`,
  item: [
    { text: "纸鹿小站", link: "https://zhilu.cyou/" },
    { text: "西邮 Linux 兴趣小组", link: "https://linux.cooo.site/" },
    // { text: "半岛的小屋", link: "https://www.bandao.ltd/" },
    // { text: "plus studio", link: "https://studyinglover.com/" },
  ]
},]

nav.list.forEach((list, i) => {
  nav.ele[i].innerHTML = list.map(group => `
    <div class="card">
    <div class="between">
    <h4><i class="${group.icon} fa-space"></i>${group.name}</h4>
    ${group.desc ? `<p class="dim">${group.desc}</p>` : ``}
    </div>
    <div class="list">
    ${group.item.map(item => `
      <a data-sub="${item.desc || ""}"
      ${item.js ? `onclick="${item.js}"` : `href="${item.link}"`}
    >${item.icon ? `<i class="${item.icon} fa-space"></i>` : ``}${item.text}</a>
    `).join(`\n`)}
    </div>
    </div>`).join(`\n`)
})

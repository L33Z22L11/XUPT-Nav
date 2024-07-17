let nav = {
  name: "CO导航",
  description: "",
  list: [],
  ele: document.querySelectorAll(".navlist"),
}

nav.list[0] = [{
  name: "线上课时", icon: "fa-solid fa-chalkboard-user", item: [
    { text: "学习通", icon: "iconfont icon-chaoxing", link: "http://i.chaoxing.com/" },
    { text: "U校园", icon: "fa-solid fa-u", link: "https://u.unipus.cn/user/student" },
    { text: "iWrite", icon: "fa-solid fa-pen-nib", link: "http://iwrite.unipus.cn/student" },
    { text: "中国大学MOOC", icon: "fa-solid fa-book-open", link: "https://icourse163.org/home.htm" },
    { text: "云班课", icon: "fa-solid fa-cloud", link: "https://www.mosoteach.cn/web/" },
    { text: "蓝桥云课", icon: "iconfont icon-lanqiao", link: "https://www.lanqiao.cn/user/?tab=2#:~:text=%E6%88%91%E7%9A%84%E8%AF%BE%E7%A8%8B" },
    { text: "PTA", icon: "fa-solid fa-laptop-code", link: "https://pintia.cn/problem-sets/active" },
  ]
}, {
  name: "西邮生活", icon: "fa-solid fa-school", item: [
    { text: "教务系统", desc: "“校务行”查分更快", icon: "fa-regular fa-calendar-days", link: "http://www.zfjw.xupt.edu.cn/jwglxt" },
    { text: "奖学金/退费", desc: "支付宝扫码领取", icon: "fa-solid fa-wallet", js: "dialog.showMsg('西邮财务处')" },
    { text: "缴费大厅", desc: "电费充值", icon: "fa-solid fa-sack-dollar", js: "dialog.showMsg(this.textContent)" },
    { text: "我在校园", desc: "网页版登录", icon: "fa-solid fa-location-dot", js: "dialog.showMsg(this.textContent)" },
    { text: "青年大学习", desc: "需要微信打开", icon: "fa-solid fa-medal", js: "dialog.showMsg(this.textContent)" },
    { text: "第二课堂", desc: "学分申报", icon: "fa-solid fa-book-bookmark", js: "dialog.showMsg(this.textContent)" },
    { text: "个人中心", desc: "校园信息门户", icon: "fa-solid fa-street-view", link: "http://i.xiyou.edu.cn/" },
    { text: "内网资源", desc: "WebVPN", icon: "fa-solid fa-building-lock", link: "http://sec.xupt.edu.cn/" },
    { text: "电子教材", desc: "西邮图书馆", icon: "fa-solid fa-book", link: "https://xyoujc.mh.chaoxing.com/engine2/general-rest/4072742/proxy-more-url?wfwfid=22861" },
    { text: "教育邮箱", desc: "页面右上角能申请", icon: "fa-solid fa-envelope", link: "http://webmail.xupt.edu.cn/" },
    { text: "西邮官网", icon: "fa-solid fa-globe", link: "http://www.xupt.edu.cn/" },
    { text: "常用服务导航", icon: "fa-solid fa-taxi", link: "http://www.xupt.edu.cn/xxfw/cyfw1.htm" },
    { text: "办事大厅", icon: "fa-solid fa-building-columns", link: "http://one.xupt.edu.cn/EIP" },
    { text: "信息直通车", icon: "fa-solid fa-train-subway", link: "http://ztc.sec.xupt.edu.cn/" },
    { text: "正版软件", icon: "fa-solid fa-cubes", link: "http://ms.xupt.edu.cn/" },
  ]
}, {
  name: "考试学习", icon: "fa-solid fa-pen-ruler", item: [
    { text: "西邮试卷", desc: "欢迎commit", icon: "fa-brands fa-github", link: "https://github.com/JiaHuann/XUPT-Exam-Collection" },
    { text: "试卷打印", desc: "打印店资源", icon: "fa-solid fa-print", js: "dialog.showMsg(this.textContent)" },
    // { text: "船长的网课", desc: "挂了先用右边的", icon: "fa-solid fa-hard-drive", link: "https://pan.sehcz.ltd/%E6%88%91%E7%9A%84%E7%BD%91%E7%9B%98/%E6%9C%9F%E6%9C%AB%E4%BF%9D%E5%91%BD" },
    { text: "名来的网课", desc: "期末保命复习视频", icon: "fa-solid fa-hard-drive", link: "https://drive.mzdyl.xyz/%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99" },
    { text: "安娜的档案", desc: "世界最大互联网图书馆", icon: "fa-solid fa-book-atlas", link: "https://zh.annas-archive.org/" },
    { text: "zlibrary", desc: "免费电子书下载", icon: "fa-solid fa-book-atlas", link: "https://zh.singlelogin.re/" },
    { text: "力扣", icon: "fa-solid fa-code", link: "https://leetcode.cn/" },
    { text: "学信档案", icon: "fa-solid fa-address-card", link: "https://my.chsi.com.cn/archive/index.action" },
    { text: "四六级报名", icon: "fa-solid fa-scroll", link: "https://cet-bm.neea.edu.cn/" },
  ]
}, {
  name: "西邮周边", icon: "fa-solid fa-circle-nodes", item: [
    { text: "🔥实验室纳新", desc: "火热纳新 就等你来", link: "https://docs.qq.com/sheet/DSkFiRmpzcVJHSklM" },
    // { text: "校园网", link: "https://github.com/drcoms/drcom-generic/wiki/可用学校列表" },
    { text: "逸夫楼地图", desc: "手机访问才正常", icon: "fa-solid fa-map-location-dot", js: "dialog.showMsg(this.textContent)" },
    { text: "东区教室导航", desc: "微信“隔壁小O”", icon: "fa-solid fa-route", link: "https://mp.weixin.qq.com/s/CZR_d2SmltiZyl-oCz3zhA" },
    { text: "邮立方", desc: "校园MC交流", icon: "iconfont icon-minecraft", link: "https://cop.cooo.site" },
    { text: "飞跃手册", desc: "毕业经验分享", link: "https://xuptflying.github.io/xupt-flying.github.io/#/" },
    { text: "校园墙", icon: "fa-brands fa-weixin", js: "dialog.showMsg(this.textContent)" },
    { text: "西柚oi", desc: "校园交流群", icon: "iconfont icon-xiaohongshu", js: "dialog.showMsg(this.textContent)" },
  ]
},]

nav.list[1] = [{
  name: "第三方导航", icon: "fa-solid fa-signs-post", item: [
    { text: "夸克搜索", desc: "免下载", icon: "fa-solid fa-magnifying-glass", js: "dialog.showMsg(this.textContent)" },
    { text: "半岛导航", desc: "西邮 学习", link: "https://www.bandao.ltd/guidance/" },
    { text: "掘金酱", desc: "开发者", link: "https://e.juejin.cn/" },
    { text: "别摸鱼", desc: "AI 新媒体", link: "https://biemoyu.com/" },
    { text: "下次一定", desc: "影视 工具 装机", link: "https://www.iiice.cn/" },
    { text: "蜗牛导航", desc: "开发 设计", link: "https://s.eallion.com/" },
  ]
}, {
  name: "AI工具", icon: "fa-solid fa-robot",
  item: [
    { text: "文心一言", desc: "百度", link: "https://yiyan.baidu.com/" },
    { text: "通义千问", desc: "阿里", link: "https://qianwen.aliyun.com/" },
    { text: "Kimi.ai", desc: "月之暗面", link: "https://kimi.moonshot.cn/" },
    { text: "智谱清言", link: "https://chatglm.cn/" },
    { text: "腾讯混元", link: "https://hunyuan.tencent.com/" },
    { text: "讯飞星火", link: "https://xinghuo.xfyun.cn/desk" },
    { text: "昆仑天工", link: "https://search.tiangong.cn/" },
    { text: "商汤商量", link: "https://chat.sensetime.com/" },
    { text: "ChatGPT", desc: "OpenAI", link: "https://chatgpt.com/" },
    { text: "ChatGPT", desc: "国内镜像", link: "https://www.ycl.cool/tool/ai/" },
    { text: "Gemini", desc: "Google", link: "https://gemini.google.com/app" },
    { text: "Copilot", desc: "Microsoft", link: "https://copilot.microsoft.com/" },
    { text: "Copilot", desc: "第三方镜像", link: "https://ai.qinye.cool/" },
    { text: "Coze", desc: "字节", link: "https://www.coze.com/home" },
    { text: "Poe", desc: "Quora", link: "https://poe.com/" },
    { text: "Perplexity", link: "https://www.perplexity.ai/" },
  ]
}, {
  name: "校友推荐", icon: "fa-solid fa-inbox",
  desc: `<a onclick="dialog.showMsg('联系方式')"><i class="fa-solid fa-pen-to-square"></i> 我要投稿</a>`,
  item: [
    { text: "打字背单词", desc: "Qwerty Learner", link: "https://qwerty.kaiyi.cool/" },
    { text: "公众号编辑", desc: "镜像自doocs/md", icon: "fa-brands fa-markdown", link: "https://md.cooo.site/" },
    { text: "画流程图", desc: "Draw.io", link: "https://draw.io/" },
    { text: "电路仿真", desc: "CircuitJS1", link: "http://www.falstad.com/circuit/circuitjs.html" },
    { text: "电脑入门", desc: "你缺失的那门计算机课", icon: "fa-solid fa-book-bookmark", link: "https://www.criwits.top/missing/" },
    { text: "电脑帮助", desc: "南大IT侠手册", link: "https://www.yuque.com/itxia" },
    { text: "芯片榜", desc: "极客湾SoCPK", link: "https://www.socpk.com/" },
    { text: "Yesicon", desc: "前端图标库", link: "https://yesicon.app/" },
    { text: "开发速查", desc: "Quick Reference", icon: "fa-solid fa-swatchbook", link: "https://quickref.cn/" },
    { text: "在线DOS", desc: "MASM汇编", link: "https://dosasm.github.io/dosrun/" },
  ]
}, {
  name: "在线工具", icon: "fa-solid fa-toolbox", item: [
    { text: "菜鸟工具", desc: "运行代码", link: "https://c.runoob.com/" },
    { text: "在线PS", desc: "稿定设计", link: "https://ps.gaoding.com/" },
    { text: "帮小忙", desc: "QQ浏览器", link: "https://tool.browser.qq.com/" },
    { text: "IT Tools", desc: "开发者小工具", link: "https://it-tools.tech/" },
    { text: "MikuTools", desc: "小工具集合", link: "http://tools.miku.ac/" },
    { text: "测网速", desc: "中科大测速", link: "https://test.ustc.edu.cn/" },
    { text: "USTC反代", desc: "教育网出口测试", link: "http://revproxy.ustc.edu.cn:8000/" },
    { text: "IP检查", desc: "Sukka", link: "https://ip.skk.moe/" },
    { text: "MyIP", desc: "IP工具箱", link: "https://ipcheck.ing/" },
  ]
}, {
  name: "软件下载", icon: "fa-solid fa-cube", item: [
    { text: "Win软件", desc: "联想应用商店", icon: "fa-brands fa-microsoft", link: "https://lestore.lenovo.com/" },
    { text: "应用推荐", desc: "果核剥壳", link: "https://www.ghxi.com/" },
    { text: "微软商店解析", desc: "Generation Project", icon: "fa-solid fa-bag-shopping", link: "https://store.rg-adguard.net/" },
    { text: "Win镜像", desc: "UUPDump", icon: "fa-brands fa-windows", link: "https://www.uupdump.cn/" },
    { text: "开源镜像", desc: "NJU Mirror", link: "https://mirror.nju.edu.cn/" },
    { text: "Mac软件", desc: "Digit77破解", icon: "fa-brands fa-apple", link: "https://www.digit77.com/" },
    { text: "JB激活", desc: "JetBra.in", icon: "iconfont icon-apple-mask-icon", link: "https://3.jetbra.in/" },
  ]
}, {
  name: "友链", icon: "fa-solid fa-link",
  desc: `<a onclick="dialog.showMsg('联系方式')"><i class="fa-solid fa-user-plus"></i> 添加友链</a>`,
  item: [
    { text: "纸鹿小站", link: "https://zhilu.cyou/" },
    { text: "纸鹿Blog", desc: "纸鹿摸鱼处", link: "https://blog.zhilu.cyou/" },
    { text: "西邮 Linux 兴趣小组", link: "https://xiyoulinux.com/" },
    { text: "邮立方", icon: "iconfont icon-minecraft", link: "https://cop.cooo.site" },
    // { text: "半岛的小屋", link: "https://www.bandao.ltd/" },
    // { text: "plus studio", link: "https://studyinglover.com/" },
  ]
},]

nav.list.forEach((list, i) => {
  nav.ele[i].innerHTML = list.map(group => `
    <div class="card">
    <div class="between">
    <h4><i class="${group.icon} icon-space"></i>${group.name}</h4>
    ${group.desc ? `<p class="dim">${group.desc}</p>` : ``}
    </div>
    <div class="list">
    ${group.item.map(item => `
      <a data-sub="${item.desc || ""}"
      ${item.js ? `onclick="${item.js}"` : `href="${item.link}"`}
    >${item.icon ? `<i class="${item.icon} icon-space"></i>` : ``}${item.text}</a>
    `).join(`\n`)}
    </div>
    </div>`).join(`\n`)
})

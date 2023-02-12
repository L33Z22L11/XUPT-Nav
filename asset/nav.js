let nav = {
  group: "西柚导航",
  description: "",
  list: [],
  ele: document.getElementsByClassName("navlist"),
}

nav.list[0] = [{
  group: "线上学习", icon: "fa-solid fa-chalkboard-user", item: [
    { text: "学习通", link: "http://i.chaoxing.com/" },
    { text: "U校园", link: "https://u.unipus.cn/user/student" },
    { text: "iWrite", link: "http://iwrite.unipus.cn/student" },
    { text: "中国大学MOOC", link: "https://icourse163.org/home.htm" },
  ]
}, {
  group: "西邮生活", icon: "fa-solid fa-school", item: [
    { text: "青年大学习", icon: "fa-solid fa-qrcode", js: "dialog.QR('青年大学习')" },
    { text: "教务管理系统", link: "http://www.zfjw.xupt.edu.cn/jwglxt" },
    { text: "第二课堂", icon: "fa-solid fa-qrcode", js: "dialog.QR('第二课堂')" },
    { text: "校园信息门户", link: "http://i.xiyou.edu.cn/" },
    { text: "内网资源导航", link: "http://sec.xupt.edu.cn/" },
  ]
}, {
  group: "考试信息", icon: "fa-solid fa-pen-ruler", item: [
    { text: "学信网", link: "https://www.chsi.com.cn/" },
    { text: "四六级报名", link: "https://cet-bm.neea.edu.cn/" },
  ]
}, {
  group: "西邮周边", icon: "fa-solid fa-circle-nodes", item: [
    // { text: "校园网", link: "https://github.com/drcoms/drcom-generic/wiki/可用学校列表" },
    { text: "东区导航", desc: "隔壁小O", link: "https://mp.weixin.qq.com/s/CZR_d2SmltiZyl-oCz3zhA" },
    { text: "西邮合集", icon: "fa-brands fa-bilibili", desc: "半岛的孤城", link: "https://space.bilibili.com/32187583/channel/collectiondetail?sid=53061" },
  ]
},]

nav.list[1] = [{
  group: "第三方导航", icon: "fa-solid fa-share-from-square", item: [
    { text: "半岛导航", desc: "西邮 学习", link: "https://www.bandao.ltd/guidance/" },
    { text: "掘金酱", desc: "开发者", link: "https://e.juejin.cn/" },
    { text: "下次一定", desc: "影视 工具 装机", link: "https://www.iiice.cn/" },
    { text: "蜗牛导航", desc: "开发 设计", link: "https://s.eallion.com/" },
    { text: "禾坡导航", desc: "运营 美工", link: "http://www.hepou.com/" },
  ]
}, {
  group: "软件下载", icon: "fa-solid fa-cube", item: [
    { text: "联想应用商店", link: "https://lestore.lenovo.com/" },
    { text: "果核剥壳", link: "https://www.ghxi.com/" },
    { text: "微软商店解析", link: "https://store.rg-adguard.net/" },
    { text: "Digit77", link: "https://www.digit77.com/" },
  ]
}, {
  group: "在线工具", icon: "fa-solid fa-toolbox", item: [
    { text: "稿定PS", link: "https://ps.gaoding.com/#/" },
    { text: "菜鸟工具", link: "https://c.runoob.com/" },
  ]
}, {
  group: "友链", icon: "fa-solid fa-link", item: [
    { text: "纸鹿小站", link: "https://zhilu.cyou/" },
    { text: "半岛的小屋", link: "https://www.bandao.ltd/" },
  ]
},]

nav.list.forEach((list, i) => {
  nav.ele[i].innerHTML = list.map(group => `
    <div class="card">
    <h4><i class="${group.icon}"></i> ${group.group}</h4>
    <div class="list">
    ${group.item.map(item => `<a 
      ${item.link ? `href="${item.link}"` : `onclick="${item.js}"`}
      ${item.desc ? `data-sub="${item.desc}"` : ''}
      >${item.icon ? `<i class="${item.icon}"></i>` : ''}${item.text}
      </a>`).join(`\n`)}
    </div>
    </div>`).join(`\n`)
})

let navlist = {
  ele: document.getElementsByClassName("navlist"),
  list: [],
}

navlist.list[0] = [{
  name: "线上学习", icon: "fa-solid fa-chalkboard-user", list: [
    { name: "学习通", link: "http://i.chaoxing.com/" },
    { name: "U校园", link: "https://u.unipus.cn/user/student" },
    { name: "iWrite", link: "http://iwrite.unipus.cn/student" },
    { name: "中国大学MOOC", link: "https://icourse163.org/home.htm" },
  ]
}, {
  name: "西邮生活", icon: "fa-solid fa-school", list: [
    { name: "青年大学习", icon: "fa-solid fa-qrcode", js: "dialog.QR('青年大学习')" },
    { name: "教务管理系统", link: "http://www.zfjw.xupt.edu.cn/jwglxt" },
    { name: "第二课堂", icon: "fa-solid fa-qrcode", js: "dialog.QR('第二课堂')" },
    { name: "校园信息门户", link: "http://i.xiyou.edu.cn/" },
    { name: "内网资源导航", link: "http://sec.xupt.edu.cn/" },
  ]
}, {
  name: "考试信息", icon: "fa-solid fa-pen-ruler", list: [
    { name: "学信网", link: "https://www.chsi.com.cn/" },
    { name: "四六级报名", link: "https://cet-bm.neea.edu.cn/" },
  ]
}, {
  name: "西邮周边", icon: "fa-solid fa-circle-nodes", list: [
    // { name: "校园网", link: "https://github.com/drcoms/drcom-generic/wiki/可用学校列表" },
    { name: "东区导航", desc: "隔壁小O", link: "https://mp.weixin.qq.com/s/CZR_d2SmltiZyl-oCz3zhA" },
    { name: "西邮合集", icon: "fa-brands fa-bilibili", desc: "半岛的孤城", link: "https://space.bilibili.com/32187583/channel/collectiondetail?sid=53061" },
  ]
},]

navlist.list[1] = [{
  name: "第三方导航", icon: "fa-solid fa-share-from-square", list: [
    { name: "半岛导航", desc: "西邮 学习", link: "https://www.bandao.ltd/guidance/" },
    { name: "掘金酱", desc: "开发者", link: "https://e.juejin.cn/" },
    { name: "下次一定", desc: "影视 工具 装机", link: "https://www.iiice.cn/" },
    { name: "蜗牛导航", desc: "开发 设计", link: "https://s.eallion.com/" },
    { name: "禾坡导航", desc: "运营 美工", link: "http://www.hepou.com/" },
  ]
}, {
  name: "软件下载", icon: "fa-solid fa-cube", list: [
    { name: "联想应用商店", link: "https://lestore.lenovo.com/" },
    { name: "果核剥壳", link: "https://www.ghxi.com/" },
    { name: "微软商店解析", link: "https://store.rg-adguard.net/" },
    { name: "Digit77", link: "https://www.digit77.com/" },
  ]
}, {
  name: "在线工具", icon: "fa-solid fa-toolbox", list: [
    { name: "稿定PS", link: "https://ps.gaoding.com/#/" },
    { name: "菜鸟工具", link: "https://c.runoob.com/" },
  ]
}, {
  name: "友链", icon: "fa-solid fa-link", list: [
    { name: "纸鹿小站", link: "https://zhilu.cyou/" },
    { name: "半岛的小屋", link: "https://www.bandao.ltd/" },
  ]
},]

navlist.output = (list, ele) => {
  ele.innerHTML = list.map(group => `
    <div class="card">
    <h4><i class="${group.icon}"></i> ${group.name}</h4>
    <div class="list">
    ${group.list.map(item => `<a 
      ${item.link ? `href="${item.link}"` : ''}
      ${item.js ? `onclick="${item.js}"` : ''}
      ${item.desc ? `data-sub="${item.desc}"` : ''}
      >${item.icon ? `<i class="${item.icon}"></i>` : ''}${item.name}
      </a>`).join(`\n`)}
    </div>
    </div>`).join(`\n`)
}

for (let i = 0; navlist.list[i] && navlist.ele[i]; i++)
  navlist.output(navlist.list[i], navlist.ele[i])

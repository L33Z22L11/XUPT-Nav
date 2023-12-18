let dialog = {
    ele: document.getElementById("dialog"),
    title: document.getElementById("dialogTitle"),
    content: document.getElementById("dialogContent"),
}

dialog.msgs = {
    联系方式: { content: "QQ: 2399052066 (同时支持QQ邮箱)" },
    邮立方: { content: "邮立方是西邮校内的Minecraft交流群体, 属于Minecraft高校联盟成员组织, QQ群:779877449。" },
}

dialog.showMsg = (name) => {
    let item = dialog.msgs[name]
    dialog.title.innerHTML = `<i class="${item.icon || "fa-solid fa-comment-dots"} fa-space"></i>${name}`
    dialog.content.innerHTML = item.content
    dialog.show()
}

dialog.QRs = {
    支付宝红包: { icon: "fa-solid fa-sack-dollar", code: "https://qr.alipay.com/11w14884hevnzbvvrb9ao05" },
    我在校园: { code: "https://gw.wozaixiaoyuan.com/h5/mobile/basicinfo/index" },
    第二课堂: { code: "https://win.9xueqi.com/" },
    青年大学习: { code: "https://h5.sxgqt.org.cn/#/statisticsNews" },
    逸夫楼地图: { code: "https://8.u.h5mc.com/c/7oor/ygju/index.html" },
}

dialog.phone = link => {
    open(link, "_blank", 'height=720px,width=360px,left=720px')
}

dialog.showQR = name => {
    let item = dialog.QRs[name]
    console.log(name, dialog.QRs, item)
    dialog.title.innerHTML = `<i class="${item.icon || "fa-solid fa-qrcode"} fa-space"></i>${name}`
    dialog.content.innerHTML = `<strong><a onclick="dialog.phone('${item.code}')">点击打开</a></strong>或者扫描下方二维码。`
    new QRCode(dialog.content, item.code)
    dialog.show()
}

dialog.show = () => {
    dialog.ele.classList.remove("hidden")
}

dialog.close = () => {
    dialog.ele.classList.add("hidden")
    dialog.title.innerHTML = ""
    dialog.content.innerHTML = ""
}

let dialog = {
    ele: document.getElementById("dialog"),
    title: document.getElementById("dialogTitle"),
    content: document.getElementById("dialogContent"),
}

dialog.listMsg = {
    联系方式: `QQ: 2399052066 (同时支持QQ邮箱)`,
}

dialog.msg = name => {
    dialog.title.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${name}`
    dialog.content.innerHTML = dialog.listMsg[name]
    dialog.show()
}

dialog.listQR = {
    我在校园: "https://gw.wozaixiaoyuan.com/h5/mobile/basicinfo/index",
    第二课堂: "https://win.9xueqi.com/",
    青年大学习: "https://h5.sxgqt.org.cn/#/statisticsNews",
    逸夫楼地图: "https://8.u.h5mc.com/c/7oor/ygju/index.html",
}

dialog.phone = name => {
    open(dialog.listQR[name], name, 'height=720px,width=360px,left=720px')
}

dialog.QR = name => {
    dialog.title.innerHTML = `<i class="fa-brands fa-weixin"></i> ${name}`
    dialog.content.innerHTML = `微信扫一扫、<a href="${dialog.listQR[name]}">点击此处强制打开</a>或者<a onclick="dialog.phone('${name}')">点击此处以模拟手机模式打开</a>。`
    new QRCode(dialog.content, dialog.listQR[name])
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

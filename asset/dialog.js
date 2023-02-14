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
    第二课堂: "https://win.9xueqi.com/",
    青年大学习: "https://h5.sxgqt.org.cn/#/statisticsNews",
}

dialog.qr = name => {
    if (window.navigator.userAgent.match("MicroMessenger"))
        return open(dialog.listQR[name])
    dialog.title.innerHTML = `<i class="fa-brands fa-weixin"></i> ${name}`
    dialog.content.innerHTML = `微信扫一扫，一键打开。<br>(手机浏览器用户请在微信内打开网站)`
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

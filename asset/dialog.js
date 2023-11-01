let dialog = {
    ele: document.getElementById("dialog"),
    title: document.getElementById("dialogTitle"),
    content: document.getElementById("dialogContent"),
}

dialog.msgs = {
    联系方式: `QQ: 2399052066 (同时支持QQ邮箱)`,
    邮立方: "邮立方是西邮校内的Minecraft交流群体，属于Minecraft高校联盟成员组织，QQ群：779877449。",
}

dialog.showMsg = name => {
    dialog.title.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${name}`
    dialog.content.innerHTML = dialog.msgs[name]
    dialog.show()
}

dialog.QRs = {
    我在校园: "https://gw.wozaixiaoyuan.com/h5/mobile/basicinfo/index",
    第二课堂: "https://win.9xueqi.com/",
    青年大学习: "https://h5.sxgqt.org.cn/#/statisticsNews",
    逸夫楼地图: "https://8.u.h5mc.com/c/7oor/ygju/index.html",
}

dialog.phone = name => {
    open(dialog.QRs[name], name, 'height=720px,width=360px,left=720px')
}

dialog.showQR = name => {
    dialog.title.innerHTML = `<i class="fa-brands fa-weixin"></i> ${name}`
    dialog.content.innerHTML = `微信扫一扫、<a href="${dialog.QRs[name]}"><u>强制打开</u></a>或者<a onclick="dialog.phone('${name}')"><u>模拟手机尺寸打开</u></a>。`
    new QRCode(dialog.content, dialog.QRs[name])
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

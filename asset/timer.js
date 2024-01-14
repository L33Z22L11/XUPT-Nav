// ExamClockCore from https://github.com/L33Z22L11/ExamClock

let timer = {
  ele: document.getElementById("timer").children,
  start: new Date(0), end: new Date(0), now: new Date(),
  list: function ($) {
    $("寒假", "24-01-13 00:00", "24-02-26 00:00")
    $("", "24-01-13 00:00", "24-06-30 00:00")
    $("考试", "24-06-30 00:00", "24-07-13 00:00")
    $("暑假", "24-07-13 00:00", "24-08-26 00:00")
  }
}

timer.try = function (nextTitle, nextStart, nextEnd) {
  nextStart = new Date(`20${nextStart}+08:00`)
  nextEnd = new Date(`20${nextEnd}+08:00`)
  if (timer.now > timer.end && timer.now <= nextEnd) {
    timer.title = nextTitle
    timer.start = nextStart
    timer.end = nextEnd
  }
}

timer.update = function () {
  this.now = new Date()
  if (this.now > this.end) this.list(this.try)
  let today = {
    week: Math.ceil(this.start.getDay() / 7 + (this.now - this.start) / 6048E5),
    passed: Math.ceil((this.now - this.start) / 864E5),
    left: Math.ceil((this.end - this.now) / 864E5),
    all: Math.ceil((this.end - this.start) / 864E5),
    progress: ((this.now - this.start) / (this.end - this.start)) * 100,
  }
  if (!today.all) {
    this.ele[0].innerHTML = "计时器未配置"
    this.ele[1].remove()
    this.ele[1].remove()
    return
  }
  this.ele[0].innerHTML = `${this.now.getMonth() + 1}.${this.now.getDate()} ${this.title}第${today.week}周`
  this.ele[1].innerHTML = `第${today.passed}/${today.all}天 ${today.progress.toFixed(0)}%`
  this.ele[2].style.width = `${today.progress}%`

}

timer.update()
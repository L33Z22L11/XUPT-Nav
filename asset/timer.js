// ExamClockCore from https://github.com/L33Z22L11/ExamClock

let timer = {
  ele: document.getElementById("timer").children,
  start: new Date(0), end: new Date(0), now: new Date(),
  list: function ($) {
    $("", "2023-02-27 00:00", "2023-07-15 00:00");
    $("暑假", "2023-07-15 00:00", "2023-08-28 00:00");
    $("", "2023-08-28 00:00", "2023-12-31 00:00");
  }
}

timer.try = function (nextTitle, nextStart, nextEnd) {
  nextStart = new Date(nextStart + "+08:00");
  nextEnd = new Date(nextEnd + "+08:00");
  if (timer.now > timer.end && timer.now <= nextEnd) {
    timer.title = nextTitle;
    timer.start = nextStart;
    timer.end = nextEnd;
  }
};

timer.update = function () {
  this.now = new Date();
  if (this.now > this.end) this.list(this.try);
  let today = {
    week: Math.ceil(this.start.getDay() / 7 + (this.now - this.start) / 6048E5),
    passed: Math.ceil((this.now - this.start) / 864E5),
    left: Math.ceil((this.end - this.now) / 864E5),
    all: Math.ceil((this.end - this.start) / 864E5),
    progress: ((this.now - this.start) / (this.end - this.start)) * 100,
  };
  this.ele[0].innerHTML = `${this.now.getMonth() + 1}.${this.now.getDate()} ${this.title}第${today.week}周`;
  this.ele[1].innerHTML = `第${today.passed}/${today.all}天 ${today.progress.toFixed(0)}%`;
  this.ele[2].style.width = `${today.progress}%`;
}

timer.update();
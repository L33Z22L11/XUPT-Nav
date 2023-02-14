// ExamClockCore

let timer = {
  ele: document.getElementById("timer").children,
  now: new Date(),
}

timer.find = function () {
  let $ = timer.try;
  $("寒假", "2023-01-09", "2023-02-19");
  $("考试", "2023-02-19", "2023-02-26");
  $("", "2023-02-26", "2023-07-15");
}

timer.try = function tryingMethod(nextTitle, nextStart, nextEnd) {
  if (nextStart.length == 10) nextStart += "T00:00";
  if (nextEnd.length == 10) nextEnd += "T00:00";
  nextStart = new Date(`${nextStart}+08:00`);
  nextEnd = new Date(`${nextEnd}+08:00`);
  if (timer.now > timer.end && timer.now <= nextEnd) {
    timer.title = nextTitle;
    timer.start = nextStart;
    timer.end = nextEnd;
  }
};

timer.update = function () {
  this.now = new Date();
  if (this.now > this.end) this.find();
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

timer.load = function () {
  timer.start = timer.end = new Date(0);
  timer.update();
}

timer.load();
// timer.load.interval=setInterval(timer.load,100);

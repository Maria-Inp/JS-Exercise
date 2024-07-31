const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const dd = document.querySelector("#dd");
const hh = document.querySelector("#hh");
const mm = document.querySelector("#mm");
const ss = document.querySelector("#ss");

const day_dot = document.querySelector(".day_dot");
const hr_dot = document.querySelector(".hr_dot");
const min_dot = document.querySelector(".min_dot");
const sec_dot = document.querySelector(".sec_dot");

const deadline = new Date("Aug 2, 2024 18:46:05").getTime();

let x = setInterval(function () {
  const now = new Date().getTime();

  const t = deadline - now,
    d = Math.floor(t / 1000 / 60 / 60 / 24),
    h = Math.floor((t / 1000 / 60 / 60) % 24),
    m = Math.floor((t / 1000 / 60) % 60),
    s = Math.floor((t / 1000) % 60);

  days.innerHTML = d + `<br><span>Days</span>`;
  hours.innerHTML = h + `<br><span>Hours</span>`;
  m < 10
    ? (minutes.innerHTML = `0${m}<br><span>Minutes</span>`)
    : (minutes.innerHTML = m + `<br><span>Minutes</span>`);
  s < 10
    ? (seconds.innerHTML = `0${s}<br><span>Seconds</span>`)
    : (seconds.innerHTML = s + `<br><span>Seconds</span>`);

  dd.style.strokeDashoffset = 315 - (315 * d) / 365;
  hh.style.strokeDashoffset = 315 - (315 * h) / 24;
  mm.style.strokeDashoffset = 315 - (315 * m) / 60;
  ss.style.strokeDashoffset = 315 - (315 * s) / 60;

  // 360 deg / 365 days
  day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;

  // 360 deg / 24 hours
  hr_dot.style.transform = `rotateZ(${h * 15}deg)`;

  // 360 deg / 60 minutes
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;

  // 360 deg / 60 seconds
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

  if (t <= 0) {
    clearInterval(timerTic);
    document.querySelector(".main-container").innerHTML = "EXPIRED";
  }
});

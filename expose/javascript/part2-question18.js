function timeEverySecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }

  setInterval(timeEverySecond, 1000);
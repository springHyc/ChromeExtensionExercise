function timing() {
  con = confirm(`The off-duty time you set is：${clockForm.time.value}`);
  const hour = clockForm.time.value.split(":")[0];
  const minute = clockForm.time.value.split(":")[1];
  if (con) {
    const formBlock = document.getElementById("clockForm");
    formBlock.style.display = "none";
    document.getElementById("tip").style.display = "block";
    document.getElementById("timeValue").innerText = clockForm.time.value;

    setInterval(() => {
      let date = new Date();
      if (hour == date.getHours() && minute == date.getMinutes()) {
        confirm("准备下班啦😘");
      }
    }, 10000);
  }
}
try {
  document.getElementById("submit").onclick = timing;
} catch (error) {
  alert("添加点击事件失败！");
}

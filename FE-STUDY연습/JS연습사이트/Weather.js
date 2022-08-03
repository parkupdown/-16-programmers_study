export default function Weather({ $target, data }) {
  const weatherbox = document.createElement("div");

  this.data = data;

  this.render = function () {
    $target.appendChild(weatherbox);
  };
  this.render();
}

//select에 있는 add를 함수로 변경 후 app에서 그 값을 관리하고
// 그 값에서 this.~~를 넣는거 역시 app에서 관리..

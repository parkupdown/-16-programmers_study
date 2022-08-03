export default function Header({ $target }) {
  const h1 = document.createElement("h1");
  this.render = function () {
    $target.appendChild(h1);
    h1.innerHTML = `휴게소별 날씨 정보를 알려드립니다!🌏`;
  };
  this.render();
}

export default function Todocount({ $target, onCount }) {
  const h1 = document.createElement("h1");
  $target.appendChild(h1);
  this.render = function () {
    onCount(h1);
  };
  this.render();

  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };
}

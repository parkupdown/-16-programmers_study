export default function SearchResult({ $target, data }) {
  const resultbox = document.createElement("div");

  $target.appendChild(resultbox);
  this.data = data;

  this.render = function () {
    resultbox.innerHTML = `<ul>
${this.data
  .map(function (item) {
    return `<li>${item.title}</li>`;
  })
  .join("")}
</ul>`;
  };

  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };
}

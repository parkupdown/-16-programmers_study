export default function Todolist({ $target, data }) {
  this.data = data;

  const todobox = document.createElement("div");
  $target.appendChild(todobox);

  this.render = function () {
    todobox.innerHTML = `<ul>
    ${this.data
      .map(function (item, index) {
        return `${
          item.isCompleted
            ? `<s><li>${item.text}</li></s>`
            : `<li>${item.text}</li>`
        }`;
      })
      .join("")}
    </ul>`;
  };
  this.render();

  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };
}

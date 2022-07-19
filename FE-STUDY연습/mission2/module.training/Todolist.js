export default function Todolist(data) {
  const div = document.querySelector("#Todolist");
  this.data = data;
  this.render = function () {
    div.innerHTML = `<ul>
    ${this.data
      .map(function (item) {
        return `${
          item.isCompleted
            ? `<s><li>${item.text}</li></s>`
            : `<li>${item.text}</li>`
        }`;
      })
      .join("")}
    
    </ul>`;
  };

  this.setState = function (newdata) {
    this.data = newdata;
  };

  this.addtodo = function (value) {
    const arr = [{ text: value, isCompleted: false }];
    const newarr = [...this.data, ...arr];
    this.setState(newarr);
    this.render();
  };
  this.render();
}

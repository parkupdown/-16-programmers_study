export default function Todolist({ $target, data }) {
  //이렇게 선언하면
  //순서상관없이 변수를 부를수 있다!
  this.data = data;
  const todobox = document.createElement("div");
  $target.appendChild(todobox);
  this.render = function () {
    todobox.innerHTML = `<ul>
    ${data
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
  this.render();
}
//this.data = 옮겨지는 부분을 잘 느껴보자..

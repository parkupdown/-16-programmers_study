export default function Todolist({ $target, data, Todoremove }) {
  //이렇게 선언하면
  //순서상관없이 변수를 부를수 있다!
  this.data = data;
  const todobox = document.createElement("div");
  $target.appendChild(todobox);
  this.render = function () {
    todobox.innerHTML = `<ul>
    ${this.data
      .map(function (item, index) {
        return `${
          item.isCompleted
            ? `<s><li id=${index}>${item.text}<button>삭제</button></li></s>`
            : `<li id=${index}>${item.text}<button>삭제</button></li>`
        }`;
      })
      .join("")}
    </ul>`;
  };
  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };

  todobox.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
    }
    if (event.target.tagName === "BUTTON") {
      const LIID = event.target.parentElement.id;
      Todoremove(LIID);

      //이렇게 하면 this 가 todolist 가 아님
    }
  });

  this.render();
}
//this.data = 옮겨지는 부분을 잘 느껴보자..

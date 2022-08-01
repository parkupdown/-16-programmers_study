export default function Todolist({ $target, data, onInvert, onRemove }) {
  //이렇게 해주는 이유는 순서에 상관없이
  //프로퍼티를 전달해주기 위해
  this.data = data;
  const todobox = document.createElement("div");
  this.render = () => {
    $target.appendChild(todobox);
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
  this.render();

  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };

  todobox.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const Liid = event.target.id;
      onInvert(Liid);
    }
    if (event.target.tagName === "BUTTON") {
      const LiIndex = event.target.parentElement.id;
      onRemove(LiIndex);
    }
  });
}

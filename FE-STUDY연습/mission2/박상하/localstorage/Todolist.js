export default function Todolist({ $target, data, onChange, Listremove }) {
  this.data = data;

  const todobox = document.createElement("div");
  $target.appendChild(todobox);

  this.render = function () {
    todobox.innerHTML = `<ul>
    ${this.data
      .map(function (item, index) {
        return `${
          item.isCompleted
            ? `<li id=${index}>(완료)${item.text}<button>❌</button></li>`
            : `<li id=${index}>${item.text}<button>❌</button></li>`
        }`;
      })
      .join("")}
    </ul>`;
  };
  this.render();

  todobox.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const LI = event.target.id;
      onChange(LI);
    }
    if (event.target.tagName === "BUTTON") {
      const listID = event.target.parentElement.id;
      Listremove(listID);
    }
  });

  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };
}

const div = document.querySelector("#todo-list");
const div2 = document.createElement("div");
div.appendChild(div2);
const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector(".BTN");

function Todolist(data) {
  this.data = data;

  this.render = function () {
    div2.innerHTML = `<ul>
    ${this.data
      .map(function (item, index) {
        return ` ${
          item.isComlited
            ? `<s><li id=${index}>${item.text}<button class="BTN">🖍</button></li></s>`
            : `<li id=${index}>${item.text}<button class="BTN">🖍</button></li>`
        } `;
      })
      .join("")}
    
    </ul>`;
  };
  //이제 데이터 추가

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let inputValue = input.value;
    todolist.addTodo(inputValue);
    input.value = "";
  });

  div2.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      const LiId = event.target.parentElement.id;
      todolist.removeTodo(LiId);
    }
    if (event.target.nodeName === "LI") {
      const LiId2 = event.target.id;
      todolist.invert(LiId2);
    }
  });

  this.setState = function (newdata) {
    this.data = newdata;
  };

  this.addTodo = function (value) {
    const plusdata2 = [{ text: value, isComlited: false }];
    const plusdata = [...this.data, ...plusdata2]; //this를 붙여야 현 시점의 data가 된다
    this.setState(plusdata);
    this.render();
  };

  this.removeTodo = function (LiId) {
    const removedata = this.data.filter(function (item, index) {
      return index !== LiId * 1;
    });
    this.setState(removedata);
    this.render();
  };

  this.invert = function (LiId2) {
    this.data[LiId2].isComlited = !this.data[LiId2].isComlited;
    this.render();
  };
}

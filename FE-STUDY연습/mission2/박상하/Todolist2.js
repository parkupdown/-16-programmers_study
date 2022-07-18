const div = document.querySelector("#todo-list");
const ul = document.createElement("ul");
div.appendChild(ul);

const form = document.querySelector("#TodoForm");
const input = document.querySelector("#TodoInput");

function TodoList(data) {
  this.box = document.createElement("div");
  div.appendChild(this.box);

  this.data = data; //or if(!new.target){throw new Error}
  if (!(this instanceof TodoList)) {
    throw new Error("new 키워드를 붙이고 함수를 실행시켜주세요");
  }
  //** feedback 이후 this===window 보다는 new.target or this instanceof 를 활용
  checkData(data); //**올바른 파라메터가 넘어오지 않을경우 에러발생시키기

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    todolist.addtodo();
    input.value = "";
  });
  this.box.addEventListener("click", function (event) {
    if (event.target.className === "BTN") {
      let LiId = event.target.parentElement.id;
      todolist.removetodo(LiId);

      //인덱스로 접근
    }
    if (event.target.nodeName === "LI") {
      const Invertid = event.target.id;
      todolist.invert(Invertid);
    }
  });
  //li.id 와 data의 index가 다를경우 데이터에서빼자
  //click했을 때 data에 filter를해서 data 변경 후 setState render순서
  this.render = function () {
    this.box.innerHTML = `<ul>
    ${this.data
      .map(function (item, index) {
        return `${
          item.isComplited
            ? `<li id=${index}><s>${item.text}</s><button class="BTN">삭제!</button></li>`
            : `<li id=${index}>${item.text}<button  class="BTN">삭제!</button></li>`
        } `;
      })
      .join("")}
    </ul>`;

    this.invert = function (index) {
      console.log(this.data[index]);
      this.data[index].isComplited = !this.data[index].isComplited;
      console.log(this.data[index]); //2번 연속으로 눌렀을 때 삭선이 제거되지않음..
      this.render();
    };

    this.setState = function (newdata) {
      this.data = newdata;
      checkData(newdata);
    };
  };
  this.removetodo = function (LiId) {
    const newlist = this.data.filter(function (item, index) {
      //item의 인덱스를 추출해야함 //클릭했을 때의 liId는 삭제
      return index !== LiId * 1; //왜 1을곱해준거지?..
    });
    this.setState(newlist);
    this.render();
  };

  this.addtodo = function () {
    const TodoObj = [{ text: input.value, isComplited: false }]; //데이터를 새로 갈아끼워줌
    this.setState([...this.data, ...TodoObj]);
    this.render(); //기존의 데이터에 새로운 데이터를 합쳐서 다시 배열에 넣는것
  };

  this.render();

  // 순서를 생각해보자 data에 추가는 가능
  // 그렇다면 그 부분도 렌더링이 되어야하는데 기존의 것은 그대로 두고 새로 생긴것만 rendering!
  // 어떻게 새로 생긴것만 구분할수있을까
  // todolist[target,~~]이게 핵심인듯!
}

function checkData(data) {
  if (Array.isArray(data) === false) {
    throw new Error(`data를 배열의 형태로 작성해주세요`);
  }
  //feedback 결과 위 배열인지를 묻는 데이터에서 아래의 if문이 포함되기 때문에 굳이
  //아래 코드가 없어도 된다.
}

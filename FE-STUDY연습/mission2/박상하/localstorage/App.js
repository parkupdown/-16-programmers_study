import Todolist from "./Todolist.js";
import Todoinput from "./Todoinput.js";
import Todocount from "./Todocount.js";

export default function App($target) {
  //배열의형태
  //localstorage 로 배열을 저장할때 JSON.stringfy  배열을 꺼낼 때 JSON.parse
  if (localStorage.getItem("todolist") === null) {
    this.data = [];
  }
  if (localStorage.getItem("todolist") !== null) {
    this.data = JSON.parse(localStorage.getItem("todolist"));
  } //꺼낼땐 항상 JSON.parse!

  this.setState = function (newdata) {
    this.data = newdata;
    localStorage.setItem("todolist", JSON.stringify(newdata));
    //setItem에 *배열*로 저장할때는 항상 Json.stringfy가 필요
    //꺼낼때는 반드시 Json.parse가 필요!;
    //this.data가 계속해서 업데이트되는것이다.
    todolist.setState(this.data);
    todocount.setState(this.data);
    //새롭게생김
  };

  const todoinput = new Todoinput({
    $target,
    onSubmit: (inputvalue) => {
      const newdata = [...this.data, { text: inputvalue, isCompleted: false }];
      //이게 이제 계속 setItem가 됨
      this.setState(newdata);
      //여기에서 추가하면됨
    },
  });

  const todolist = new Todolist({
    $target,
    data: this.data,
    Listremove: (listID) => {
      const newdata = this.data.filter(function (item, index) {
        return index !== listID * 1;
      });
      this.setState(newdata);
    },
    onChange: (LI) => {
      const newdata = this.data.map(function (item, index) {
        if (index === LI * 1) {
          return { ...item, isCompleted: item.isCompleted ? false : true };
        }
        return item; //맵을 활용해 특정 배열의 엘리먼트를 변환하는법을 배웠다.
        //나머지의 값은 그대로 return해주는게 중요하다.
      });
      this.setState(newdata);

      //setState에 새롭게 데이터를 넘겨줘여하는데..
      //this.data
      //여기서 this.data 는 localstorage.get임으로 변동을 가져갈순없다.
      //setState를할때 바로 업데이트된 값을 전달해주어야한다.
    },
  });

  const todocount = new Todocount({
    $target,
    onCount: (h1) => {
      const havetodo = this.data.filter(function (item) {
        return item.isCompleted === false;
      });
      const donetodo = this.data.filter(function (item) {
        return item.isCompleted === true;
      });

      h1.innerHTML = `해야하는 일:${havetodo.length} 해낸 일:${donetodo.length} `;
    },
  });
}

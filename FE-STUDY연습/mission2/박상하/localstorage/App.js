import Todolist from "./Todolist.js";
import Todoinput from "./Todoinput.js";

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
  });
}

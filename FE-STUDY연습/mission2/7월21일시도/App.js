import Todoinput from "./Todoinput.js";
import Todolist from "./Todolist.js"; //.js붙이지 않으면 404에러가 나옴

export default function App({ $target }) {
  this.data = [{ text: "wow i can do it", isCompleted: false }];
  this.setState = function (newdata) {
    this.data = newdata;
    todolist.setState(this.data);
  };

  const todoinput = new Todoinput({
    $target,
    onSubmit: (inputvalue) => {
      this.setState([...this.data, { text: inputvalue, isCompleted: false }]); //이때의 this는 APP
      console.log(this.data);
    },
  });

  const todolist = new Todolist({
    $target,
    data: this.data,
    Todoremove: (LIID) => {
      const newdata = this.data.filter(function (item, index) {
        return index !== LIID * 1;
      });
      this.setState(newdata);
    },
  });
}

//d여기서 data가 업데이트되어야하는데
//this가 뭘가르키는지 정확하게 구분을 못하고있다.

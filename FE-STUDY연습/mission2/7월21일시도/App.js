import Todoinput from "./Todoinput.js";
import Todolist from "./Todolist.js"; //.js붙이지 않으면 404에러가 나옴

export default function App({ $target, data }) {
  this.data = "asdasd";

  const todoinput = new Todoinput({
    $target,
    onSubmit: (value) => {
      //왜 화살표로 했을 때만this가 성립?
      const newdata = [...data, { text: value, isCompleted: false }];
      console.log(newdata);
      console.log(this.data);
      console.log(this); //이걸 알면 다 이해가능..
    }, //data를 하나로 받으니까 계속해서 추가가안됨
    //받으면 this.data= newdata 가 되면서 계속 지속되는건데
  });

  const todolist = new Todolist({
    $target,
    data,
  });
}

//d여기서 data가 업데이트되어야하는데
//this가 뭘가르키는지 정확하게 구분을 못하고있다.

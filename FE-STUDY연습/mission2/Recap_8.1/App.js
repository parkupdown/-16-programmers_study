import Todolist from "./Todolist.js";
import Todoinput from "./Todoinput.js";
export default function App($target) {
  if (localStorage.getItem("todolist") === null) {
    this.data = [];
  }
  if (localStorage.getItem("todolist") !== null) {
    this.data = JSON.parse(localStorage.getItem("todolist"));
  }

  this.setState = function (newdata) {
    localStorage.setItem("todolist", JSON.stringify(newdata));
    this.data = JSON.parse(localStorage.getItem("todolist"));
    todolist.setState(this.data);
  };

  const todoinput = new Todoinput({
    $target,
    onSubmit: (inputvalue) => {
      const newdata = [...this.data, { text: inputvalue, isCompleted: false }];
      this.setState(newdata);
    },
  });

  const todolist = new Todolist({
    $target,
    data: this.data,
    onRemove: (LiIndex) => {
      const newdata = this.data.filter(function (item, index) {
        return index !== LiIndex * 1;
      });
      this.setState(newdata);
    },
    onInvert: (Liid) => {
      const newdata = this.data.map((item, index) => {
        if (index === Liid * 1) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return { ...item };
      });
      this.setState(newdata);
    },
  });
}

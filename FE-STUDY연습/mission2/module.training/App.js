import Todolist from "./Todolist.js";
import Input from "./Input.js";

export default function App() {
  const data = [{ text: "모르겠다있", isCompleted: false }];
  const todolist = new Todolist(data);
  const form = document.querySelector("form");
  const input = new Input(form, todolist);
}

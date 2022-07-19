export default function Input(form, todolist) {
  form.addEventListener("submit", function (event) {
    const input = document.querySelector("input");
    event.preventDefault();
    const value = input.value;
    input.value = "";
    todolist.addtodo(value);
  });
}
//언제든 바껴도 되는 변수를 넣어두자

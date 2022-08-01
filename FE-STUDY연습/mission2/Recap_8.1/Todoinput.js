export default function Todoinput({ $target, onSubmit }) {
  this.render = function () {
    $target.innerHTML = `<form><input type="text" placeholder="할일을 입력하세용"/></form>`;
  };

  this.render();

  const form = document.querySelector("form");
  const input = document.querySelector("input");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputvalue = input.value;
    onSubmit(inputvalue);
    input.value = "";
  });
}

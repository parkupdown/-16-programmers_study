export default function Input({ $target, onSubmit }) {
  const form = document.createElement("form");

  $target.appendChild(form);

  this.render = function () {
    form.innerHTML = `<input type="text" placeholder="할일을 추가해보세요!"/>`;
  };
  this.render();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.querySelector("input");
    const inputvalue = input.value;
    onSubmit(inputvalue); //변수를 미리 보내줌
    input.value = "";
  });
}

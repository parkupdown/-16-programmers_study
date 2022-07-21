export default function Todoinput({ $target, onSubmit }) {
  const form = document.createElement("form");
  $target.appendChild(form);

  form.innerHTML = `<input type="text" placeholder="할일은?"/>`;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputvalue = document.querySelector("input").value;
    onSubmit(inputvalue);
    document.querySelector("input").value = "";
  });
}
// Data 는 App에서 공통적으로 받는게 좋을듯
// App에서 데이터를 받고 그 데이터에 추가하는식? innerHTML이 rendering
//되어야가능!
//input은 그 데이터에 추가
// todolist는 받은 데이터를 렌더링 !
// todo count는 데이터의 false를 추적

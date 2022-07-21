export default function Todoinput({ $target, onSubmit }) {
  const form = document.createElement("form");
  $target.appendChild(form);
  this.render = function () {
    form.innerHTML = `<input id="todoinput" type="text" placeholder="할일을 추가해보세요"/>`;
  };

  this.render();
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = document.querySelector("input").value; //이 값을 안으로 넣으니까 되네?..
    onSubmit(value);
    document.querySelector("input").value = "";
  }); //이 안에서만 유효함 이부분은이 해
  this.render();
}
// Data 는 App에서 공통적으로 받는게 좋을듯
// App에서 데이터를 받고 그 데이터에 추가하는식? innerHTML이 rendering
//되어야가능!
//input은 그 데이터에 추가
// todolist는 받은 데이터를 렌더링 !
// todo count는 데이터의 false를 추적

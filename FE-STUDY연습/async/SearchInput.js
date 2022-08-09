export default function SearchInput({ $target, onKeyKey }) {
  const form = document.createElement("form");
  form.innerHTML = `<input placeholder="밴드명을 입력해보세요😊"></input>`;

  this.render = function () {
    $target.appendChild(form);
  };
  this.render();

  form.addEventListener("keyup", function (e) {
    e.preventDefault();
    const inputvalue = e.target.value;
    onKeyKey(inputvalue);
  });
}

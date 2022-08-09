import App from "./App.js";

const app = new App({ $target: document.querySelector("#box") });

/*const box = document.querySelector("#box");

const div1 = document.createElement("div");

box.appendChild(div1);

div1.innerHTML = `<h1>welcome to our band schedule</h1>`;

const ul = document.createElement("ul");

box.appendChild(ul);

async function list() {
  //그냥 콜백 이어주기로 보면됨
  try {
    const result = await fetch(
      "https://api.idiots.band/api/search?keyword=데드챈트"
    );
    const result2 = await result.json();
    ul.innerHTML = `${result2
      .map(function (item) {
        return `<li>${item.title}</li>`;
      })
      .join("")}`;
  } catch (e) {
    console.log(e);
  }
}
list();

const box2 = document.createElement("div");

box.appendChild(box2);

box2.innerHTML = `what!`;
//ㅇㅋㅇㅋ 이해됐다!!
*/
/*
const ul = document.createElement("ul");

box.appendChild(ul);

const result = () =>
  fetch("https://api.idiots.band/api/search?keyword=데드챈트")
    .then((data) => data.json())
    .then((newdata) => {
      ul.innerHTML = `${newdata
        .map(function (item) {
          return `<li>${item.title}</li>`;
        })
        .join("")}`;
    });
result();

const div2 = document.createElement("div");

box.appendChild(div2);

div2.innerText = "hahaha";
//이렇게 하면 hahaha후에 비동기인 fetch가 적용된다.
*/

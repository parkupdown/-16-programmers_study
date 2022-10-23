//promise 사용법

/*const promise = new Promise((resolve, reject) => {
  console.log("wow");
  resolve("yes!"); //return값
});
promise.then((res) => console.log(res));*/

//async await 사용법

async function bedongi() {
  const res = await fetch(
    "https://api.idiots.band/api/search?keyword=데드챈트"
  ); //프로미스를 반환 => 이 값을 가지고 이제 써야한다. res.then?
  console.log(res.json());
  console.log("completed");
}

try {
  bedongi();
} catch {
  new Error("오류가 발생");
}

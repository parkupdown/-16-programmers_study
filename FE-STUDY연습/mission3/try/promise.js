const promise = new Promise((resolve, reject) => {
  console.log("doing something..."); //바로 실행됨!//그렇기 때문에 만약 사용자가 버튼을 눌렀을 때 어떤 네트워크에 접근할 것이라면 이렇게 짜면 안좋다!
  setTimeout(() => reject(new Error("can't find")), 2000); //성공했을 때 resolve 실패했을 때 reject(new Error("can't find"))
});
promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

/*setTimeout(() => console.log("forth"), 3000);
console.log("mabye first ");

function printgogo(print) {//함수선언이 hoisting 되어 제일 위로 올라감 
  print();
}
console.log("mabye second");

printgogo(() => console.log("third?"));//함수의 사용이 이때 이루어지기 때문에 3번째가 된다.*/

setTimeout(() => console.log("yes i'm 비동기"), 3000); //비동기는 위치보다 조건 순서로 이루어진다. 위와 같이 2초로 맞추어 놓으면
// 동시에 console.log()가 찍힌다 그런데 위 함수를 3초로 찍으면 아래의 비동기2가 먼저찍한다.
//핵심은 비동기 함수는 미루어지고 동기함수가 다 실행된 이후에 미루어진 비동기함수가 조건에 맞추어 실행된다!
console.log("동기1");
function yes(print) {
  print();
}

console.log("동기2");

yes(() => console.log("동기3!"));

function non(print2, time) {
  setTimeout(print2, time);
}

non(() => console.log("비동기2!!"), 2000);

# -16-programmers_study
프로그래머스 [16기] JS스터디 공부

# 배운점
## Object는 객체다 !
Object는  다양한 정보(프로퍼티)를 저장 할 수 있는 그릇이라 생각하면 좋다.
```js
//object 생성방법
//1.
const obj = {}; //object literal
//2.
const obj = new Object(); // object constructor
//이때의 Object()는 생성자 함수이고 obj는 인스턴스이다.
```
## This 역시 객체이다. This는 받는 놈이 된다.
```js
const data = ["soccer","chale"]

function AA(data){
this.ball=data[0]
this.name=data[1]
this.aa=function(item){
this.ball=item
}
}
const BB = new AA(data)
console.log(BB.ball) // return "soccer"
// 이처럼 this는 객체이며 부른 BB가 된다.
```
## innerText vs innerHTML
innerText는 element의 text 값만 가져온다.
innerHTML은 element의 HTML+XML을 가져온다.
<div>"hello"<div/>했을 때 innerHTML만 div태그를 인식한다.

## forEach vs map
  for Each는 반복문을 대체하는 수단으로 배열 요소마다 한번씩 함수를 호출한다.
  그리고 return 값이 필요하지 않으며 배열의 요소마다 즉각적인 함수가 적용된다.
  
  map은 for Each에 비해 더 고차원적인 함수로서 배열 요소마다 *함수 호출한결과를 모아 새로운 배열을 반환한다.*
  그리고 return 값이 필요하다.
  
  
## throw new Error 
  위 함수는 에러의 사용자 지정이다. if문 이나 어떤 조건을 걸고 그 결과값을 throw new Error하게 되면 함수는 중단되고 경고 메세지를 보낼 수 있다.
  
## new연산자를 이용한 사용자 객체생성
  사용자 객체를 생성하는데 두 단계가 필요하다.
  1. 함수를 작성하여 객체 타입을 정의
  2. new 연산자로 객체의 인스턴스를 생성
  
  ## new 키워드 확인법
  1. new.target
  이는 사용하기 간단하지만 IE에서 지원하지 않는 기능이다.
  ```js
  if(!new.target){
  throw new Error ("new키워드와 함께 함수를 실행해주세요")
  ```
  
  2. this===window
  이는 this가 생성자 함수의 intance가 아닌 경우에는 잡아내지 못함으로 적절한 사용이 아니라고 배웠다.

  3. instance of 
  new를 붙이면 생성자 함수의 인스턴스가 생성되는 점을 이용하여 알아내는 것이다.
 ```js
  if(!(this instanceof Todolist)){
  throw new Error("new키워드와 함께 함수를 실행해주세요")
  ```
  
  ## Filter함수
  ```js
  const arr= [1,2,3,4]
 const arr2 =  arr.filter(function(item){
  return item>2});
  console.log(arr2)
  //return => [3,4]
  ```
  이런식으로 필터함수는 새로운 배열을 만들어낸다. (true)만을 반환
  
  ## 배열을 합치는 방법! [...arr]
  이 방법은 내용물을 꺼내서 다시 배열에 합치는 방식과 동일하다.
  ```js
  const arr=[1,2,3,4]
  const arr2= [5,6,7,8]
  const arrs=[...arr,arr2]
  console.log(arrs) 
  //return=> [1,2,3,4,5,6,7,8]
  ```
## 컴포넌트화 This를 잘 알고 잘 활용해라!!
  컴포넌트를 하는데 있어 가장 힘든 점은 서로 독립적인데 정보를 어떻게 주고받냐가 핵심이다
  모든 컴포넌트를 관리하는 APP에서는 공통적으로 리셋되는 데이터와 rendering되는 대상을 매개변수로 받아 관리를하였다.
  가장헷갈렸던..힘들게했던부분
  ```js
import Todoinput from "./Todoinput.js";
import Todolist from "./Todolist.js"; //.js붙이지 않으면 404에러가 나옴

export default function App({ $target }) {
  this.data = [{ text: "wow i can do it", isCompleted: false }];
  this.setState = function (newdata) {
    this.data = newdata; // 여기서 this.data가 무엇인지 정확하게 알지못했다.
  //여기서 this데이터는 공통적인 data로 보면된다.
    todolist.setState(this.data); //이미 함수 인스턴스로 생선된 todolist의 setState 함수의 매개변수 this.data는
  // App을 가르킨다. 
  };

  const todoinput = new Todoinput({
    $target,
    onSubmit: (inputvalue) => {//또한 함수를 매개변수로 넘길 때 변수를 앞선 컴포넌트에서 준 후 함수를 실행하는 것이 가능하다. 
  함수에서 오류가 나면 화살표함수를 활용하면 해결되는 경우가 있다. 이 경우가 그랬다.
      this.setState([...this.data, { text: inputvalue, isCompleted: false }]); //이때의 this는 APP
  //this.setState는 App.setState와 같다. 즉 App.setState의 함수에서 각 컴포넌트를 setState하는 함수를 집어넣어 한꺼번에 데이터를 
  //업데이트 해주는 것이다.
      console.log(this.data);
    },
  });

  const todolist = new Todolist({
    $target,
    data: this.data,
    Todoremove: (LIID) => { //함수를 이렇게 따로 받은 이유는 addeventlistener에서 this를 가르키게되면 todolist를 가리키는게아닌 form을 가르키게 됨으로
  // 함수를 변수로 넘겨주어 App의 데이터에 업데이트하는 방식을 한것이다.
      const newdata = this.data.filter(function (item, index) {
        return index !== LIID * 1;//1을곱해주면 Number형식으로 변한다.
      });
      this.setState(newdata);//여기서 this역시 App이다. App.setState는 todolist.state(newdata)를 포함하는 함수이기 때문에 가능하다.
  //대신 todolist 컴포넌트에 this.setState()에 대한 생성자 함수선언이 필요하다.
    },
  });
}
  
  ```

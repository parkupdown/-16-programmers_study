//object(객체)
const name = "sangha";
const age = 26;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
} //retun sangha 26
//이렇게 했을 때 코드가 길고 번거롭다.
//그래서 필요한게 object이다.
const obj = {
  name: "sangha",
  age: 26,
};
function print(name, age) {
  console.log(obj.name);
  console.log(obj.age);
}
print(obj);
//즉, 다양한 프로퍼티(정보)를 담은 그릇이 객체이다.

//object 생성방법
//1.
const obj = {}; //object literal
//2.
const obj = new Object(); // object constructor

//Object는 추가도 가능하다.

const obj3 = { name: "wow", age: "22" };
obj3.tt = "lalala";
console.log(obj3);
// {name:"wow",age:"22",tt:lalala}

//object를 생성할 때 함수를 이용할 수 있다.
const object1 = { condition: "good", number: 1 };
const object2 = { condition: "bad", number: 2 };
const object3 = { condition: "soso", number: 3 };
const object4 = { condition: "nice", number: 4 };
const object5 = make("ambition", 5);
function make(conditon, number) {
  return { conditon: conditon, number: number };
}
console.log(object5); // {condition:"ambtion",number:5}

//함수를 사용하여 Object(객체)를 만들 때 보통은 이렇게한다.
const object1 = { condition: "good", number: 1 };
const object2 = { condition: "bad", number: 2 };
const object3 = { condition: "soso", number: 3 };
const object4 = { condition: "nice", number: 4 };
const object5 = new Sake("good", 5);
//만약 여기서 new 를 사용하지 않으면 this는 window객체가 된다.
function Sake(condition, number) {
  //this={}
  this.condition = condition;
  this.number = number;
  //return this
}
console.log(object5); // Sake {condition:"good",number:5}
//이를 Constructor function 이라한다.

function Cat(name, age) {
  this.name = name;
  this.age = age;
}
const tabby1 = new Cat("nana", 5);
console.log(tabby1.name);

var idiots = {
  name: " idiots",
  genre: "punk rock",
  member: {
    roto: {
      memberName: " roto",
      play: function () {
        console.log(this);
      },
    },
  },
};
idiots.member.roto.play();
// {memberName:"roto", play:f}
//내 생각
//this는 호출한놈이 되는거다.
//함수안에서 this.프로퍼티 형태이면 이는 object를 생성하고
//뭔가 this로 가르켰을 땐 호출한 놈이 된다.

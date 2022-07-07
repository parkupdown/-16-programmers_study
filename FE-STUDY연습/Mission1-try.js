function Band(name) {
  this.name = name;
  this.perform = function () {
    console.log(`${this.name} 밴드가 공연을 합니다!`);
  };
  this.performHTML = function () {
    document.querySelector(
      "#stage"
    ).innerHTML = `<div>${this.name} 밴드가 공연을 합니다! </div>`;
  };
  console.log(this);
}

const band1 = new Band("cold play");

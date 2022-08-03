export default function Selcet({ $target, data, onChange }) {
  const optionbox = document.createElement("div");
  this.data = data;

  this.render = function () {
    $target.appendChild(optionbox);

    optionbox.innerHTML = `<select>
    ${this.data.map(function (item, index) {
      return `<option id=${index}>${item.unitName}</option>`;
    })}
    
    </select>`;
  };
  this.render();

  optionbox.addEventListener("change", function (event) {
    console.dir(event.target[2]); //map을활용해서 인덱스가 같으면 해당인덱스의 날씨를 가져오는걸로!
  });

  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };
}

/*fetch(
    "https://data.ex.co.kr/openapi/restinfo/restWeatherList?key=2418362643&type=json&sdate=20220802&stdHour=10"
  ).then((x) =>
    x.json().then((data) => {
      const newdata = data.list.map((item, index) => {
        item.unitName;
      });
    })
  );*/

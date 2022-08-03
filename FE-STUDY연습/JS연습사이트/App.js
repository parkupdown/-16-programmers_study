import Header from "./Header.js";
import Selcet from "./Select.js";
import Weather from "./weather.js";
export default function App({ $target }) {
  this.data = [];

  this.setState = function (newdata) {
    this.data = newdata;
    select.setState(this.data);
  };

  fetch(
    "https://data.ex.co.kr/openapi/restinfo/restWeatherList?key=2418362643&type=json&sdate=20220802&stdHour=10"
  )
    .then((x) => x.json())
    .then((data) => this.setState(data.list)); //setState가 아니라 바로 넘길 수 있어야하는데..

  const header = new Header({ $target });

  const weather = new Weather({ $target });

  const select = new Selcet({
    $target,
    data: this.data,
  });
}

import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";

export default function App({ $target }) {
  this.data = [];

  const searchinput = new SearchInput({
    $target,
    onKeyKey: (inputvalue) => {
      async function comeapi() {
        try {
          const result = await fetch(
            `https://api.idiots.band/api/search?keyword=${inputvalue}`
          );
          const resultjson = await result.json(); //promise타입이라
          //이렇게 연결시켜주어야함
          searchresult.setState(resultjson);
        } catch (e) {
          console.log(e);
        }
      }
      comeapi();
      //이때 데이터를 불러오고 그 데이터를 this.setState를 해야함
      //이때 모든게 바뀌어야해 뭐냐 이때 비동기 처리가 들어가야해
      //fetch를해야할듯
    },
  });

  const searchresult = new SearchResult({ $target, data: this.data });
}

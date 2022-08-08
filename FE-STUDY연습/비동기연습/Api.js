export default function Api({ $target, data }) {
  async function nol() {
    const result = await fetch(
      "https://api.idiots.band/api/search?keyword=데드챈트"
    );
    console.log(result.json());

    console.log("completed");
  }
  try {
    nol();
  } catch (e) {
    new Error("error");
  }
} //dks

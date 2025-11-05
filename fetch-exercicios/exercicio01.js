const pexelsKey = "ra7hCdgcTnhw1E9Xcp10YlVpPgGsdFAn1NgATxMz9h1OIKSObS4jLkqM"; //pexels API key

async function changeBg() {
  const query = ["clouds", "sky", "thunder", "sun", "rain", "snow"];
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&orientation=landscape&per_page=1`,
    { headers: { Authorization: pexelsKey } }
  );

  const data = await res.json();

  const body = document.querySelector("body");

  const img = data.photos[0].src.landscape;

  body.style.backgroundImage = `url("${img}")`

  console.log(body);
  console.log(data);
}

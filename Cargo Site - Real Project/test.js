//console.log(document.querySelector(".salam"));

function ifadenigoster() {
  let select = document.getElementById("language");
  let text = select.options[select.selectedIndex].text;
  console.log(text);
}

function reqemigoster() {
  let select = document.getElementById("language");
  let text = select.options[select.selectedIndex].text + "x";
  let ifade = "";
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "x") {
      let eded = Number(text[i - 2] + text[i - 1]);
      arr.push(eded);
    }
  }
  console.log(arr);
}

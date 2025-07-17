const font = "DP Sans Mono,cursive";
const body = document.getElementsByTagName("body").item(0);
const paras = document.getElementsByTagName("p");

body.style.fontFamily = font;
for (let i = 0; i < paras.length; i++) {
    paras.item(i).style.fontFamily = font;
}

console.log("Set font to: " + body.style.fontFamily);
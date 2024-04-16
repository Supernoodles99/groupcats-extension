for (let i = 0; i < 20; i++) {
let x = Math.random() * 101;
let y = Math.random() * 101;
let st = "left: " + x + "%; top: " + y + "%; position: fixed; transform: translate(-50%, -50%); z-index: 9999999999; pointer-events: none;"
const groupcat = document.createElement("img");
groupcat.setAttribute("src", "https://app.meower.org/assets/meowy-93c25f40.svg");
groupcat.setAttribute("style", st);
document.body.appendChild(groupcat);
}
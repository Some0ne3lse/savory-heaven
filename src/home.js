import logo from "./savory_heaven.png";

const homeDiv = document.createElement("p");

const nameImageAndSlogan = document.createElement("div");
nameImageAndSlogan.classList.add("header-content");
homeDiv.appendChild(nameImageAndSlogan);

const nameAndSlogan = document.createElement("div");
nameAndSlogan.classList.add("name-and-slogan");
nameImageAndSlogan.appendChild(nameAndSlogan);

const name = document.createElement("div");
name.classList.add("name");
nameAndSlogan.appendChild(name);

const mainNameFirst = document.createElement("h1");
mainNameFirst.classList.add("main-name");
mainNameFirst.textContent = "Savory";
name.appendChild(mainNameFirst);

const mainNameSecond = document.createElement("h1");
mainNameSecond.classList.add("main-name");
mainNameSecond.textContent = "Heaven";
name.appendChild(mainNameSecond);

const slogan = document.createElement("p");
slogan.classList.add("slogan");
slogan.textContent = "One spoon closer to salvation";
nameAndSlogan.appendChild(slogan);

const image = document.createElement("img");
image.src = logo;
nameImageAndSlogan.appendChild(image);

export default homeDiv;

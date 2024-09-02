import "./styles.css";
import "./reset.css";
import homeDiv from "./home";
import menuDiv from "./menu";
import aboutDiv from "./about";

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(homeDiv);

const homeButton = document.querySelector("#home");
homeButton.onclick = function () {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  contentDiv.appendChild(homeDiv);
};

const menuButton = document.querySelector("#menu");
menuButton.onclick = function () {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  contentDiv.appendChild(menuDiv);
};

const aboutButton = document.querySelector("#about");
aboutButton.onclick = function () {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  contentDiv.appendChild(aboutDiv);
};

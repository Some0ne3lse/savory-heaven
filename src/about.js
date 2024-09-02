import restaurantImage from "./restaurant.png";

const aboutDiv = document.createElement("div");
aboutDiv.classList.add("about-div");

const aboutContainer = document.createElement("div");
aboutContainer.classList.add("about-container");
aboutDiv.appendChild(aboutContainer);

const aboutImage = document.createElement("img");
aboutImage.classList.add("restaurant-image");
aboutImage.src = restaurantImage;
aboutContainer.appendChild(aboutImage);

const aboutText = document.createElement("div");
aboutText.classList.add("about-text");
aboutContainer.appendChild(aboutText);

const aboutHeader = document.createElement("h2");
aboutHeader.classList.add("about-header");
aboutHeader.textContent = "About Us";
aboutText.appendChild(aboutHeader);

const aboutParagraph = document.createElement("p");
aboutParagraph.classList.add("about-paragraph");
aboutParagraph.textContent =
  "Welcome to Savory Heaven, your go-to destination for an extraordinary dining experience. Our chefs blend passion and creativity to craft dishes that tantalize your taste buds with a variety of global flavors. At Savory Heaven, we believe food is an art form that brings people together. Our menu offers a mix of comforting classics and innovative dishes, all prepared with the finest ingredients. Join us in our cozy, contemporary space, where warm lighting and elegant decor create the perfect setting for any occasion. We’re dedicated to making every visit special. Thank you for choosing Savory Heaven!";
aboutText.appendChild(aboutParagraph);
export default aboutDiv;

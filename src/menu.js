import crimsonBerryBliss from "./drinks-images/crimson_berry_bliss.png";

const menuDiv = document.createElement("div");
const drinksMenu = document.createElement("div");
drinksMenu.classList.add("drinks-menu");
menuDiv.appendChild(drinksMenu);

const myBeverages = [];
const myDishes = [];

class Beverage {
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}

class Dish {
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}

const addBeverage = (name, description, price, image) => {
  myBeverages.push(new Beverage(name, description, price, image));
};

const addDish = (name, description, price, image) => {
  myDishes.push(new Dish(name, description, price, image));
};

addBeverage(
  "Crimson Berry Bliss",
  "A refreshing blend of wild cranberries, raspberries, and a hint of mint. This sparkling beverage is both sweet and tart, perfect for a warm day or as a light, fruity complement to any meal.",
  4.5,
  crimsonBerryBliss
);

const displayBeverages = (menu, divToAdd) => {
  if (menu.length !== 0) {
    for (const beverage of menu) {
      const theBeverage = document.createElement("div");
      theBeverage.classList.add("the-beverage");
      divToAdd.appendChild(theBeverage);

      const name = document.createElement("h3");
      name.classList.add("beverage-name");
      name.textContent = beverage.name;
      theBeverage.appendChild(name);

      const description = document.createElement("p");
      description.classList.add("beverage-description");
      description.textContent = beverage.description;
      theBeverage.appendChild(description);

      const price = document.createElement("p");
      price.classList.add("beverage-price");
      price.textContent = `$${beverage.price.toFixed(2)}`;
      theBeverage.appendChild(price);

      const image = document.createElement("img");
      image.classList.add("beverage-image");
      image.src = beverage.image;
      theBeverage.appendChild(image);
    }
  }
};

displayBeverages(myBeverages, drinksMenu);

export default menuDiv;

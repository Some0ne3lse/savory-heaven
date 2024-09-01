import crimsonBerryBliss from "./drinks-images/crimson_berry_bliss.png";
import goldenTumericLatte from "./drinks-images/golden_tumeric_latte.png";
import citrusGreenTeaFizz from "./drinks-images/citrus_green_tea-fizz.png";

import lambChops from "./food-images/lamb_chops.png";
import shrimpTacos from "./food-images/shrimp_tacos.png";
import beefBroccoliStirFry from "./food-images/beef_and_broccoli_stir-fry.png";
import stuffedBellPeppers from "./food-images/stuffed_bell_peppers.png";
import chickenSkewers from "./food-images/chicken_skewers.png";

const menuDiv = document.createElement("div");
menuDiv.classList.add("entire-menu");

const foodMenu = document.createElement("div");
foodMenu.classList.add("food-menu");
menuDiv.appendChild(foodMenu);

const foodTitle = document.createElement("h2");
foodTitle.classList.add("food-title");
foodTitle.textContent = "Dishes";
foodMenu.appendChild(foodTitle);

const drinksMenu = document.createElement("div");
drinksMenu.classList.add("drinks-menu");
menuDiv.appendChild(drinksMenu);

const drinksTitle = document.createElement("h2");
drinksTitle.classList.add("drinks-title");
drinksTitle.textContent = "Drinks";
drinksMenu.appendChild(drinksTitle);

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

addBeverage(
  "Crimson Berry Bliss",
  "A refreshing blend of wild cranberries, raspberries, and a hint of mint. This sparkling beverage is both sweet and tart, perfect for a warm day or as a light, fruity complement to any meal.",
  4.5,
  crimsonBerryBliss
);

addBeverage(
  "Golden Turmeric Latte",
  "A warm and comforting beverage made with steamed almond milk, organic turmeric, a dash of cinnamon, and a drizzle of honey. This latte offers a perfect blend of spice and sweetness, with anti-inflammatory benefits.",
  5.75,
  goldenTumericLatte
);

addBeverage(
  "Citrus Green Tea Fizz",
  "A revitalizing mix of chilled green tea, fresh lemon and lime juice, and a touch of honey, all topped with a splash of sparkling water. This beverage is both energizing and refreshing.",
  3.95,
  citrusGreenTeaFizz
);

const addDish = (name, description, price, image) => {
  myDishes.push(new Dish(name, description, price, image));
};

addDish(
  "Mediterranean Grilled Lamb Chops",
  "Juicy lamb chops marinated in olive oil, garlic, rosemary, and lemon juice, grilled to perfection. Served with a side of roasted potatoes, cherry tomatoes, and a drizzle of tzatziki sauce.",
  22,
  lambChops
);

addDish(
  "Spicy Shrimp Tacos",
  "Soft corn tortillas filled with spicy grilled shrimp, shredded cabbage, avocado slices, and a tangy lime crema. Served with a side of fresh pico de gallo.",
  13.5,
  shrimpTacos
);

addDish(
  "Beef and Broccoli Stir-Fry",
  "Tender slices of beef stir-fried with fresh broccoli in a savory soy-garlic sauce. Served over a bed of steamed jasmine rice and garnished with sesame seeds and green onions.",
  15,
  beefBroccoliStirFry
);

addDish(
  "Stuffed Bell Peppers",
  "Bell peppers stuffed with a savory mixture of ground beef, rice, tomatoes, and herbs, baked until tender and topped with melted cheese. Served with a side of mixed greens.",
  12.75,
  stuffedBellPeppers
);

addDish(
  "Herb-Marinated Grilled Chicken Skewers",
  "Skewers of tender chicken pieces marinated in a blend of herbs, garlic, and lemon, grilled to perfection. Served with a side of couscous salad and a garlic yogurt dip.",
  14.25,
  chickenSkewers
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
      image.alt = `Image of ${beverage.name}`;
      theBeverage.appendChild(image);
    }
  }
};

const displayDishes = (menu, divToAdd) => {
  if (menu.length !== 0) {
    for (const dish of menu) {
      const theDish = document.createElement("div");
      theDish.classList.add("the-dish");
      divToAdd.appendChild(theDish);

      const name = document.createElement("h3");
      name.classList.add("dish-name");
      name.textContent = dish.name;
      theDish.appendChild(name);

      const description = document.createElement("p");
      description.classList.add("dish-description");
      description.textContent = dish.description;
      theDish.appendChild(description);

      const price = document.createElement("p");
      price.classList.add("dish-price");
      price.textContent = `$${dish.price.toFixed(2)}`;
      theDish.appendChild(price);

      const image = document.createElement("img");
      image.classList.add("dish-image");
      image.src = dish.image;
      image.alt = `Image of ${dish.name}`;
      theDish.appendChild(image);
    }
  }
};

displayDishes(myDishes, foodMenu);

displayBeverages(myBeverages, drinksMenu);

export default menuDiv;

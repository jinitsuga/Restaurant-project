import { content } from "./homeContent";
import Mocha from "./media/mocha.jpg";
import cafeLatte from "./media/latte.jpg";
import Smoothie from "./media/smoothie.jpg";
import OJ from "./media/OJ.jpg";
import Pancakes from "./media/pancakes.jpg";
import Eggs from "./media/eggs.jpg";
import Muffins from "./media/muffins.jpg";
import Toast from "./media/frenchToast.jpg";

export { showMenuPage, hideMenuContent, menuContent, mochaPic, menuLoad };
// -- item pictures --
const mochaPic = Mocha;

// Menu item creator class
class MenuItem {
  constructor(name, price, description, img) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.img = img;
  }
  get taxPrice() {
    return this.calcTax();
  }
  calcTax() {
    return price * 0.22;
  }
  writeDescription() {
    let itemBox = document.createElement("div");
    itemBox.classList.add("item-box");
    let itemName = document.createElement("h3");
    itemName.classList.add("item-name");
    let itemPrice = document.createElement("p");
    itemPrice.classList.add("item-price");
    let itemText = document.createElement("p");
    itemText.classList.add("item-text");

    let itemPic = document.createElement("img");
    itemPic.src = this.img;
    itemPic.classList.add("menu-images");

    itemBox.appendChild(itemName);
    itemBox.appendChild(itemPrice);
    itemBox.appendChild(itemText);
    itemBox.appendChild(itemPic);
    menuContent.appendChild(itemBox);

    itemName.innerText = this.name;
    itemPrice.innerText = "$" + this.price;
    itemText.innerText = this.description;
  }
}

const menuContent = document.createElement("div");

let menuLoad = 0;

const showMenuPage = function () {
  menuContent.classList.add("menu");

  menuLoad++;

  // --Title--
  // const menuTitle = document.createElement("h2");
  // menuTitle.innerText = "MENU";
  // menuTitle.classList.add("menu-title");
  // menuContent.appendChild(menuTitle);

  // --DRINKS--
  // ITEMS DE MENU EN ARRAY
  const drinksTitle = document.createElement("h3");
  drinksTitle.innerText = "Liquids";
  drinksTitle.classList.add("menu-subtitles");
  menuContent.appendChild(drinksTitle);

  const Mocha = new MenuItem(
    "Mocha",
    "4",
    "Our chocolate-flavored delight of a coffee is waiting for you. \n Feel free to add cream on top and experience heaven.",
    mochaPic
  );

  const Latte = new MenuItem(
    "Latte",
    "3.5",
    "Enjoy the carefully crafted balance of milk and coffee \n with cream or chocolate to instantly make your day better.",
    cafeLatte
  );
  const OrangeJ = new MenuItem(
    "Oh Jay",
    "2.5",
    "Squeezed from the freshest oranges acquired in the market only a couple blocks away. \n We bring any other fresh fruit that they have, so feel free to ask about the options for the day! ",
    OJ
  );
  const fruitSmoothie = new MenuItem(
    "Fresh Fruit Smoothie",
    "4",
    "Made fresh from what's available at the market on the day. \n Doesn't get any tastier than this.",
    Smoothie
  );
  const liquids = [Mocha, Latte, fruitSmoothie, OrangeJ];
  liquids.forEach((liquid) => liquid.writeDescription());

  // -- SOLIDS --
  const solidsTitle = document.createElement("h3");
  solidsTitle.innerText = "Solids";
  solidsTitle.classList.add("menu-subtitles");
  menuContent.appendChild(solidsTitle);

  const pancakes = new MenuItem(
    "Honey and fruit Pancakes",
    "6",
    "Start the day off the right way with our delicious pancakes. \n The aroma alone will get you in the best of moods.",
    Pancakes
  );
  const eggs = new MenuItem(
    "Scrambled Eggs",
    "5",
    "Organic eggs with seasoning, tomato, cheese and bacon. YES!",
    Eggs
  );
  const muffins = new MenuItem(
    "Chocolate Muffins",
    "3",
    "2 units. The house special, and our top recommendation if you're on the sweeter side of life!",
    Muffins
  );
  const toast = new MenuItem(
    "French Toast (not baguette)",
    "4",
    "4 slices of this simple yet effective french dish, with a variety of toppings to choose from.",
    Toast
  );
  const solids = [pancakes, eggs, muffins, toast];
  solids.forEach((solid) => solid.writeDescription());

  content.appendChild(menuContent);
  menuContent.classList.add("hidden");

  // -- Footer --
  const menuFooter = document.createElement("footer");
  menuFooter.classList.add("menu-footer");

  const menuFooterText = document.createElement("p");
  menuFooterText.innerText = "Copyright © 2021 Agu Ibanez";

  const menuFooterLink = document.createElement("a");
  menuFooterLink.href = "https://github.com/jinitsuga";

  const menuGhLink = document.createElement("span");
  menuGhLink.innerText = "GitHub";
  menuFooterLink.appendChild(menuGhLink);

  menuFooter.appendChild(menuFooterText);
  menuFooter.appendChild(menuFooterLink);
  menuContent.appendChild(menuFooter);
};
const hideMenuContent = function () {
  menuContent.classList.add("hidden");
  menuContent.classList.remove("menu");
};

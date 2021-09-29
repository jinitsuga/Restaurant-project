import "./style.css";

import {
  showContentPage,
  hideMainContent,
  homeContent,
  content,
} from "./homeContent.js";

import {
  showMenuPage,
  hideMenuContent,
  menuContent,
  menuLoad,
} from "./menu.js";

import {
  showContactPage,
  hideContactPage,
  contactContent,
  contactLoad,
} from "./contact.js";

showContentPage();

// --Main home button--
const mainBtn = document.querySelector("#test-button");
mainBtn.classList.add("nav-button");
mainBtn.disabled = true;

mainBtn.addEventListener("click", function () {
  hideMenuContent();
  hideContactPage();
  mainBtn.disabled = true;
  menuBtn.disabled = false;
  contactBtn.disabled = false;
  if (homeContent.classList.contains("hidden")) {
    homeContent.classList.remove("hidden");
    homeContent.classList.add("home-content");
    return;
  }
  showContentPage();
});

// --menu button--
const menuBtn = document.querySelector("#menu-button");
menuBtn.classList.add("nav-button");
menuBtn.addEventListener("click", function () {
  hideMainContent();
  hideContactPage();
  menuBtn.disabled = true;
  mainBtn.disabled = false;
  contactBtn.disabled = false;
  if (menuLoad > 0) {
    menuContent.classList.remove("hidden");
    menuContent.classList.add("menu");
    return;
  }
  showMenuPage();
});

// -- Contact button --
const contactBtn = document.querySelector("#contact-button");
contactBtn.classList.add("nav-button");
contactBtn.addEventListener("click", function () {
  hideMainContent();
  hideMenuContent();
  contactBtn.disabled = true;
  mainBtn.disabled = false;
  menuBtn.disabled = false;
  if (contactLoad > 0) {
    contactContent.classList.remove("hidden");
    contactContent.classList.add("contact");
    return;
  }
  showContactPage();
  footer.classList.add("footer-again");
});

const navButtons = Array.from(document.getElementsByTagName("button"));
navButtons.forEach((btn) =>
  btn.addEventListener("click", function () {
    navButtons.forEach((btn) => {
      btn.classList.remove("nav-button-disabled");
    });
    if (btn.disabled) {
      btn.classList.add("nav-button-disabled");
    }
  })
);
// -- Footer --

// const footer = document.createElement("footer");

// const footerText = document.createElement("p");
// footerText.innerText = "Copyright © 2021 Agu Ibanez";

// const footerLink = document.createElement("a");
// footerLink.href = "https://github.com/jinitsuga";

// const ghLink = document.createElement("span");
// ghLink.innerText = "GitHub";
// footerLink.appendChild(ghLink);

// footer.appendChild(footerText);
// footer.appendChild(footerLink);

// content.appendChild(footer);

export { showContentPage, hideMainContent, homeContent, content };

const content = document.querySelector("#content");
content.classList.add("content");
const homeContent = document.createElement("div");
content.appendChild(homeContent);
homeContent.classList.add("home-content");

const showContentPage = function () {
  //  -- HOME content --

  const title = document.createElement("h1");
  title.classList.add("home-title");
  title.textContent = "Panda's Brunch";

  const introText = document.createElement("p");
  introText.classList.add("intro-text");
  introText.innerText =
    "Panda's brings you the best combination of breakfast and lunch, \n with the best coffee in town paired with some of the highest quality meals \n fresh out of our kitchen. \n Not an early morning eater? This is the spot for you.";

  // schedule

  const schedule = document.createElement("section");

  const schedTitle = document.createElement("h2");
  schedTitle.textContent = "SCHEDULE";

  const schedText = document.createElement("span");
  schedText.classList.add("sched-text");
  (schedText.innerText =
    "Sundays: 10:30 AM - 4 PM. \n Mondays closed \n Tuesdays: 10:00 AM - 5:00 PM \n Wednesdays: 10:00 AM - 5:00 PM \n Thursdays: 10:00 AM - 5:00 PM \n Fridays: 10:00 AM - 5:00 PM \n Saturdays: 10:30 AM - 4 PM"),
    schedule.appendChild(schedTitle);
  schedule.appendChild(schedText);
  schedTitle.classList.add("schedule-title");
  schedule.classList.add("schedule");

  homeContent.appendChild(title);
  homeContent.appendChild(introText);
  homeContent.appendChild(schedule);

  // location
  const location = document.createElement("div");
  location.classList.add("location");

  const locationTitle = document.createElement("h2");
  locationTitle.innerText = "Location";

  const locationText = document.createElement("span");
  locationText.innerText =
    "Radiant secret shop, 5 trees from Roshan pit. \n Buy talisman of evasion to gain access.";

  location.appendChild(locationTitle);
  location.appendChild(locationText);
  homeContent.appendChild(location);

  const homeFooter = document.createElement("footer");

  const footerText = document.createElement("p");
  footerText.innerText = "Copyright © 2021 Agu Ibanez";

  const footerLink = document.createElement("a");
  footerLink.href = "https://github.com/jinitsuga";

  const ghLink = document.createElement("span");
  ghLink.innerText = "GitHub";
  footerLink.appendChild(ghLink);

  homeFooter.appendChild(footerText);
  homeFooter.appendChild(footerLink);
  homeContent.appendChild(homeFooter);
};
const hideMainContent = function () {
  homeContent.classList.remove("home-content");
  homeContent.classList.add("hidden");
};

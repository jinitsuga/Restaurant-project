import { content } from "./homeContent";

export { showContactPage, hideContactPage, contactContent, contactLoad };

const contactContent = document.createElement("div");

let contactLoad = 0;

const showContactPage = function () {
  contactContent.classList.add("contact");
  contactLoad++;

  // --  Title --
  const contactTitle = document.createElement("h2");
  contactTitle.classList.add("contact-title");
  contactTitle.innerText = "Contact us!";
  contactContent.appendChild(contactTitle);

  const contactText = document.createElement("p");
  contactText.innerText =
    "We draw strength and creativity from hearing feedback and opinions from our clients. \n Pay us a visit, or find us at: ";
  contactContent.appendChild(contactText);

  // -- Contact info --

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  contactContent.appendChild(contactInfo);

  const email = document.createElement("span");
  email.innerText = "📧  hello@pandasbrunch.com";
  contactInfo.appendChild(email);

  const phone = document.createElement("span");
  phone.innerText = " 📞  +420 32269";
  contactInfo.appendChild(phone);
  contactInfo.classList.add("contact-info");

  // -- Footer --

  const contactFooter = document.createElement("footer");
  contactFooter.classList.add("contact-footer");

  const contactFooterText = document.createElement("p");
  contactFooterText.innerText = "Copyright © 2021 Agu Ibanez";

  const contactFooterLink = document.createElement("a");
  contactFooterLink.href = "https://github.com/jinitsuga";

  const contactGhLink = document.createElement("span");
  contactGhLink.innerText = "GitHub";
  contactFooterLink.appendChild(contactGhLink);

  contactFooter.appendChild(contactFooterText);
  contactFooter.appendChild(contactFooterLink);
  contactContent.appendChild(contactFooter);

  content.appendChild(contactContent);
};
const hideContactPage = function () {
  contactContent.classList.remove("contact");
  contactContent.classList.add("hidden");
};

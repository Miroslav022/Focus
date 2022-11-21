// NAVIGATION MENU
let navLink = ["Home", "About us", "Projects", "Author", "Sign Up"];
let links = ["#home", "#wwa", "#project-section", "author.html", "signUp.html"];
let navBar = document.querySelector(".navBar");
let navMenu;
navMenu = "<ul>";
for (let nav in navLink) {
  navMenu += `<li><a href="${links[nav]}">${navLink[nav]}</a></li>`;
}
navMenu += `<a href="" class="btn">Get in touch</a></ul>`;
navBar.innerHTML = navMenu;

//Hamburger Menu
const sideMenu = document.querySelector(".side-menu");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    sideMenu.classList.toggle("none");
    console.log(menuOpen);
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    console.log(menuOpen);
    sideMenu.classList.toggle("none");
  }
});

//TESTIMONIAL

//INFORMATION
const clientName = ["John", "Marko", "Marty", "Mirko"];
const contentTestimonial = [
  `"Always reliable and fast, I can always count on you guys to get
requests done. Thank you!"`,
  `"Always reliable and fast, I can always count on you guys to get
requests done. Thank you!"`,
  `"Always reliable and fast, I can always count on you guys to get
requests done. Thank you!"`,
  `"Always reliable and fast, I can always count on you guys to get
requests done. Thank you!"`,
];
const imgClient = ["avatar1.png", "avatar2.png", "avatar3.png", "avatar4.png"];
const clientBusiness = [
  "Logistician in the Belgrade, Serbia",
  "Rent a car in Berlin, Germany",
  "Training center in New York, USA",
  "Training center in New York, USA",
];

//ELEMENTS OF TESTIMONAIL
const testimonialCt = document.querySelector(".testimonial-container");
const next = document.querySelector("#next");
const back = document.querySelector("#back");
let testimonial = document.querySelector("#testimonial");
let card = "";

function loadTestimonial() {
  for (let el in clientName) {
    let randomNum = Math.floor(Math.random() * imgClient.length);
    card = `<div class='card'>
                  <div class="card-imgName">
                      <img src="assets/img/${imgClient[randomNum]}" alt="avatar1" />
                      <div class="username">
                      <h2>${clientName[el]}</h2>
                      <p class="userBusiness">${clientBusiness[el]}</p>
                      </div>
                  </div>
                  <div class="content-testimonial">
                      <p>
                          ${contentTestimonial[el]}
                      </p>
                  </div>
              </div>`;
    testimonialCt.innerHTML += card;
  }
}

loadTestimonial();

//Card WIDTH
let widthItem = document.querySelector(".card").offsetWidth;

//SLIDER
next.addEventListener("click", (e) => {
  e.preventDefault();

  testimonial.scrollLeft += widthItem;
});

back.addEventListener("click", (e) => {
  e.preventDefault();
  testimonial.scrollLeft -= widthItem;
});

//Open popUp
const addBtn = document.querySelector("#t-btn");
const popUpTestimonial = document.querySelector(".popUp-testimonial");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popUpTestimonial.classList.add("popUpOpen");
});

//Close popUp
const closebtn = document.querySelector("#close-modalbtn");
closebtn.addEventListener("click", (e) => {
  popUpTestimonial.classList.remove("popUpOpen");
});

//add Testimonial
const addTestimonial = document.querySelector(".btn-t");
const nameField = document.querySelector("#name");
const positionField = document.querySelector("#business");
const messageField = document.querySelector("#message");

addTestimonial.addEventListener("click", (e) => {
  e.preventDefault();

  clientName.push(nameField.value);
  clientBusiness.push(positionField.value);
  contentTestimonial.push(messageField.value);
  testimonialCt.innerHTML = "";
  loadTestimonial();
  nameField.value = "";
  positionField.value = "";
  messageField.value = "";
  popUpTestimonial.classList.remove("popUpOpen");
});

//Project
const projectBtns = document.querySelectorAll(".proj-btn");
const singleProject = document.querySelectorAll(".single-project");

projectBtns.forEach((e) => {
  e.addEventListener("click", (elem) => {
    let btnName = elem.target.textContent;
    btnName = btnName.toLowerCase();
    singleProject.forEach((e) => {
      e.style.display = "none";
      let nameProject = e.getAttribute("data-category");
      nameProject = nameProject.toLowerCase();
      if (btnName === nameProject) {
        e.style.display = "block";
      } else if (btnName === "all") {
        e.style.display = "block";
      }
    });
    console.log(btnName);
  });
});

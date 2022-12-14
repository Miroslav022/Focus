function loadNav() {
  let navLink = ["Home", "About us", "Projects", "Author"];
  let links = ["index.html", "#wwa", "#project-section", "author.html"];
  let navBar = document.querySelector(".navBar");
  let navMenu;
  navMenu = "<ul>";
  for (let nav in navLink) {
    navMenu += `<li><a href="${links[nav]}">${navLink[nav]}</a></li>`;
  }
  navMenu += `<a href="getintouch.html" class="btn">Get in touch</a></ul>`;
  navBar.innerHTML = navMenu;

  //Hamburger Menu
  const sideMenu = document.querySelector(".side-menu");
  const menuBtn = document.querySelector(".menu-btn");
  let menuOpen = false;

  let sidemenuList;
  sidemenuList = "<ul>";
  for (let nav in navLink) {
    sidemenuList += `<li><a href="${links[nav]}">${navLink[nav]}</a></li>`;
  }
  sidemenuList += `<li><a href="getintouch.html" class="gtcBtn">Get in touch</a></li>`;
  sideMenu.innerHTML = sidemenuList;

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
}

//loadNavBar
loadNav();
let indexBtn = document.querySelector(".navBar ul li a[href='index.html']");
indexBtn.setAttribute("href", "#home");

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

// Benefits
const allbenefit = document.querySelector(".allBenefit");
let benefitHeading = ["Be on the top", "Beauty design", "Thought"];
let benefitDesc = [
  `Our SEO strategy will push your website on the top and it's gonna be more accessible to people`,
  `Developing stunning one-of-a-kind digital design that catches people’s eye and brings your brand to life online.`,
  `As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.`,
];

for (let x in benefitHeading) {
  allbenefit.innerHTML += `<div class="benefit">
                            <div class="benefit-name">
                              <img
                                src="assets/img/internet1.png"
                                alt="Benefit-internet-logo"
                              />
                              <h3 class="benefit-heading-name">${benefitHeading[x]}</h3>
                            </div>
                            <p class="benefit-p">
                              ${benefitDesc[x]}
                            </p>
                          </div>`;
}

//wwd
let wwdHeading = ["web design", "Branding", "Seo"];
let wwdNum = ["01", "02", "03"];
let wwdIcon = ["item1.png", "brandingItem.png", "seoitem.png"];
let wwdContent = [
  `Making beautiful and functional website for your business,
    also we provide upgrade and administrating your website`,
  `Delivering effective digital strategies & eye-catching online
    marketing campaigns that earn attention, spark emotion &
    increase conversions.`,
  `We do offer result driven SEO services. We can rank your
    Keyword Local-international Market`,
];
let wwdTag1 = [
  "WEBSITE DESIGN",
  "PRODUCT DESIGN",
  "SEARCH ENGINE OPTIMISATION",
];
let wwdTag2 = ["DEVELOPMENT", "PRODUCT BRANDING", "BE ON THE TOP"];
let wwdTag3 = ["HOSTING", "MARKETING", "SEARCHING"];
const wwd = document.querySelector(".wwd-container");

for (let i in wwdHeading) {
  wwd.innerHTML += `<div class="wwd-item">
      <div class="item-heading">
        <div class="item-num">
          <p class="num">${wwdNum[i]}</p>
          <div class="item-line"></div>
        </div>
        <div class="item-hd">
          <h3 class="item-h3">${wwdHeading[i]}</h3>
        </div>
      </div>
      <div class="item-body">
        <div class="item-img">
          <img src="assets/img/${wwdIcon[i]}" alt="${wwdHeading[i]}Icon" />
        </div>
        <div class="item-content">
          <p class="item-p">
           ${wwdContent[i]}
          </p>
          <div class="item-tags">
            <p class="tag">${wwdTag1[i]}</p>
            <p class="tag tag-blue">${wwdTag2[i]}</p>
            <p class="tag">${wwdTag3[i]}</p>
          </div>
        </div>
      </div>
    </div>`;
}

//Project
const projBtnsCt = document.querySelector(".proj-btns");
let btnsName = ["All", "WebSite", "Branding", "Design"];
for (let i in btnsName) {
  projBtnsCt.innerHTML += `<a href="#" class="btn proj-btn">${btnsName[i]}</a>`;
}
const projectBtns = document.querySelectorAll(".proj-btn");

const projectContainer = document.querySelector(".proj-content");
const listProjects = [
  "proj1.png",
  "test.jpg",
  "musicevent.webp",
  "music-event-poster-template_52683-41484.webp",
  "proj5.png",
  "proj6.png",
];
const dataCategoryProj = [
  "website",
  "branding",
  "design",
  "design",
  "branding",
  "website",
];
for (let e in listProjects) {
  projectContainer.innerHTML += ` 
                        <div class="single-project" data-category="${dataCategoryProj[e]}">
                        <img src="assets/img/${listProjects[e]}" alt="" />
                        </div>`;
}

const singleProject = document.querySelectorAll(".single-project");
projectBtns.forEach((e) => {
  e.addEventListener("click", (elem) => {
    elem.preventDefault();
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
  });
});

//Process
const processCt = document.querySelector(".process-content");
let processNum = ["1", "2", "3"];
let procesImg = ["meeting.png", "illustration.png", "publish.png"];
let procesHeading = ["Meeting", "Design/Develop", "Publish on internet"];
let procesContent = [
  `We trying understand your problem and find best solution for that.`,
  `We Design your website and after that comes coding.`,
  `After all configuration, finally your site is ready for WWW`,
];

for (let i in procesImg) {
  processCt.innerHTML += `<div class="process">
      <span class="num-proj">${processNum[i]}</span>
      <img src="assets/img/${procesImg[i]}" alt="${procesHeading[i]}Icon" />
      <h3>${procesHeading[i]}</h3>
      <p>
      ${procesContent[i]}
      </p>
    </div>`;
}

//COUNTDOWN
const counterTag = document.querySelector(".counter-element");
let deadline = new Date("Dec 31, 2022 23:59:59").getTime();
let interval = setInterval(function () {
  let now = new Date().getTime();
  let distance = deadline - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  counterTag.innerHTML = `<p class="timeFormat">${days} <span class="format">Days</span></p>:<p class="timeFormat">${
    hours < 10 ? "0" + hours : hours
  } <span class="format">hours</span></p>:<p class="timeFormat">${
    minutes < 10 ? "0" + minutes : minutes
  } <span class="format">minutes</span></p>:<p class="timeFormat">${
    seconds < 10 ? "0" + seconds : seconds
  } <span class="format">seconds</span></p>`;

  if (distance < 0) {
    clearInterval(interval);
    counterTag.innerHTML = `Concourse is over`;
  }
}, 1000);

//MODAL JQUERY


  $(".backToTop a").click(function () {
    $.scrollTo(0, "slow");
    return false;
  });
});

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
let wLoaction = window.location.pathname;
if (wLoaction.includes("Focus")) {
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
  const imgClient = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
  ];
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
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
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
  $(document).ready(function () {
    $(".popupJoin").hide();
    $("#joinus").click(function (e) {
      e.preventDefault();
      $(".popupJoin").show();
    });
    $("#closeModal").click(function (e) {
      e.preventDefault();
      $(".popupJoin").hide();
    });
    let fullname = /^[A-Z][a-z]{2,15}$/;
    let mailReg = /^[A-z0-9-\.]{3,30}@[a-z]{2,8}\.(com|rs)$/;
    $("#joinForm :input").blur(function () {
      if ($(this).val().length == 0) {
        $(this).addClass("errorInput");
        $(this).next().text("Please fill up empty field");
      } else {
        $(this).removeClass("errorInput");
        $(this).next().text(``);
      }
    });

    $("#sub").click(function (e) {
      e.preventDefault();

      if (!fullname.test($("#FullName").val())) {
        $("#FullName").next().text("Incorect name, example:(Miroslav Jandric)");
        $("#FullName").addClass("errorInput");
      } else {
        $("#FullName").next().text(``);
        $("#FullName").removeClass("errorInput");
      }
      if (!mailReg.test($("#mail").val())) {
        $("#mail").next().text(`Email address must end with 'com/rs'`);
        $("#mail").addClass("errorInput");
      } else {
        $("#mail").next().text(``);
        $("#mail").removeClass("errorInput");
      }
      if ($("#mess").val() == "") {
        $("#mess").next().text(`Please enter some message`);
        $("#mess").addClass("errorInput");
      } else {
        $("#mess").next().text(``);
        $("#mess").removeClass("errorInput");
      }

      for (let i = 0; i < $(".errorJoin").length; i++) {
        if ($(".errorJoin").text() != "") {
          $("#successfulJoin").html("");
          $("#successfulJoin").removeClass("scsJoin");
          break;
        } else {
          $("#successfulJoin").addClass("scsJoin");

          $("#successfulJoin").html("Successful");
        }
      }
    });

   
  });
} else if (wLoaction.includes("getintouch.html")) {
  //GET IN TOUCH

  let day = document.querySelector("#day");
  let month = document.querySelector("#month");
  let year = document.querySelector("#year");
  let datum = new Date();

  //regex
  let names = /^[A-Z][a-z]{2,15}$/;
  let mailRegex = /^[A-z0-9-\.]{3,30}@[a-z]{2,8}\.(com|rs)$/;
  // let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  // Dinamicki ispisivanje podataka da DDL
  for (let x = 1; x <= 31; x++) {
    day.innerHTML += `<option value="day${x}">${x}</option>`;
  }
  for (let x = 1; x <= 12; x++) {
    month.innerHTML += `<option value="month${x}">${x}</option>`;
  }
  for (let x = 1920; x <= datum.getFullYear(); x++) {
    year.innerHTML += `<option value="year${x}">${x}</option>`;
  }

  // form validation
  const fname = document.querySelector("#fname");
  const lname = document.querySelector("#lname");
  const mail = document.querySelector("#mail");
  const radiobtn = document.getElementsByName("tb");
  const checkBox = document.getElementsByName("cb");
  const btnSignUp = document.querySelector(".signUp-btn");
  const errors = document.querySelectorAll(".error");
  const bDay = document.querySelector("#day");
  const bMonth = document.querySelector("#month");
  const bYear = document.querySelector("#year");
  // const password = document.querySelector("#password");
  // const cPassword = document.querySelector("#cpassword");
  const message = document.querySelector(".message");
  const policyTerms = document.querySelector("#policy");

  function proveriImena() {
    if (fname.value == "") {
      fname.nextElementSibling.textContent = `Please enter First name`;
    } else if (!names.test(fname.value)) {
      fname.nextElementSibling.textContent = `First letter must be capitalized, and minimal number of characters is 3`;
    } else {
      fname.nextElementSibling.textContent = "";
    }
    if (lname.value == "") {
      lname.nextElementSibling.textContent = `Please enter Last name`;
    } else if (!names.test(lname.value)) {
      lname.nextElementSibling.textContent = `First letter must be capitalized, and minimal number of characters is 3`;
    } else {
      lname.nextElementSibling.textContent = "";
    }
  }

  function proveriMail() {
    if (mail.value == "") {
      mail.nextElementSibling.textContent = `Enter email address'`;
    } else if (!mailRegex.test(mail.value)) {
      mail.nextElementSibling.textContent = ``;
      mail.nextElementSibling.textContent = `Email address must end with 'com/rs', exemple (john@gmail.com)`;
    } else {
      mail.nextElementSibling.innerHTML = "";
    }
  }

  // function proveriPassword() {
  //   if (password.value == "") {
  //     document.querySelector(".passCt").nextElementSibling.textContent =
  //       "Please enter password";
  //   } else if (!passwordRegex.test(password.value)) {
  //     document.querySelector(".passCt").nextElementSibling.textContent =
  //       "Your password must contains least one big letter, Number, Special Character and minimum 8 characters. Exemple (Mir@slav02)";
  //   } else if (cPassword.value != password.value) {
  //     document.querySelector(".passCt").nextElementSibling.textContent =
  //       "Passwords do not match";
  //   } else {
  //     document.querySelector(".passCt").nextElementSibling.textContent = "";
  //   }
  // }

  fname.addEventListener("blur", function () {
    proveriImena();
  });

  lname.addEventListener("blur", function () {
    proveriImena();
  });

  mail.addEventListener("blur", function () {
    proveriMail();
  });

  btnSignUp.addEventListener("click", function (e) {
    e.preventDefault();

    //FIRST NAME LAST NAME
    proveriImena();

    //MAIL
    proveriMail();

    //RADIO BTN
    radiobtn.forEach((e) => {
      if (!e.checked) {
        document.querySelector(
          ".radio-ct"
        ).nextElementSibling.textContent = `Please choose your gender`;
      }
    });
    radiobtn.forEach((e) => {
      if (e.checked) {
        document.querySelector(".radio-ct").nextElementSibling.textContent = ``;
      }
    });

    //Free days
    checkBox.forEach((cb) => {
      if (!cb.checked) {
        document.querySelector(
          ".cb-ct"
        ).nextElementSibling.textContent = `Please select at least one day`;
      }
    });
    checkBox.forEach((cb) => {
      if (cb.checked) {
        document.querySelector(".cb-ct").nextElementSibling.textContent = ``;
      }
    });

    //Birthday
    if (
      bDay.selectedIndex == 0 ||
      bMonth.selectedIndex == 0 ||
      bYear.selectedIndex == 0
    ) {
      document.querySelector(".ddl-container").nextElementSibling.textContent =
        "Please enter your BirthDate";
    } else {
      document.querySelector(".ddl-container").nextElementSibling.textContent =
        "";
    }

    if (!policyTerms.checked) {
      document.querySelector(".cb-flex").nextElementSibling.textContent =
        "You need to accept the Terms of Use & Privacy Policy ";
    } else document.querySelector(".cb-flex").nextElementSibling.textContent = "";

    // proveriPassword();

    for (let i = 0; i < errors.length; i++) {
      if (errors[i].textContent != "") {
        message.classList.remove("success");
        message.textContent = "";
        break;
      } else {
        message.classList.add("success");
        message.textContent = "You are successfuly schedule meeting";
      }
    }
  });
} else if (wLoaction.includes("author.html")) {
  loadNav();
}

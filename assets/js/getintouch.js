//SIGN UP PAGE

let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let datum = new Date();

//regex
let names = /^[A-Z][a-z]{2,15}$/;
let mailRegex = /^[a-z0-9-\.]{3,30}@[a-z]{2,8}\.(com|rs)$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

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
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cpassword");
const message = document.querySelector(".message");
const policyTerms = document.querySelector("#policy")


function proveriImena () {
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

function proveriPassword () {
  if(password.value == '') 
  {
    document.querySelector(".passCt").nextElementSibling.textContent='Please enter password'
  }
  else if (!passwordRegex.test(password.value)) {
    document.querySelector(".passCt").nextElementSibling.textContent='Your password must contains least one big letter, Number, Special Character and minimum 8 characters. Exemple (Mir@slav02)'
  } 
  else if (cPassword.value != password.value) {
    document.querySelector(".passCt").nextElementSibling.textContent='Passwords do not match'
  }
  else {
    document.querySelector(".passCt").nextElementSibling.textContent=''
}
    
}

fname.addEventListener("blur", function () {
  proveriImena();
});

lname.addEventListener("blur", function () {
  proveriImena();
});

mail.addEventListener("blur", function () {
  proveriMail()
});

btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  
  //FIRST NAME LAST NAME
  proveriImena();

  //MAIL
  proveriMail()

  //RADIO BTN
  radiobtn.forEach((e) => {
    if (!e.checked) {
      document.querySelector(".radio-ct").nextElementSibling.textContent = `Please choose your gender`;
    }
  });
  radiobtn.forEach((e) => {
    if (e.checked) {
      document.querySelector(".radio-ct").nextElementSibling.textContent = ``;
    }
  });

  //Free days
  checkBox.forEach(cb=>{
    if(!cb.checked) {
      document.querySelector(".cb-ct").nextElementSibling.textContent = `Please select at least one day`;
    }
  })
  checkBox.forEach(cb=>{
    if(cb.checked) {
      document.querySelector(".cb-ct").nextElementSibling.textContent = ``;
    }
  })

  //Birthday
  if(bDay.selectedIndex == 0 || bMonth.selectedIndex ==0 || bYear.selectedIndex==0)
  {
    document.querySelector(".ddl-container").nextElementSibling.textContent='Please enter your BirthDate'
  }else {
    document.querySelector(".ddl-container").nextElementSibling.textContent=''
  }

  if(!policyTerms.checked) {
    document.querySelector(".cb-flex").nextElementSibling.textContent = "You need to accept the Terms of Use & Privacy Policy "
  } else document.querySelector(".cb-flex").nextElementSibling.textContent = '';

  proveriPassword ();
 
 
  for(let  i =0; i<errors.length; i++) {
    if (errors[i].textContent != '') {
      message.classList.remove("success");
      message.textContent = ''
      break;
    }
    else {
      message.classList.add("success");
      message.textContent = 'You are successfuly schedule meeting'
    }
  }
  
  
});






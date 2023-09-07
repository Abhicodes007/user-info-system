var user1btn = document.querySelector("[user1-btn]");
var user2btn = document.querySelector("[user2-btn]");
var user3btn = document.querySelector("[user3-btn]");
var user4btn = document.querySelector("[user4-btn]");
var user5btn = document.querySelector("[user5-btn]");
var user6btn = document.querySelector("[user6-btn]");
var usertab = document.querySelector("[activity-Info]");
var contactbtn = document.querySelector("[iinfo-btn2]");
var profilebtn = document.querySelector("[profile-btn]");
var addressbtn = document.querySelector("[address-btn]");
var personalbtn = document.querySelector("[personal-btn]");
var acccountbtn = document.querySelector("[account-btn]");
var detailContainer = document.querySelector(".detail-container");
var contactContainer = document.querySelector(".contact-info");
var profileContainer = document.querySelector(".profile-info");
var addressContainer = document.querySelector(".address-info");
var personalContainer = document.querySelector(".personal-info");
var accountContainer = document.querySelector(".account-info");


user1btn.addEventListener("click", () => {
    window.location.href = "index.html";
});

user2btn.addEventListener("click", () => {
    window.location.href = "user2.html";
});

user3btn.addEventListener("click", () => {
    window.location.href = "user3.html";
});

user4btn.addEventListener("click", () => {
    window.location.href = "user4.html";
});

user5btn.addEventListener("click", () => {
    window.location.href = "user5.html";
});

user6btn.addEventListener("click", () => {
    window.location.href = "user6.html";
});

detailContainer.classList.add("active");
usertab.classList.toggle("highlight")

function disableAllContainer(){
    usertab.classList.remove('highlight');
    contactbtn.classList.remove('highlight');
    profilebtn.classList.remove('highlight');
    addressbtn.classList.remove('highlight');
    personalbtn.classList.remove('highlight');
    acccountbtn.classList.remove('highlight');
    detailContainer.classList.remove("active");
    contactContainer.classList.remove("active");
    profileContainer.classList.remove("active");
    addressContainer.classList.remove("active");
    personalContainer.classList.remove("active");
    accountContainer.classList.remove("active");
}


usertab.addEventListener("click" , () => {
    disableAllContainer();
    detailContainer.classList.add("active");
});


contactbtn.addEventListener("click" , () => {
    disableAllContainer();
    contactbtn.classList.toggle("highlight");
    contactContainer.classList.add("active");
});

profilebtn.addEventListener("click", () => {
    disableAllContainer();
    profilebtn.classList.toggle("highlight");
    profileContainer.classList.add("active");
});

addressbtn.addEventListener("click", () => {
    disableAllContainer();
    addressbtn.classList.toggle("highlight");
    addressContainer.classList.add("active");
});

personalbtn.addEventListener("click", () => {
    disableAllContainer();
    personalbtn.classList.toggle("highlight");
    personalContainer.classList.add("active");
});

acccountbtn.addEventListener("click", () => {
    disableAllContainer();
    acccountbtn.classList.toggle("highlight");
    accountContainer.classList.add("active");
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "flex";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}






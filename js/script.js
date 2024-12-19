let navbar = document.getElementById("navbar");
let cross = document.getElementById("cross");
let navitems = document.querySelector(".navitembox");
let body = document.body; 
let html =document.html;

navbar.addEventListener("click", function () {
  navitems.classList.add("active");
  cross.style.display = "block";
  navbar.style.display = "none";
  body.classList.add('no-scroll');
});

cross.addEventListener("click", function () {
  navitems.classList.remove("active");
  cross.style.display = "none";
  navbar.style.display = "block";
  body.classList.remove('no-scroll');
});

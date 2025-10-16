let toogleBtn = document.querySelector(".navToogler");
let toogleBtnIcon = document.querySelector(".navToogler i");
let dropDownMenu = document.querySelector(".dropdown-menu");

toogleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  let isOpen = dropDownMenu.classList.contains("open");
  toogleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

let count = 0;
let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3')

function showSlide(num){

  count = count+num;
  console.log(count);

  if(count%3===1 || count%3===-1){
    slide1.style.display = "block";
    slide2.style.display = "none";
    slide3.style.display = "none";
  }
  else if(count%3===2 || count%3===-2){
    slide1.style.display = "none";
    slide2.style.display = "block";  
    slide3.style.display = "none";
  }
  else{
    slide1.style.display = "none";
    slide2.style.display = "none";  
    slide3.style.display = "block";
  }
}

// slide1.style.display = "block";
// slide2.style.display = "none";
// slide3.style.display = "none";

// function showSlide(num) {
//   count = count + num;
  
//   // Handle wrapping around
//   if (count < 0) {
//       count = 2; // Go to last slide
//   } else if (count > 2) {
//       count = 0; // Go to first slide
//   }
  
//   console.log("Current slide:", count + 1);
  
//   // Show/hide slides based on count
//   if (count === 0) {
//       slide1.style.display = "block";
//       slide2.style.display = "none";
//       slide3.style.display = "none";
//   } else if (count === 1) {
//       slide1.style.display = "none";
//       slide2.style.display = "block";  
//       slide3.style.display = "none";
//   } else {
//       slide1.style.display = "none";
//       slide2.style.display = "none";  
//       slide3.style.display = "block";
//   }
// }
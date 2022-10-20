// hamburger menu
// append div on click each time instead of scoll


// link hover


const scrollArrow = document.querySelector(".scrollArrow");

window.addEventListener("scroll", () => { 
  if (window.pageYOffset > 100) { 
    scrollArrow.classList.add("active"); 
  } else { 
    scrollArrow.classList.remove("active"); 
  } 
});
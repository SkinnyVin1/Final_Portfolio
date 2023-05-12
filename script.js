const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
});



// LOADER===================================
// Get the loader element
const loader = document.querySelector('.loader');

// Show the loader
function showLoader() {
  loader.style.display = 'flex';
}

// Hide the loader
function hideLoader() {
  loader.style.display = 'none';
}

// Call showLoader() before your content loads
showLoader();

// Call hideLoader() when your content has finished loading
window.addEventListener('load', () => {
  hideLoader();
});

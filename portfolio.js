
const backToTopButton = document.getElementById('back-to-up');

// Show the button when the user scrolls down 200px
window.addEventListener('scroll', () => {
    // if (window.scrollY > 200) {
    //   backToTopButton.style.display = 'block';
    // } else {
    //   backToTopButton.style.display = 'none';
    // }
    backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none'; 
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,        // Scroll to the top of the page
      behavior: 'smooth' // Smooth scrolling effect
    });
});
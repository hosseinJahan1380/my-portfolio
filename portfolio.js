
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToUp');
    

    // Show the button when the user scrolls down 200px
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY>200 ? 'block' : 'none';
    });


    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,   
            behavior: 'smooth' 
        });
    });
})

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

    const skill_name = document.getElementById('skill-name');
    const skills = document.querySelectorAll('.skills-icons i')
    skills.forEach(icon=>{
        // Update the h2 with the skill name (use the icon's ID)
        icon.addEventListener('mouseover' ,()=>{
            skill_name.textContent = icon.id;
        })

        // Reset the h2 text when hover ends
        icon.addEventListener('mouseout' ,()=>{
            skill_name.textContent = "";
        })
    })
})
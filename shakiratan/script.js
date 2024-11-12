// Toggle Menu Icon and Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');   // Toggle the 'bx-x' class for the icon change
    navbar.classList.toggle('active');   // Toggle 'active' class for the navbar
});

// Toggle Project Image Visibility
function toggleProject(projectId) {
    var projectImage = document.getElementById(projectId);
    
    // Toggle the display property of the project image
    if (projectImage.style.display === "none" || projectImage.style.display === "") {
        projectImage.style.display = "block";  // Show the image
    } else {
        projectImage.style.display = "none";   // Hide the image
    }
}

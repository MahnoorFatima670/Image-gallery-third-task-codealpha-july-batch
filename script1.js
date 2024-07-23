$(document).ready(function() {
    // Initialize variables
    var currentIndex = 0;
    var slides = $(".slide");

    // Function to show the current slide
    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
    }

    // Initial display
    showSlide(currentIndex);

    // Click event for "Next" button
    $("#next").click(function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Click event for "Previous" button
    $("#prev").click(function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});


const Images=document.querySelectorAll('.slide img');
Images.forEach(image=>
{
image.addEventListener('click',()=>
{
image.classList.toggle('tilt');
});


}
);



// Get the main image and hidden images container
const mainImage = document.getElementById('main-image');
const hiddenImages = document.getElementById('hidden-images');

// Add a click event listener to the main image
mainImage.addEventListener('click', () => {
  // Toggle the 'visible' class on the hidden images container
  hiddenImages.classList.toggle('visible');
});



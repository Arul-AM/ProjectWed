// JavaScript to apply animation to background images in .home section
document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.querySelector('.home');
    homeSection.style.animation = 'changeBackground 20s infinite';
});
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i <= 259; i++) {
        let img = new Image();
        img.src = `W1/ezgif-frame-001${i}.jpg`;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const slideshowContainers = document.querySelectorAll(".slideshow-container");

    slideshowContainers.forEach(container => {
        const slides = container.querySelectorAll(".slide");
        let currentSlide = 0;

        function showSlide(index) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            slides[index].classList.add("active");
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Initial slide display
        showSlide(currentSlide);

        // Auto advance slides every 3 seconds
        setInterval(nextSlide, 3000);
    });
});




function generateCard() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var date = new Date(document.getElementById("date").value);
    
    // Get month name
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
var month = monthNames[date.getMonth()];

// Format date for display
var formattedDate = `${date.getDate()} ${month} ${date.getFullYear()}`;
    
    document.getElementById("name1Text").innerText = name1;
    document.getElementById("name2Text").innerText = name2;
    document.getElementById("dateText").innerText = formattedDate;
}


function openLink() {
    window.location.href = 'https://maps.app.goo.gl/viC2zUN7MYbvb6xD9';
}

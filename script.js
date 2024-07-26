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


function showTab(tabId) {
    var tabs = document.getElementsByClassName('tab');
    var contents = document.getElementsByClassName('tab-content');
    
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

function openGoogleForm() {
    window.open('https://forms.gle/JaAkahn2W4hkSu6w6', '_blank');
}



/*-----------Room---------------*/

    // Function to share image via WhatsApp
    function shareToWhatsApp(imageUrl) {
        var phoneNumber = '919940994802'; // Replace with your desired phone number
        var message = 'Check out this image: ' + window.location.origin + '/' + imageUrl;
        var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
        
        // Open WhatsApp with the constructed URL
        window.open(whatsappUrl, '_blank');
    }

    // Add click event listeners to each div
    document.getElementById('decoration').onclick = function() {
        shareToWhatsApp('room1.jpg');
    };
    document.getElementById('lighting').onclick = function() {
        shareToWhatsApp('room2.jpg');
    };
    document.getElementById('dj').onclick = function() {
        shareToWhatsApp('room3.jpg');
    };


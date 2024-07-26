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


     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
     import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
     import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

     // Your web app's Firebase configuration
     const firebaseConfig = {
         apiKey: "AIzaSyAw6moLSahJOayXFDWdA8SdcPF2dz8lXFc",
         authDomain: "reservation-3253e.firebaseapp.com",
         projectId: "reservation-3253e",
         storageBucket: "reservation-3253e.appspot.com",
         messagingSenderId: "516838643780",
         appId: "1:516838643780:web:b3793c0fddb28e0c378411",
         measurementId: "G-7X091H8BVL"
     };

     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const analytics = getAnalytics(app);
     const db = getFirestore(app);

     // Function to save email to Firestore
     async function subscribeEmail() {
         const emailInput = document.getElementById('emailInput').value;
         if (!emailInput) {
             alert("Please enter an email address.");
             return;
         }
         try {
             const docRef = await addDoc(collection(db, "subscriptions"), {
                 email: emailInput,
                 timestamp: new Date()
             });
             console.log("Document written with ID: ", docRef.id);
             alert("Subscribed successfully!");
         } catch (e) {
             console.error("Error adding document: ", e);
             alert("Subscription failed. Please try again.");
         }
     }

     // Track page visit
     window.addEventListener('load', async () => {
         try {
             await addDoc(collection(db, "page_visits"), {
                 timestamp: new Date()
             });
             console.log("Page visit recorded.");
         } catch (e) {
             console.error("Error adding visit record: ", e);
         }
     });
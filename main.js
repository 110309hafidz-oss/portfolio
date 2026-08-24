// ==========================================
// TYPING EFFECT - PASTI BERFUNGSI
// ==========================================

// Tunggu sampai semua elemen siap
document.addEventListener("DOMContentLoaded", function() {
    startTyping();
});

// Juga jalankan jika sudah siap
if (document.readyState === "complete" || document.readyState === "interactive") {
    startTyping();
}

function startTyping() {
    var typingElement = document.getElementById("typing");
    
    if (!typingElement) {
        console.error("Element #typing tidak ditemukan!");
        return;
    }

    // DEKLARASIKAN DULU SEBELUM DIGUNAKAN
    var words = ["Web Developer", "PHP Developer", "Laravel Developer"];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var timeoutId = null;

    function typeEffect() {
        var currentWord = words[wordIndex];

        if (!isDeleting) {
            // Mengetik
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                // Selesai mengetik, tunggu lalu hapus
                isDeleting = true;
                timeoutId = setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            // Menghapus
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                // Selesai menghapus, pindah ke kata berikutnya
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                timeoutId = setTimeout(typeEffect, 300);
                return;
            }
        }

        var speed = isDeleting ? 50 : 100;
        timeoutId = setTimeout(typeEffect, speed);
    }

    // Mulai efek typing
    typingElement.textContent = "";
    typeEffect();
}

// ==========================================
// NAVBAR SHADOW
// ==========================================
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    if (nav) {
        if (window.scrollY > 80) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }
});

// ==========================================
// FADE ANIMATION
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "0";
                entry.target.style.transform = "translateY(40px)";
                
                setTimeout(function() {
                    entry.target.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, 50);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("section, .card").forEach(function(el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        observer.observe(el);
    });
});
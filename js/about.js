

// Counter Animation on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count");
    let started = false; // To prevent re-triggering the animation

    function startCounters() {
        if (!started) {
            counters.forEach(counter => {
                counter.innerText = "0"; 
                const target = +counter.getAttribute("data-target");
                const increment = target / 100; // Smooth increment steps
                let count = 0;

                function updateCounter() {
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCounter, 30);
                    } else {
                        counter.innerText = target; // Ensure the final value matches the target
                    }
                }

                updateCounter();
            });
            started = true;
        }
    }

    function checkScroll() {
        const section = document.querySelector(".counter-section");
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            startCounters();
        }
    }

    window.addEventListener("scroll", checkScroll);
});

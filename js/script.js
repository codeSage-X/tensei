const hamburger = document.querySelector('.hamburger');
const slideMenu = document.querySelector('.slide-menu');
const closeMenuBtn = document.getElementById('closeMenu');

gsap.registerPlugin(ScrollTrigger);


// Function to animate elements and log scroll position
function animateOnScroll(element) {
    gsap.set(element, { opacity: 0, y: 100 });

       ScrollTrigger.create({
      trigger: element,
      start: "top 80%",   // Trigger animation when element is in view
      end: "top 20%",     // Reset animation when scrolled back up
      toggleActions: "play reverse play reverse", // Play forward when scrolling down, reverse when scrolling up
      onEnter: () => console.log(`Entered: ${element.className}, scroll position:`, window.scrollY),
      onLeaveBack: () => console.log(`Exited: ${element.className}, scroll position:`, window.scrollY),
      animation: gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      }),
    });

  }

  // Select all the targeted elements for animation
  const elements = document.querySelectorAll(".t1, .t2, .t3, .t4, .t5, .t6, .t7, .t8");
  
  elements.forEach((el) => {
    animateOnScroll(el);
  });
function animateLines(element) {
    gsap.set(element, { opacity: 0.2 });

       ScrollTrigger.create({
      trigger: element,
      start: "top 80%",   // Trigger animation when element is in view
      end: "top 20%",     // Reset animation when scrolled back up
      toggleActions: "play reverse play reverse", // Play forward when scrolling down, reverse when scrolling up
      onEnter: () => console.log(`Entered: ${element.className}, scroll position:`, window.scrollY),
      onLeaveBack: () => console.log(`Exited: ${element.className}, scroll position:`, window.scrollY),
      animation: gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      }),
    });

  }

  // Select all the targeted elements for animation
  const element = document.querySelectorAll(".l1, .l2, .l3, .l4, .l5, .l6, .l7, .l8, .l9, .l10");
  
  element.forEach((el) => {
    animateLines(el);
  });


function init(){
gsap.set('.closeBtn', { y:-10, rotate:960});
gsap.set(slideMenu,{y:'-100%'})
// GSAP animations
const openMenu = () => {
    slideMenu.classList.remove('hidden'); // Make it visible
    gsap.fromTo(slideMenu, { y: '-100%' }, { y: '14%', duration: 0.5, ease: 'power3.out' });
    gsap.to('.closeBtn', {  rotate:0, duration: 1,  });
};

const closeMenu = () => {
    gsap.to(slideMenu, { y: '-100%', duration: 0.5, ease: 'power3.in', onComplete: () => {
        slideMenu.classList.add('hidden'); // Hide after animation completes
    } });
    gsap.to('.closeBtn', {  rotate:960, duration: 1,  });
};

// Add event listeners
hamburger.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

// carousel();


  
}


init();


// GSAP Animation to handle display based on screen size
function toggleMapDisplay() {
    if (window.innerWidth >= 1024) {
      gsap.set(".map-1", { display: "none" }); // Hide .map-1 for 1024px and above
    //   alert("1024px and above")
    } else {
    //   gsap.set(".map-1", { display: "flex" }); // Show .map-1 for smaller screens
    }
  }
  
  // Run the function on page load
  toggleMapDisplay();
  
  // Add an event listener to handle screen resize
  window.addEventListener("resize", toggleMapDisplay);
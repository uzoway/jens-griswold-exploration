// Uncomment to be able to toggle the grid visualizer
/* document.querySelector("body").addEventListener("click", () => {
     document.querySelector(".overlay").classList.toggle("active");
})
*/


gsap.registerPlugin(CustomEase, Flip);
CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");


function initializeAnimation() {
    // Position all images in the wrapper__photos container at the center
    const gridImages = gsap.utils.toArray(".photos__item");
    gsap.set(gridImages, { gridColumn: "5/7", gridRow: "1 / 1" });


    // Calculate the X translate value for individual photo item
    function calculateTranslateXValue() {
        const offsetWidth = document.querySelector(".photos__item").offsetWidth + 12.5;
        return `${offsetWidth}`;
    }


    // Recalculate and update the photo items position when the browser is resized
    window.addEventListener("resize", () => {
        gsap.set(".left__items", { x: () => -calculateTranslateXValue() })
        gsap.set(".right__items", { x: () => calculateTranslateXValue() })
        gsap.set(".left__most--item", { x: () => -calculateTranslateXValue() * 2 })
        gsap.set(".right__most--item", { x: () => calculateTranslateXValue() * 2 })
    });

    
    // Page load timeline animation
    const pageLoadTl = gsap.timeline({defaults: {
        ease: "power1.inOut",
        duration: 1.035
    }});


    pageLoadTl.to(gridImages, { 
        yPercent: 0, 
        y: 0, 
        delay: 1.5, 
    })
    .to(".center__item img", { scale: 1, }, "<")


    .to(".left__items", { x: () => -calculateTranslateXValue() })
    .to(".right__items", { x: () => calculateTranslateXValue() }, "<")
    .to(".left__items img", { scale: 1 }, "<")
    .to(".right__items img", { scale: 1 }, "<")


    .to(".jen__text", { 
        yPercent: 0, 
        y: 0, 
        duration: 0.8, 
        rotate: "0",
        ease: "ease-out-cubic"
    }, "<0.49")

    .to(".list__item a span", { 
        yPercent: 0, 
        y: 0, 
        rotate: 0,
        autoAlpha: 1, 
        stagger: 0.135,
        ease: "ease-out-cubic"
    })
    .to(".griswold__text", { 
        yPercent: 0, 
        y: 0, 
        duration: 0.8, 
        rotate: "0",
        ease: "ease-out-cubic" 
    }, "<0.4")


    .to(".left__most--item", { x: () => -calculateTranslateXValue() * 2 }, "<")
    .to(".right__most--item", { x: () => calculateTranslateXValue() * 2 }, "<")
    .to(".left__most--item img", { scale: 1 }, "<")
    .to(".right__most--item img", { scale: 1 }, "<");
}

window.addEventListener("DOMContentLoaded", initializeAnimation);

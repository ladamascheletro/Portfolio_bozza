var tl = gsap.timeline()

tl.to(".text", {duration: 2.5, y: 0, stagger: 0.6});
tl.to(".slider", {yPercent: -100, duration: 2, ease: "back"});
tl.to(".slider2", {yPercent: -200, duration: 2}, "-=2.5")
tl.from("nav", {opacity: 0, duration: 2})
tl.from(".headerTitle", {xPercent: 100, duration: 1, stagger: 0.6, ease: "power1.out"}, "-=2");



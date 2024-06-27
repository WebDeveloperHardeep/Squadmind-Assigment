// Animating the logo and navigation
gsap.from(".logo img", {
  scale: 0,
  y: -100,
  duration: 1,
});
gsap.from(".logo svg", {
  scale: 0,
  y: -100,
  duration: 1,
});
gsap.from("#nav-part2", {
  scale: 0,
  y: -100,
  duration: 1,
});

// Animating circles
gsap.to("#backside-circle", {
  scale: 1,
  // x: -110,
  duration: 2,
  delay: 4,
});
gsap.to("#circle", {
  scale: 1,
  // x: 0,
  duration: 2,
  delay: 4,
});

// Moving circles to the top
gsap.to("#backside-circle", {
  top: 0,
  x: -8,
  y: 13,
  duration: 3,
  delay: 6,
});
gsap.to("#circle", {
  top: 0,
  x: -8,
  y: 10,
  duration: 3,
  delay: 6,
});
gsap.to(".text1", {
  x: 0,
  y: -140,
  opacity: 1,
  scale: 1,
  duration: 1,
  delay: 13,
  stagger: 0.5,
  // scrub: 2,
});

// Words Moving
const tl = gsap.timeline();

tl.to(".words", {
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  duration: 1,
  delay: 10,
  stagger: 2,
});

tl.to(".words", {
  x: -30,
  y: -130,
  opacity: 0,
  duration: 2,
  stagger: 2,
  delay: 2,
});

// Animating letters
gsap.to("#letterH", {
  scale: 1,
  duration: 2,
  delay: 16,
});
gsap.to("#letterA", {
  scale: 1,
  duration: 2,
  delay: 19.2,
});
gsap.to("#letterP", {
  scale: 1,
  duration: 2,
  delay: 18.2,
});
gsap.to("#letterI", {
  scale: 1,
  duration: 2,
  delay: 19.2,
});
gsap.to("#letteri", {
  scale: 1,
  duration: 2,
  delay: 18.2,
});

// Moving letters to the top
gsap.to("#letterH", {
  x: -40,
  y: -210,
  scale: 1,
  duration: 1,
  delay: 17,
});
gsap.to("#letterA", {
  x: -7,
  y: -163,
  scale: 1,
  duration: 1,
  delay: 21,
});

gsap.to("#letterI", {
  x: 25,
  y: -147,
  scale: 1,
  duration: 1,
  delay: 21,
});
gsap.to("#letterP", {
  x: 65,
  y: -210,
  scale: 1,
  duration: 1,
  delay: 19,
});
gsap.to("#letteri", {
  x: 35,
  y: -215,
  scale: 1,
  duration: 1,
  delay: 19,
});

// Animating SVGs
gsap.to(".svg1", {
  duration: 1,
  delay: 21,
  scale: 1,
  opacity: 1,
});
gsap.to(".svg2", {
  duration: 1,
  delay: 23,
  scale: 1,
  opacity: 1,
});
gsap.to(".svg3", {
  duration: 1,
  delay: 25,
  scale: 1,
  opacity: 1,
});
gsap.to(".svg4", {
  duration: 1,
  delay: 27,
  scale: 1,
  opacity: 1,
});
gsap.to(".svg5", {
  duration: 1,
  delay: 29,
  scale: 1,
  opacity: 1,
});

// Moving SVGs
gsap.to(".svg1", {
  x: -400,
  y: 100,
  duration: 1,
  delay: 22,
});
gsap.to(".svg2", {
  x: 40,
  y: 100,
  duration: 2,
  delay: 24,
});
gsap.to(".svg3", {
  x: 400,
  y: 100,
  duration: 2,
  delay: 26,
});
gsap.to(".svg4", {
  x: -200,
  y: 165,
  duration: 2,
  delay: 28,
});
gsap.to(".svg5", {
  x: 200,
  y: 165,
  duration: 2,
  delay: 30,
});

// Svg Span Text

// Animating SVGs
gsap.to(".svg-span1", {
  duration: 1,
  delay: 21,
  scale: 1,
  opacity: 1,
});
gsap.to(".svg-span2", {
  duration: 1,
  delay: 23,
  scale: 1,
  opacity: 1,
});
gsap.to(".svg-span3", {
  duration: 1,
  delay: 25,
  scale: 1,
  opacity: 1,
});
gsap.to(".svg-span4", {
  duration: 1,
  delay: 27,
  scale: 1,
  opacity: 1,
});
gsap.to(".svg-span5", {
  duration: 1,
  delay: 29,
  scale: 1,
  opacity: 1,
});

// Moving SVGs
gsap.to(".svg-span1", {
  x: -360,
  y: 50,
  duration: 1,
  delay: 22,
});
gsap.to(".svg-span2", {
  x: 40,
  y:50,
  duration: 2,
  delay: 24,
});
gsap.to(".svg-span3", {
  x: 400,
  y: 50,
  duration: 2,
  delay: 26,
});
gsap.to(".svg-span4", {
  x: -160,
  y: 120,
  duration: 2,
  delay: 28,
});
gsap.to(".svg-span5", {
  x: 230,
  y: 120,
  duration: 2,
  delay: 30,
});

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

function animateCircles() {
  gsap.from("#backside-circle", {
    // opacity: 0,
    scale: 0,
    x: 0,
    duration: 2,
    delay: 2,
  });

  gsap.from("#circle", {
    // opacity: 0,
    scale: 0,
    x: 0,
    duration: 2,
    delay: 6,
  });
}

function moveCirclesToTop() {
  gsap.to("#backside-circle", {
    top: 0,
    y: 130,
    x: -5,
    duration: 1,
    delay: 4,
  });
  gsap.to("#circle", {
    top: 0,
    x: -12,
    y: -2,
    duration: 1,
    delay: 7,
  });
  // gsap.to(".letter", {
  //   y: -200,
  //   duration: 4,
  //   delay: 8,
  // });
}

function animate() {
  animateCircles();
  setTimeout(moveCirclesToTop, 1000); // Wait for circles to animate in before moving them to the top
}
// Call the animate function
animate();
function animateLetters() {
  gsap.to("#letterH", {
    scale: 1,
    duration: 2,
    delay: 11,
  });
  gsap.to("#letterA", {
    scale: 1,
    duration: 2,
    delay: 13,
  });

  gsap.to("#letterP", {
    scale: 1,
    duration: 2,
    delay: 15,
  });
  gsap.to("#letterI", {
    scale: 1,
    duration: 2,
    delay: 17,
  });
  // =======================================
  // For going top Letter
  gsap.to("#letterH", {
    x: -50,
    y: -210,
    scale: 1,
    duration: 1,
    delay: 12,
    // scrub: 1,
  });
  gsap.to("#letterA", {
    x: 40,
    y: -195,
    scale: 1,
    duration: 1,
    delay: 14,
  });
  gsap.to("#letterP", {
    x: 45,
    y: -160,
    scale: 1,
    duration: 1,
    delay: 16,
  });
  gsap.to("#letterI", {
    x: 25,
    y: -130,
    scale: 1,
    duration: 1,
    delay: 18,
  });
}

function animateSVGs() {
    // Animate SVGs to scale out and fade out sequentially
    gsap.to(".svg1", {
      duration: 1,
      delay: 19,
      scale: 1, // Scale out
      opacity: 1, // Fade out
    });
    gsap.to(".svg2", {
      duration: 1,
      delay: 21,
      scale: 1, // Scale out
      opacity:1, // Fade out
    });
    gsap.to(".svg3", {
      duration: 1,
      delay: 23,
      scale: 1, // Scale out
      opacity: 1, // Fade out
    });
    gsap.to(".svg4", {
      duration: 1,
      delay: 25,
      scale: 1, // Scale out
      opacity:1, // Fade out
    });
    gsap.to(".svg5", {
      duration: 1,
      delay: 27,
      scale: 1, // Scale out
      opacity:1, // Fade out
    });
  
  
  // =====================================================
  gsap.to(".svg1", {
    x: -400,
    y: 100,
    duration: 1,
    delay: 20,
  });
  gsap.to(".svg2", {
    x: 40,
    y: 100,
    duration: 2,
    delay: 22,
  });
  gsap.to(".svg3", {
    x: 400,
    y: 100,
    duration: 2,
    delay: 24,
  });
  gsap.to(".svg4", {
    x: -200,
    y: 220,
    duration: 2,
    delay: 26,
  });
  gsap.to(".svg5", {
    x: 200,
    y: 220,
    duration: 2,
    delay: 28,
  });
}
animateSVGs();
animateLetters();

gsap.from(".text1", {
  duration: 1,
  delay: 1,
  stagger: 1,
});

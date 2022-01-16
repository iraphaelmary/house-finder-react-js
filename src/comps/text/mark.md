//gsap
gsap.from('.header', {duration: 1, y: '-100%', ease: 'bounce', });
gsap.from('.link', {duration: 1, opacity: 0, delay: 1,stagger: .5});
gsap.from('.rightsidebar', {duration: 1, x: '-100vw', delay: 1, ease: power2.in});
gsap.from('leftsidebar', {duration: 2, x: '-100%', delay: 1.5, ease: 'power.in'} );
gsap.to('footer', {duration: 1, y: 0, ease: 'elastic', delay: 2.5});

footer {
  transform: translateY(100%);
}

gsap.fromTo('button', {opacity: 0, scale: 0, rotate: 720deg}, {duration: 1, delay: 2.5, opacity: 1, scale: 1, rotate: 0} )

//simplify

const timeLine = gsap.timeline({default: {duration: 1}});
timeLine
  .from('.header', {y: '-100%', ease: 'bounce', })
  .from('.link', {opacity: 0,stagger: .5})
  .from('.rightsidebar', {x: '-100vw', ease: power2.in}, 1) - the 1 is a delay function
  .from('leftsidebar', {x: '-100%', ease: 'power.in'}, '<.5') - delays 5 sec after the previoius animation
  .from('footer', {y: 0, ease: 'elastic'})

  const reverse = document.querySelection('button');
  button.addEventListener('click', () => {
    timeLine.timeScale(3) -- reverses 3 times faster than it came in
    timeLine.reverse()
  })





/ .grid {
//     display: grid;
//     grid-template-areas: 
//     'showcase top-box-a top-box-b'
//     'showcase top-box-c top-box-d';
//     gap: 20px;
//     margin-block: 2rem;
// }

// .showcase {
//     grid-area: showcase;
//     height: 70vh;
//     border: 2px solid dimgray; 

// }

// .top-box {
//     width: 200px;
//     height: 200px;
//     display: grid;
//     place-items: center;
// }

// .top-box-a {
//     grid-area: top-box-a;
//     background-color: red;
// }

// .top-box-b {
//     grid-area: top-box-b;
//     background-color: red;
// }

// .top-box-c {
//     grid-area: top-box-b;
//     background-color: red;
// }

// .top-box-d {
//     grid-area: top-box-b;
//     background-color: red;
// }

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}


@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

//always give height to content when using flex so that the justify-content center and align items center works properly by ensuring items are placed at the center
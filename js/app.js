const navBtn = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

const tl = new TimelineLite({ paused: true, reversed: true });

tl.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
})
.to('nav', 1, {
    height: '100%',
    ease: Power2.easeOut
}, '-= 1')
.fromTo('.nav-open', 0.5, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    // Run when the animation is finished
    onComplete: () => {
        navOpen.style.pointEvenets = 'auto';
        console.log('done');
    }
});

navBtn.addEventListener('click', () => {
    // Prevent event is interupted while one is going
    if ( tl.isActive() ) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }

    toggleTween(tl);
})


// Define custom function
const toggleTween = (tween) => {
    tween.reversed() ? tween.play() : tween.reverse();
 }
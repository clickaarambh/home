// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#moving-div'),
//     smooth: true
// });


function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "28vh"
        })
        tl.to(".nav-part2 h5", {
            display: "block"
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

function page2Animation() {
    var page2Center = document.querySelector(".page2-center")
    var video = document.querySelector("#page2 video")

    page2Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "35px"
        })
    })
}

function page2secAnimation() {
    var page2secCenter = document.querySelector(".page2sec-center")
    var video = document.querySelector("#page2-sec video")

    page2secCenter.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "35px"
        })
    })
}

function page2mobAnimation() {
    var page2mobCenter = document.querySelector(".page2mob-center")
    var video = document.querySelector("#page2mob video")

    page2mobCenter.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "35px"
        })
    })
}

function page2secmobAnimation() {
    var page2secmobCenter = document.querySelector(".page2secmob-center")
    var video = document.querySelector("#page2secmob video")

    page2secmobCenter.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "35px"
        })
    })
}

function page6Animation() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function page7Animation() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwS0cqL7v77sUzgA8MwKSLVjQkDQNpQIqKc1vWh20en26sBix5MXSiFNymoP37TR3DzRw/exec'

    const form = document.forms['clickaarambh_form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
}

// navAnimation()

page2Animation()

page2secAnimation()

page2mobAnimation()

page2secmobAnimation()

page6Animation()

page7Animation()

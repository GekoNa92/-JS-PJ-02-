
const images = document.querySelectorAll(".image");
const controls = document.querySelectorAll(".arrows");
const dots = document.querySelectorAll(".dots")
const nav = document.querySelectorAll(".nav")
let imageIndex = 0;
let dotsIndex = 0;
let navIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}
function showDots(index) {
    dots[dotsIndex].classList.remove('active');
    dots[index].classList.add('active');
    dotsIndex = index;
}
function showNav(index) {
    nav[navIndex].classList.remove('active');
    nav[index].classList.add('active');
    navIndex = index;
}
controls.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('left')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length -1;
            }
            show(index);
            showDots(index);
            showNav(index);
        } else if (e.classList.contains('right')) {
            let index =  imageIndex + 1;

            if (index >= images.length) {
                index = 0;
            }
            show(index);
            showDots(index);
            showNav(index);
        }
    })
});
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        show(index);
        showDots(index);
        showNav(index);
    });
});

nav.forEach((navigation, index) => {
    navigation.addEventListener('click', () => {
        show(index);
        showDots(index);
        showNav(index);
    });
});
show(imageIndex);
showDots(dotsIndex);
showNav(navIndex);


// Slick Slider

$(".customer-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./Asset/images/arrow-left.svg"/></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src="./Asset/images/arrow-right.svg"/></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            },
        },
    ],
});

//  Kill right mouse

var message = "NoRightClicking";

function defeatIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function defeatNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            (message);
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = defeatNS;
}
else {
    document.onmouseup = defeatNS;
    document.oncontextmenu = defeatIE;
}

document.oncontextmenu = new Function("return false")

// Kill Ctrl + U and F12

checkCtrl = false('*').keydown(function (e) {
    if (e.keyCode == '17') {
        checkCtrl = false
    }
}).keyup(function (ev) {
    if (ev.keyCode == '17') {
        checkCtrl = false
    }
}).keydown(function (event) {
    if (checkCtrl) {
        if (event.keyCode == '85') {
            return false;
        }
    }
})

// Menu Toggle

// const toggle = document.querySelector(".menu-toggle");
// const menu = document.querySelector(".menu");
// const activeClass = "is-show";
// toggle.addEventListener("click", function () {
//   menu.classList.add(activeClass);
// });
// window.addEventListener("click", function (e) {
//   if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//     menu.classList.remove(activeClass);
//   }
// });

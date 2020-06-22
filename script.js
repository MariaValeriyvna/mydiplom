$(function($) {

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    let grd = ctx.createLinearGradient(0, 0, 200, 0);

    grd.addColorStop(0.4, "#ff2701");
    grd.addColorStop(1, "#faea05f8");
    ctx.strokeStyle = grd;

    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(0, 195);
    ctx.lineTo(20, 170);
    ctx.arcTo(170, 0, 320, 65, 220);
    ctx.lineTo(320, 335);
    ctx.lineTo(0, 335);
    ctx.stroke()
    ctx.closePath();
    ctx.fillStyle = grd;
    ctx.fill();


    let img = new Image();
    img.src = "img/my-dipmob.png";
    img.onload = function() {
        ctx.drawImage(img, 50, 90, 280, 245);
        // drawImage(img, x, y);
    };
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        speed: 400,
        spaceBetween: 10,
        grabCursor: true,
        setWrapperSize: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,

        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            600: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1310: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        },

    });

    function disableScroll() {
        $('body').css('overflow', 'hidden');

    };

    function enableScroll() {
        $('body').css('overflow', 'visible');

    };
    $('.header__menu-burg').click(function() {
        $('.menu-burg-block').slideToggle(500);

    });
    $('#imgphone, .header__btn, .text__button, .contact__btn, .header__btn, .main-service__button').click(function() {
        $('.pop-containerphone').fadeIn(400, disableScroll);
        $('.applicationphone').animate({}, 500);
        $('input[type=tel]').inputmask({
            "mask": " + 7(999) 999 - 99 - 99"
        });

    });
    $('.main-examples__btn').click(function() {
        $('.pop-containermail').fadeIn(400, disableScroll);
        $('.applicationmail').animate({}, 500);
        $('input[name=email]').inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        });
    });

    $('#formphone').submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            let phone = $('input[type=tel]').val();
            if (phone.indexOf('_') === -1) {
                alert("Cпасибо! В ближайшее  время мы с Вами свяжемся!")
            } else { alert("Извините! Вы неправильно указали номер телефона! Попробуйте еще раз!") };
            $('.pop-containerphone').fadeOut(400, enableScroll);
        });
        return false;
    });
    $('#formmail').submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Cпасибо! В ближайшее  время мы с Вами свяжемся!");
            $('.pop-containermail').fadeOut(400, enableScroll);
        });
        return false;
    });





    $('.pop-containerphone, .pop-containermail').click(function(ev) {
        if (ev.target === this) {
            $(this).fadeOut(400, enableScroll);
        }
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("telephone").innerHTML = '<a href="tel: +79217575764">+79217575764</a>';
        document.getElementById("footer-telephone").innerHTML = '<a href="tel: +79217575764">+79217575764</a>';
    } else {
        document.getElementById("telephone").innerHTML = '+7 (921) 757-57-64';
        document.getElementById("footer-telephone").innerHTML = '+7 (921) 757-57-64';
    }


});
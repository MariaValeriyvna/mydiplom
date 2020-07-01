$(function() {

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
            1025: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        },

    });

    function disableScroll() {
        $('.page').css('overflow', 'hidden');
    }

    function enableScroll() {
        $('.page').css('overflow', 'visible');
    }
    $('.header-menu-burg').click(function() {
        $('.menu-burg-block').slideToggle(500);
        if ($(window).width() < 430) {
            $('.header-menu-burg__item:nth-child(1)').toggleClass('first');
            $('.header-menu-burg__item:nth-child(2)').toggleClass('middle');
            $('.header-menu-burg__item:nth-child(3)').toggleClass('last');
        } else {
            $('.header-menu-burg__item:nth-child(1)').toggleClass('first430');
            $('.header-menu-burg__item:nth-child(2)').toggleClass('middle');
            $('.header-menu-burg__item:nth-child(3)').toggleClass('last430');
        }

    });
    $('.imgphone, .header-telephone__btn,  .main-name-text__btn, .service__btn, .contact__btn').click(function() {
        $('.pop-container').css({ opacity: 1, display: 'flex' }).fadeIn(400, disableScroll());
        $('.pop-container__form-phone').css({ 'display': 'flex' }, 500);
        $('input[type=tel]').inputmask({
            "mask": " + 7(999) 999 - 99 - 99"
        });

    });
    $('.btn-mail').click(function() {
        $('.pop-container').css({ opacity: 1, display: 'flex' }).fadeIn(400, disableScroll());
        $('.pop-container__form-mail').css({ 'display': 'flex' }, 500);
        $('input[name=email]').inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        });
    });

    $('.form').submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            let phone = $('input[type=tel]').val();
            if (phone.indexOf('_') !== -1) {
                alert("Извините! Вы неправильно указали номер телефона! Попробуйте еще раз!")
            } else { alert("Cпасибо! В ближайшее  время мы с Вами свяжемся!") };
            $('.pop-container').fadeOut(400, enableScroll);
        });
        return false;
    });

    $('.pop-container').click(function(ev) {
        if (ev.target === this) {
            $(this).fadeOut(400, enableScroll);
            $('.form').css({ 'display': 'none' }, 500);
        }
    });

});
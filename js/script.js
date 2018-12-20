$('.slider').each(function() {
    let $this = $(this);
    let $group = $this.find('.slide_group');
    let $slides = $this.find('.slide');
    let bulletArray = [];
    let currentIndex = 0;
    let timeout;

    function move(newIndex) {
        let animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function() {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance() {
        clearTimeout(timeout);
        //generate random number between 10000ms and 1000ms for different delay of slider
        let time = Math.floor(Math.random() * ((10000 - 1000)+ 1)) + 1000;
        timeout = setTimeout(function() {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
            console.log(time + 'ms -  delay of slider')
        },10000000000000);
    }

    $('.next_btn').on('click', function() {
        if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
    });

    $('.previous_btn').on('click', function() {
        if (currentIndex !== 0) {
            move(currentIndex - 1);
        } else {
            move(3);
        }
    });

    $.each($slides, function(index) {
        let $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function() {
            move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
    });

    advance();
});

$('.slider1').each(function() {
    let $this = $(this);
    let $group = $this.find('.slide_group1');
    let $slides = $this.find('.slide1');
    let bulletArray = [];
    let currentIndex = 0;
    let timeout;

    function move(newIndex) {
        let animateLeft, slideLeft;

        advance1();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function() {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance1() {
        clearTimeout(timeout);
        //generate random number between 10000ms and 1000ms for different delay of slider
        let time = Math.floor(Math.random() * ((10000 - 1000)+ 1)) + 1000;
        timeout = setTimeout(function() {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
            console.log(time + 'ms - delay of slider 2')
        },10000000000000);
    }

    $.each($slides, function(index) {
        let $button = $('<a class="slide_btn1">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function() {
            move(index);
        }).appendTo('.slide_buttons1');
        bulletArray.push($button);
    });

    advance1();
});

$('.label').click(function () {

    let a = $('.checkName').val().length !==0;
    let b = $('.checkEmail').val().length !==0;
    let c = $('.checkMessage').val().length !==0;

    if (a && b && c){
        console.log('success');
        $('#push').removeAttr('disabled');
    }
    else {
        alert('Fill info')
    }
});

$( "#push" ).click(function() {

    let reg1 = /^[a-zA-Z0-9_-]{3,18}$/;
    let reg2 = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let reg3 = /^[a-zA-Z0-9_-]{6,100}$/;

    let log = $('.checkName').val();
    let check1 = reg1.test(log);

    if (check1) {}
    else{alert('Неправильно введене імя')}


    let msg = $('.checkMessage').val();
    let check2 = reg3.test(msg);
    if (check2) {}
    else{alert('Введіть коректне повідомлення ( від 6 до 100 символів)')}


    let emailcom = $('.checkEmail').val();
    let check3 = reg2.test(emailcom);
    if (check3) {}
    else{alert('Введіть коректний емейл')}

    let newUser = new User(log,msg,emailcom);

    localStorage.setItem('user1', JSON.stringify(newUser));

    function  User(log, msg, email) {
        this.log = log;
        this.msg = msg;
        this.email = email;
    }

    if (check1, check2, check3) {
        alert('Дякуємо за ваше повідомлення, ми обовязково з вами звяжемось');
        $('#form1').find("input[type=text], input[type=email], textarea").val("");
    }

});

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready

// breakpoint and up
    $(window).resize(function(){
        if ($(window).width() >= 1024){

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $( ".navbar .dropdown-menu" ).mouseleave(function() {
                $(this).removeClass("show");
            });


        }
    });


});

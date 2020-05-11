$(document).ready(function() {

        $("#home").click(function () {
            $('html,body').animate( { scrollTop: 0 }, 1100);
        });
    $("#services").click(function () {
        $('html, body').animate({
            scrollTop: $("#servicesscroll").offset().top
        }, 1100);
    });

    $("#skills").click(function () {
        $('html, body').animate({
            scrollTop: $("#skillsscroll").offset().top
        }, 1100);
    });

    $("#team").click(function () {
        $('html, body').animate({
            scrollTop: $("#teamscroll").offset().top
        }, 1100);
    });
    $("#clients").click(function () {
        $('html, body').animate({
            scrollTop: $("#clientsscroll").offset().top
        }, 1100);
    });
    $("#contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contactscroll").offset().top
        }, 1100);
    });

});

var name1 = document.getElementById('name');
var email = document.getElementById('email');

name1.onfocus = function () {
    this.style.border = '1px solid green';

    this.nextElementSibling.classList.remove('p');
    this.nextElementSibling.innerHTML = '';
};

name1.onblur = function () {
    if (!this.value) {
        this.style.border = '1px solid red';
        this.nextElementSibling.classList.add('p');
        this.nextElementSibling.innerHTML = 'поле должно быть заполнен';
    }
};

email.onfocus = function () {
    this.style.border = '1px solid green';
    this.nextElementSibling.classList.remove('p');
    this.nextElementSibling.innerHTML = '';
};

email.onblur = function () {
    if (!this.value) {
        this.style.border = '1px solid red';        this.nextElementSibling.classList.add('p');
        this.nextElementSibling.innerHTML = 'поле должно быть заполнен';
    }
};
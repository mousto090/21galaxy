/** import js */
import 'bootstrap';
import Swiper from 'swiper';
/** import css */
import 'swiper/dist/css/swiper.min.css';
// import '../css/style.css';
import '../scss/app.scss';



(function ($) {
    "use strict";
    var galaxyApp = {
        init: function () {
            this.navbar();
            this.initSwiper();
        },
        navbar: function () {
            var $navHeader = $('.galaxy-app-header');

            if (!$navHeader.length) {
                return;
            }
            var self = this;
            $(window).scroll(() => {
                self.toogleNavBar($navHeader)
            }).trigger('scroll');

            /**Navbar toggle */
            var $navbarToggler = $navHeader.find('.navbar-toggler')
            var $navbarCollapse = $navHeader.find('.navbar-collapse');
            $navbarToggler.click(() => {
                $navbarCollapse.toggleClass('navbar-open');
                const isNavbarOpen = $navbarCollapse.hasClass('navbar-open');
                $navbarToggler.attr('aria-expanded', isNavbarOpen);
                if (!isNavbarOpen) {
                    $navbarCollapse.addClass('navbar-closing-js')
                    setTimeout(() => {
                        $navbarCollapse.removeClass('navbar-closing-js')
                    }, 450);
                }
            });

            /**Navbar dropdown */
            var $dropdown = $navHeader.find('li.dropdown');
            $dropdown.hover(function () {
                var $this = $(this);
                $this.addClass('open')
            }, function () {
                var $this = $(this);
                $this.removeClass('open')
            });

            $dropdown.find('.caret-wrap').click(function(){
                var $this = $(this);
                var $currentDropdown = $this.closest('.dropdown');                
                $currentDropdown.toggleClass('open', !$currentDropdown.hasClass('open'));
            })
        },
        navbarFixed: false,
        /**
         * 
         * @param {Object} $navHeader 
         */
        toogleNavBar: function ($navHeader) {
            const navBarLimit = 75;
            if ($(window).scrollTop() > (navBarLimit)) {
                if (!this.navbarFixed) {
                    this.navbarFixed = true;
                    $navHeader.addClass('fixed-top').css({
                        'opacity': 0,
                        'top': -32
                    }).animate({
                        'opacity': 1,
                        'top': 0
                    }, 300);
                }
            }
            if ($(window).scrollTop() < (navBarLimit)) {
                if (this.navbarFixed) {
                    this.navbarFixed = false;
                    $navHeader.removeClass('fixed-top');
                }
            }
        },

        initSwiper: function () {
            var $swiperContainer = $('.g-swiper-section .g-swiper-container');
            if (!$swiperContainer.length) {
                return;
            }

            var swiper = new Swiper($swiperContainer, {
                spaceBetween: 0,
                loop: true,
                preloadImages: true,
                loopAdditionalSlides: 1,
                centeredSlides: true,
                speed: 800,
                // effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 3500,
                    // delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            $swiperContainer.hover(() => {
                swiper.autoplay.stop();
            }, () => {
                swiper.autoplay.start();
            });
        }

    }

    $(document).ready(function () {
        galaxyApp.init();
    });


})($);
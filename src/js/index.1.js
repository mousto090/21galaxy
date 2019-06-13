/**
 * Home page
 */

import './commons';
/** import css */
import 'swiper/dist/css/swiper.min.css';
/** import js */
import Swiper from 'swiper';
import ScrollMagic from 'scrollmagic';
import { CountUp } from 'countup.js';

var home = {
    init: function() {
        this.initScrollReveal();
        this.initSwiper();
    },

    initScrollReveal: function() {
        var controller = new ScrollMagic.Controller();
        const reavelables = [
            '.g-services .service-item', '.g-working-order ul li',
            '.g-about-u .about-u-item', '.g-partner .partner-item',
            '.g-blocks-secteurs .block-item'
        ];
        const classes = reavelables.join(',');

        $(classes).each(function(index, el) {
            $(el).addClass('g-revealable');
            const sr = new ScrollMagic.Scene({
                triggerElement: el,
                triggerHook: 0.9, // show, when scrolled 10% into view
            });

            sr.setClassToggle(el, "g-reveal")
                .reverse(false)
                .addTo(controller);
        });

    },

    /**
     * Initialize swiper instance
     */
    initSwiper: function() {
        var $swiperContainer = $('.g-swiper-section .g-swiper-container');
        if (!$swiperContainer.length) {
            return;
        }
        //hold CountUp instances in a slide 
        //(to avoid instanciate each time an instance)
        var countUpInstances = {};
        var self = this;
        var swiper = new Swiper($swiperContainer, {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 800,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            // effect: 'coverflow',
            // coverflowEffect: {
            //     rotate: 30,
            //     slideShadows: false,
            // },
            loop: true,
            preloadImages: true,
            loopAdditionalSlides: 1,
            // autoplay: {
            //     delay: 3500,
            //     // delay: 1000,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChangeTransitionEnd: function() {
                    const activeIndex = this.activeIndex;
                    var $slide = $(this.slides[activeIndex]);

                    $('.g-counter').removeClass('showed');
                    var $slideCounters = $slide.find('.g-slide-counters .g-counter-value');
                    if ($slideCounters.length) {
                        if (!countUpInstances[activeIndex]) {
                            countUpInstances[activeIndex] = [];
                        }
                        $slideCounters.each(function(index, el) {
                            var $el = $(el);
                            const endVal = $el.data('value');
                            $el.closest('.g-counter').addClass('showing');
                            setTimeout(() => {
                                if (!countUpInstances[activeIndex][index]) {
                                    var countUp = self.createCountUpInstance(el, endVal);
                                    countUpInstances[activeIndex].push(countUp);

                                } else {
                                    self.startCountUp(countUpInstances[activeIndex][index]);
                                }
                            }, index * 500);
                        });

                    }

                }
            }
        });

        //stop / start swiper on hover
        // $swiperContainer.hover(() => {
        //     swiper.autoplay.stop();
        // }, () => {
        //     swiper.autoplay.start();
        // });


    },
    /**
     * Create an instance of CountUp
     * @param {HTMLElement} target the counter container
     * @param {Number} endValue the counter value
     */
    createCountUpInstance: function(target, endValue) {
        const countUp = new CountUp(target, endValue, { duration: 2 });
        if (!countUp.error) {
            this.startCountUp(countUp);
            return countUp;
        }
        return null;
    },
    /**
     * Start / Restart counter up animation
     * @param {CountUp} countUpInstance An instance of counter up 
     */
    startCountUp: function(countUpInstance) {
        if (countUpInstance) {
            countUpInstance.reset();
            countUpInstance.start(() => {
                $(countUpInstance.target).closest('.g-counter')
                    .removeClass('showing')
                    .addClass('showed');
            });
        }
    }
};


$(document).ready(function() {
    home.init();
});
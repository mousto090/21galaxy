import 'bootstrap';
import '../scss/app.scss';
// import '../fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css';
var commons = {
    init: function() {
        this.navbar();
    },
    navbar: function() {
        var $navHeader = $('.galaxy-app-header');

        if (!$navHeader.length) {
            return;
        }
        var self = this;
        $(window).scroll(() => {
            self.toogleNavBar($navHeader);
        }).trigger('scroll');

        /**Navbar toggle */
        var $navbarToggler = $navHeader.find('.navbar-toggler');
        var $navbarCollapse = $navHeader.find('.navbar-collapse');
        $navbarToggler.click(() => {
            $navbarCollapse.toggleClass('navbar-open');
            const isNavbarOpen = $navbarCollapse.hasClass('navbar-open');
            $navbarToggler.attr('aria-expanded', isNavbarOpen);
            if (!isNavbarOpen) {
                $navbarCollapse.addClass('navbar-closing-js');
                setTimeout(() => {
                    $navbarCollapse.removeClass('navbar-closing-js');
                }, 450);
            }
        });

        $(document).click(function(e) {
            var $target = $(e.target);
            if ($target.closest('.navbar-collapse').length) {
                //inside navbar collapse, do nothing
                return;
            }
            var isNavbarToggler = ($target.is($navbarToggler) || $target.closest('.navbar-toggler').length);
            if ($navbarCollapse.hasClass('navbar-open') && !isNavbarToggler) {
                $navbarToggler.attr('aria-expanded', false);
                $navbarCollapse.removeClass('navbar-open');
            }
        });

        /**Navbar dropdown */
        var $dropdown = $navHeader.find('li.dropdown');

        $dropdown.click(function() {
            var $this = $(this);
            $dropdown.not($this).removeClass('open');
            $this.toggleClass('open', !$this.hasClass('open'));
        });
    },
    navbarFixed: false,
    /**
     * 
     * @param {Object} $navHeader 
     */
    toogleNavBar: function($navHeader) {
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
};

(function() {
    $(document).ready(function() {
        commons.init();
    });
})();

export default commons;
// module.exports = commons;
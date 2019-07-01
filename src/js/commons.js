import 'bootstrap';
import '../scss/app.scss';
var commons = {
    init: function() {
        this.navbar();
        this.collapsibleElement();
    },
    /**
     * Handle collapsible element in page content
     */
    collapsibleElement: function() {
        var $collapsibles = $('.g-collapsible-paragraph');
        if (!$collapsibles.length) {
            return;
        }

        $collapsibles.find('.title').click(function() {
            var $this = $(this);
            var $paragraph = $this.closest('.g-collapsible-paragraph');
            var $content = $paragraph.find('.content');
            $content.collapse('toggle');
        });

        $collapsibles.find('.content').on('show.bs.collapse', function() {
            $(this).closest('.g-collapsible-paragraph').addClass('content-shown');
        });

        $collapsibles.find('.content').on('hide.bs.collapse', function() {
            $(this).closest('.g-collapsible-paragraph').removeClass('content-shown');
        });
    },
    /**
     * Navbar envent manager
     */
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

        //make navbar menu active
        var menuPath = (window.location.pathname || '').trim();
        if (menuPath.length > 0) {
            var $menuItem = $navHeader.find(`a[href="${menuPath}"]`);
            $menuItem.addClass('active').closest('.nav-item').addClass('active');
        }


        //close navbar collapse
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
    /**
     * Allow stick and unstick navbar
     */
    navbarFixed: false,
    /**
     * 
     * @param {Object} $navHeader 
     */
    toogleNavBar: function($navHeader) {
        var navBarLimit = 75;
        // var $masthead = $('.g-masthead');
        // if ($masthead.length) {
        //     var height = $masthead.hasClass('small-height') ? 200 : $masthead.hasClass('medium-height') ? 350 : 0;
        //     // navBarLimit = height > 0 ? (height - navBarLimit) : navBarLimit;
        // }

        if ($(window).scrollTop() > (navBarLimit)) {
            if (!this.navbarFixed) {
                this.navbarFixed = true;
                // $navHeader.addClass('fixed-top').css({
                $navHeader.addClass('on-scroll').css({
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
                // $navHeader.removeClass('fixed-top');
                $navHeader.removeClass('on-scroll');
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
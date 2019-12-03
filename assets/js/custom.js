$('#banner').css({ 'height': $(window).height() });
var siteNav = jQuery('.top-fixed');
var topStatic = jQuery('.has-fixed-menu');
var mainNav = jQuery('.main-navigation');
var menuSecond = jQuery('.menu-style2')
jQuery(window).scroll(function () {
    "use strict";
    if (jQuery(this).scrollTop() > $('#banner').height()) {
        siteNav.addClass("navbar-fixed-top");
        siteNav.removeClass("navbar-static-top");
        topStatic.addClass("menu-margin");
    } else {
        siteNav.addClass("navbar-static-top");
        siteNav.removeClass("navbar-fixed-top");
        topStatic.removeClass("menu-margin");
    }
});
if ($(window).width() < 966) {
    mainNav.removeClass('top-fixed');
    mainNav.addClass('side-static');
    menuSecond.removeClass('container');
}
window.onresize = function (event) {
    if ($(window).width() < 966) {
        mainNav.removeClass('top-fixed');
        mainNav.addClass('side-static');
        menuSecond.removeClass('container');
    }
    else {
        mainNav.removeClass('side-static');
        mainNav.addClass('top-fixed');
        menuSecond.addClass('container');
    }
    
};

jQuery(".menu-switch").click(function () { "use strict"; $(this).toggleClass("open"); $("#site-navigation").toggleClass("extend"); }); jQuery(function () { "use strict"; $('#site-navigation ul li a[href^="#"]').click(function () { if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); if (target.length) { $('html,body').animate({ scrollTop: target.offset().top }, 1000); return false; } } }); }); $('.transparent-section').each(function () { var sectionImage = $(this).data('image'); var sectionColor = $(this).data('color'); var sectionTransparency = $(this).data('transparency'); var transparency = sectionColor + ', ' + sectionTransparency; $(this).css({ 'background-image': 'url(' + sectionImage + ')' }); $(this).css({ 'background-color': 'rgb(' + sectionColor + ')' }); $(this).children('.transparent-content').css({ 'background-color': 'rgba(' + transparency + ')', 'width': '100%', 'height': '100%', }); }); jQuery("#banner").parallax("50%", 0.5); $('.pro-skills').each(function () { var proWidth = $(this).data('progress'); $(this).css({ 'width': proWidth }); }); $(function () { "use strict"; var $container = $('.portfolio-items').isotope({ itemSelector: '.portfolio-item', layoutMode: 'masonry' }); $('#portfolio-filters').on('click', 'button', function () { var filterValue = $(this).attr('data-filter'); $container.isotope({ filter: filterValue }); }); $('.button-group').each(function (i, buttonGroup) { var $buttonGroup = $(buttonGroup); $buttonGroup.on('click', 'button', function () { $buttonGroup.find('.active').removeClass('active'); $(this).addClass('active'); }); }); }); (function ($) {
    "use strict"; var defaultOptions = { frameRate: 150, animationTime: 1200, stepSize: 120, pulseAlgorithm: !0, pulseScale: 8, pulseNormalize: 1, accelerationDelta: 20, accelerationMax: 1 }, options = defaultOptions, direction = { x: 0, y: 0 }, root = 0 <= document.compatMode.indexOf("CSS") || !document.body ? document.documentElement : document.body, que = [], pending = !1, lastScroll = +new Date; function scrollArray(a, b, c, d) {
        d || (d = 1E3); directionCheck(b, c); if (1 != options.accelerationMax) {
            var e = +new Date - lastScroll; e < options.accelerationDelta && (e = (1 + 30 / e) / 2, 1 < e && (e = Math.min(e, options.accelerationMax), b *= e, c *= e));
            lastScroll = +new Date
        }
        que.push({ x: b, y: c, lastX: 0 > b ? 0.99 : -0.99, lastY: 0 > c ? 0.99 : -0.99, start: +new Date }); if (!pending) {
            var q = a === document.body, p = function (e) {
                e = +new Date; for (var h = 0, k = 0, l = 0; l < que.length; l++) { var f = que[l], m = e - f.start, n = m >= options.animationTime, g = n ? 1 : m / options.animationTime; options.pulseAlgorithm && (g = pulse(g)); m = f.x * g - f.lastX >> 0; g = f.y * g - f.lastY >> 0; h += m; k += g; f.lastX += m; f.lastY += g; n && (que.splice(l, 1), l--) }
                q ? window.scrollBy(h, k) : (h && (a.scrollLeft += h), k && (a.scrollTop += k)); b || c || (que = []); que.length ? requestFrame(p, a, d / options.frameRate + 1) : pending = !1
            }; requestFrame(p, a, 0); pending = !0
        }
    }
    function wheel(a) { var b = overflowingAncestor(a.target); if (!b || a.defaultPrevented) return !0; var c = a.wheelDeltaX || 0, d = a.wheelDeltaY || 0; c || d || (d = a.wheelDelta || 0); 1.2 < Math.abs(c) && (c *= options.stepSize / 120); 1.2 < Math.abs(d) && (d *= options.stepSize / 120); scrollArray(b, -c, -d); a.preventDefault() }
    var cache = {}; setInterval(function () { cache = {} }, 1E4); var uniqueID = function () { var a = 0; return function (b) { return b.uniqueID || (b.uniqueID = a++) } }(); function setCache(a, b) { for (var c = a.length; c--;) cache[uniqueID(a[c])] = b; return b }
    function overflowingAncestor(a) { var b = [], c = root.scrollHeight; do { var d = cache[uniqueID(a)]; if (d) return setCache(b, d); b.push(a); if (c === a.scrollHeight) { if (root.clientHeight + 10 < c) return setCache(b, document.body) } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return setCache(b, a) } while (a = a.parentNode) }
    function directionCheck(a, b) { a = 0 < a ? 1 : -1; b = 0 < b ? 1 : -1; if (direction.x !== a || direction.y !== b) direction.x = a, direction.y = b, que = [], lastScroll = 0 }
    var requestFrame = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (a, b, c) { window.setTimeout(a, c || 1E3 / 60) } }(); function pulse_(a) { var b; a *= options.pulseScale; 1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), a = 1 - Math.exp(-(a - 1)), b += a * (1 - b)); return b * options.pulseNormalize }
    function pulse(a) { if (1 <= a) return 1; if (0 >= a) return 0; 1 == options.pulseNormalize && (options.pulseNormalize /= pulse_(1)); return pulse_(a) }
    window.addEventListener("mousewheel", wheel, !1);
})();
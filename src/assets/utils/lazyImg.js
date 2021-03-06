
"use strict";
var lazyImg = {
    offset: function (t) {
        for (var e = t.offsetTop, o = t.offsetLeft; t.offsetParent;) t = t.offsetParent, window.navigator.userAgent.indexOf("MSTE 8") > -1 ? (e += t.offsetTop, o += t.offsetLeft) : (e += t.offsetTop + t.clientTop, o += t.offsetLeft + t.clientLeft);
        return {
            left: o,
            top: e
        }
    },
    start: function () {
        var t = this,
            e = Array.prototype.slice.call(window.document.querySelectorAll(".lazyImg"));
        this.imgListForEach(e), window.addEventListener("scroll", lazyImg.imgListForEach.bind(t))
    },
    imgListForEach: function () {
        for (var t = Array.prototype.slice.call(window.document.querySelectorAll(".lazyImg")), e = this, o = 0; o < t.length; o++) {
            var i = t[o];
            if (e.checkInView(i)) {
                var n = i.getAttribute("data-src");
                i.setAttribute("src", n), i.onload = function () {
                    i.setAttribute("data-state", "loaded")
                }, t.splice(o, 1), o--
            }
        }
    },
    checkInView: function (t) {
        var e = window.innerHeight,
            o = document.body.scrollTop || document.documentElement.scrollTop,
            i = t.clientHeight ? t.clientHeight : t.parentNode.clientHeight,
            n = this.offset(t).top;
        return n >= o && n <= o + e || n < o && n + i > o && n + i < o + e
    }
};
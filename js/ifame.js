(function() {

    var body = document.body;
    var parent = window.parent;

    if (parent && ("createEvent" in document)) {

        var isoldie = ("documentMode" in document);  // 11-
        var ismsedge = ("msCredentials" in window);  // MS Edge 14+

        function onwheel(e) {

            var evt = document.createEvent("MouseEvents");
            evt.initEvent('wheel', true, true);
            evt.deltaMode = e.deltaMode;
            evt.deltaX = e.deltaX;
            evt.deltaY = e.deltaY;
            evt.deltaZ = e.deltaZ;
            evt.wheelDelta = e.wheelDelta;
            evt.wheelDeltaX = e.wheelDeltaX;
            evt.wheelDeltaY = e.wheelDeltaY;

            //如果父页面是$('html').niceScroll();用这个
            //parent.dispatchEvent(evt);

            //如果要使父页面的某个滚动条触发，则用下面这个，id换一下
            parent.document.getElementById('content-right').dispatchEvent(evt);
        }

        body.addEventListener("wheel",onwheel);

    }

})();
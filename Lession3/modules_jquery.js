//CounterService
(function() {
var i = 0;
function get() {
    return i;
};

function increment() {
    return ++i;
}
})();



var counterService = {};
(function(exports) {
    var i = 0;
    exports.get = function get() {
        return i;
    };

    exports.increment = function increment() {
        return ++i;
    };

})(counterService);



//How to jquery plugin
(function($) {
    var counter = 0;
    $.fn.identify = function(options) {
        var settings = $.extend({
            prefix: 'test-'
        }, options);
        this.each(function() {
            this.id = settings.prefix + (++counter);
        });
    };
})(jQuery);

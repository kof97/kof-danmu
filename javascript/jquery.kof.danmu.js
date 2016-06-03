(function($) {

    $.fn.danmu = (function(opt) {

        var conf = $.extend({}, {
            width: 500,
            height: 300,
        }, opt),

        obj = $(this),
        
        init = function(conf) {
            var inner = '' + 
                '<section id="data-danmu"></section>' + 
                '<div id="data-send">' +
                    '<form action="" id="data-submit">' +
                        '<select id="data-size">' +
                            '<option value ="20">20</option>' +
                            '<option value ="24">24</option>' +
                            '<option value ="26">26</option>' +
                            '<option value ="32">32</option>' +
                        '</select>' +
                        '<input type="color" id="data-color"><br>' +
                        '<input type="text" id="data-msg" required>' +
                        '<input class="submit" type="submit" value="send">' +
                    '</form>' + 
                '</div>' + 
                '<style>' +
                    '#data-danmu { position: relative; overflow: hidden; display:inline-block; width: 100%; height: 100%; box-shadow: 2px 2px1px #888888; border: solid 1px #CDD7E2; }' +
                    '#data-danmu span { position: absolute; display: inline-block; fon-weight: bold; }' + 
                    '#data-send { width: 100%; margin: 2px 0; }' +
                    '#data-send input { height: 1.4em; font-size: 1.2em; margin: 2px 0; vertical-align: middle; }' +
                    '#data-send #data-size { width: 4em; height: 2em; }' +
                    '#data-send #data-color { margin: 0 5px; }' +
                    '#data-send #data-msg { width: 80%; padding: 2px 0; }' +
                    '#data-send .submit { height: 1.7em; width: 18%; float: right; }' +
                '</style>';

            obj.append(inner);
            obj.width(conf.width);
            obj.height(conf.height);

        },

        run = function() {

            init(conf);

            obj.on('submit', function() {

                // 参数配置
                var width = $("#data-danmu").width(),
                    height = $("#data-danmu").height(),
                    msg = $("#data-msg").val(),
                    color = $("#data-color").val(),
                    size = $("#data-size").val() + "px",
                    top = (function() {
                        var t = Math.random() * height;
                        return t > height - 30 ? height - 40 : t;
                    }()),
                    left = (function() {
                        return width + 5;
                    }()),
                    id = (function() {
                        var text = "";
                        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                        for ( var i = 0; i < 32; i++ ) {
                            text += possible.charAt(Math.floor(Math.random() * possible.length));
                        }
                        return text;
                    }()),
                    content = "<span class='" + id + "' style='top:" + top + "px; color:" + color + "; left:" + left + "px; font-size:" + size + ";'>" + msg + "</span>";

                // append
                $("#data-danmu").append(content);

                // animate
                var w = width * 1.5;
                $("#data-danmu ." + id).animate({left: "-" + w + "px"}, 6000, function() {
                    $(this).remove();
                });

                $("#data-msg").val("");

                return false;

            });

        };
            
        return run();

    }); 

})(jQuery);  

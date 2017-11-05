document.addEventListener("turbolinks:load", function() {

  console.log("Loading service.js");

    $(function() {

        var $sidebar   = $("#side-nav"), 
            $nav_icon  = $("#nav-icon"),
            $window    = $(window),
            offset     = $sidebar.offset(),
            offset2    = $nav_icon.offset(),
            topPadding = 15;

        $window.scroll(function() {
            if ($window.scrollTop() > offset.top && $window.scrollTop() > offset2.top ) {
                $sidebar.stop().animate({
                    marginTop: $window.scrollTop()
                }, 50, function(){

                });
                $nav_icon.stop().animate({
                    marginTop: $window.scrollTop()
                }, 50, function(){

                });
            } else {
                $sidebar.stop().animate({
                    marginTop: 0
                }, 50, function(){

                });
                $nav_icon.stop().animate({
                    marginTop: 0
                }, 50, function(){

                });
            }
        });
        
    });
});
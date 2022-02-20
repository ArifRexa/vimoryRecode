$().ready(() => {
    $('ul.parent > li > a').hover(function () {
        $(this).find('ul.child').show(200)

    }, function() {
        $(this).find('ul.child').hide(200)

    })

    $('.play').click(function () {
        if($(this).parent().prev().get(0).paused){
            $(this).parent().prev().get(0).play();
            // If blur effect needed
            // $(this).parent().prev().removeClass('blurEffect'); 
            $(this).parent().prev().prop("controls",true);
            $('.content').hide();
        }
    });

    $('.video').on('ended',function(){
        // If blur effect needed
        // $(this).addClass('blurEffect');
      $('.content').show();
    });


    function afterText() {
        var txt1 = "<b>I </b>";           // Create element with HTML
        var txt2 = $("<i></i>").text("love ");  // Create with jQuery
        var txt3 = document.createElement("b");   // Create with DOM
        txt3.innerHTML = "jQuery!";
        $("img").after(txt1, txt2, txt3);    // Insert new elements after img
      }


})


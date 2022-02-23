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


    
    $('.id1').click(function () {
        $(this).addClass('active')
        $('.comments2, .comments3, .comments4, .comments5, .comments6').hide()
        $('.comments1').show()
        $('.id2, .id3, .id4, .id5, .id6').removeClass('active')
          
    })
    $('.id2').click(function () {
        $(this).addClass('active')
        $('.comments1, .comments3, .comments4, .comments5, .comments6').hide()
        $('.comments2').show()
        $('.id1, .id3, .id4, .id5, .id6').removeClass('active')
         
    })
    $('.id3').click(function () {
        $(this).addClass('active')
        $('.comments1, .comments2, .comments4, .comments5, .comments6').hide()
        $('.comments3').show()
        $('.id2, .id1, .id4, .id5, .id6').removeClass('active')
        
    })
    $('.id4').click(function () {
        $(this).addClass('active')
        $('.comments1, .comments2, .comments3, .comments5, .comments6').hide()
        $('.comments4').show()
        $('.id2, .id3, .id5, .id6').removeClass('active')
         
    })
    $('.id5').click(function () {
        $(this).addClass('active')
        $('.comments1, .comments3, .comments4, .comments2, .comments6').hide()
        $('.comments5').show()
        $('.id2, .id1, .id3, .id4, .id6').removeClass('active')
        
    })
    $('.id6').click(function () {
        $(this).addClass('active')
        $('.comments1, .comments3, .comments4, .comments5, .comments2').hide()
        $('.comments6').show()
        $('.id1, .id2, .id3, .id4, .id5').removeClass('active')
        
    })


    


})


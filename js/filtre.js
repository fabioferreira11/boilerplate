$( document ).ready(function() {


    
    //     $(".filtres a").on('click', function(e){
    //         e.preventDefault();
    //         $(".filtres a").removeClass('current')
    //         $(this).addClass('current')
    
    //         var section =$(this).attr('data-class');
    
    //         console.log(section);

    //         if(section == '*'){
    //             $('article').show();
    //         }else {
    
    //         $('article').show();
    //         $('article:not("'+section+'")').hide();        
    //       } 
    // });// click 

    $(".filtres a").on('click', function(e){
        e.preventDefault();
        $(".filtres a").removeClass('current')
        $(this).addClass('current')

        var section =$(this).attr('data-class');

        console.log(section);

        if(section == '*'){
            $('article').fadeOut()
            gsap.to("article", {
                stagger: 0.1,
                y:0,
                delay:1,
                display:"block",
                });
        }else {

        $('article').fadeOut();
        $('article'+section).delay(500).fadeIn();        
      } 
});// click 


   

    // $("#web").on('click', function(e){
    //     e.preventDefault();
    //      console.log('ok')
    //     $('article').show();
    //     $('article:not(\".web\")').hide();
        
    //   });// click 

    //   $("#troisd").on('click', function(e){
    //     e.preventDefault();
    //     $('article').show();
    //     $('article:not(\".troisd\")').hide();
        
    //   });// click 

    //   $("#edition").on('click', function(e){
    //     e.preventDefault();
    //     $('article').show();
    //     $('article:not(\".edition\")').hide();
        
    //   });// click 

    //   $("#tout").on('click', function(e){
    //     e.preventDefault();
    //     $('article').show();
        
    //   });// click 

 });//ready






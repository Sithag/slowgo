$(".Choices").click(function(){
    console.log('Choix effectué')
    
    // console.log($(this).attr("id"))
    l = $(this).attr("id");
    logos = Database[l[0]];
    // console.log(logos);
    $("#First_screen").hide();
    console.log(Choices[l])
    console.log(Choices[l].img);
    
    $("#transition").show();
    transition_screen()
});


    $("#start").click(function(){
        $("#transition").hide();
        Start_Game();
        Timer(); 

    })


function transition_screen(){
    console.log(Choices[l])
    console.log(Choices[l].img);
    $("#transition_image").attr( 'src', ""+ Choices[l].img +"")
    $('#description').html(Choices[l].description);
};


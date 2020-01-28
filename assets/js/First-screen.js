$(".Choices").click(function(){
    console.log('Choix effectué')
    // console.log($(this).attr("id"))
    l = $(this).attr("id");
    logos = Database[l[0]];
    // console.log(logos);
    $("#First_screen").hide();
    console.log(Choices[l])
    $("#transition").show();

});


    $("#start").click(function(){
        $("#transition").hide();
        Start_Game();
        Timer(); 

    })

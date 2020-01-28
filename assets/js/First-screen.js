$(".Choices").click(function(){
    console.log('Choix effectué')
    // console.log($(this).attr("id"))
    l = $(this).attr("id");
    logos = Database[l[0]];
    // console.log(logos);
    start_game = true;
    $("#First_screen").hide();
    Start_Game();
    Timer(); 
});
    
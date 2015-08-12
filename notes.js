$(document).on("keydown", function(event){
    if(event.which === 71){
    $('#key1').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>')
    console.log(event.which)
    }

    else if(event.which === 72){
       $('#key2').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>')
    console.log(event.which) 
    }
})
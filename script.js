$(document).ready(function(){ 
    /*
    var allowed71 = true;

    $(document).keydown(function(){
        if(!allowed71) return;
        allowed71 = false;
        $('#sound').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>');
        console.log("fuck");                                   
        });

    $(document).keyup(function(){
        $('#sound').html('');
        console.log("fuck");                                   
        allowed71 = true;
    });
    */
//-------function maybe fucked---

var allowed71 = true;
var allowed72 = true;
//var allowed69 = true;


var keyass =function(num,keyid,aliveNum){
    console.log(keyid)

    if(event.which === num){
        if(!aliveNum) return;


     console.log(aliveNum);
         
        aliveNum = false;

   $('keyid').html('fuck');

        //$('keyid').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>')
        console.log(event.which)


        $(document).on("keyup", function(event){
            if(event.which === num){            
            //$('#key1').html('')



            //------

            $('keyid').html('fuck');
            //-------           
            console.log(event.which)
            aliveNum = true;
            }
        })
    }

}












//-------------------end function

//--------------------together--------------------
//var allowed71 = true;
//var allowed72 = true;
var allowed69 = true;

$(document).on("keydown", function(event){

    //letter e
    //keyass(69,'#key3','allowed69')
    

    if(event.which === 71){
        if(!allowed71) return;
        allowed71 = false;

        $('#key1').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>')
        console.log(event.which)


        $(document).on("keyup", function(event){
            if(event.which === 71){            
            //$('#key1').html('')

            //------

            $('#key1').html('');
            //-------           
            console.log(event.which)
            allowed71 = true;
            }
        })
    }

//------------------------------------------------------
    if(event.which === 72){
        if(!allowed72) return;
        allowed72 = false;

        $('#key2').html('<audio autoplay> <source src="sounds/notes/G4.mp3" type="audio/mpeg"></audio>')
        console.log(event.which)


        $(document).on("keyup", function(event){
            if(event.which === 72){
            $('#key2').html('')
            console.log(event.which)
            allowed72 = true;
            }
        })
    }    
//-------------------------------------------------
/*
    else if(event.which === 72){
       $('#key2').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>')
    console.log(event.which) 
    }
    */
//--------------------------------------------------------
})



//--------------------together-end------------------



/*
//---------------------------------------------------  
        $(document).keydown(function(key){
            switch(parseInt(key.which)){
               
                //70 = f key
                case 70:
                    $('#sound').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>');
                         console.log("fuck");                                   
                break;

                //71 = g key
                case 71:
                    $('#sound').html('<audio autoplay> <source src="sounds/notes/G4.mp3" type="audio/mpeg"></audio>');
                break;
               
            }
        });
//-------------------------------------------------













//------------------------------------------------- 

 */



var keytest = '#key2'
var codetest = 71
var allowtest = "allow71"
var testfunk =function(keyz,keycode,allow){
    console.log(keyz)
    console.log(keycode)
    console.log(allow)
}
testfunk(keytest, codetest, allowtest)


});
/*
$(document).on("keyup", function(event){
    if(event.which === 71){
    $('#key1').html('')
    console.log(event.which)
    }
})
*/





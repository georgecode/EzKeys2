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



    var keyass =function(num,keyid,aliveNum){
    //console.log(num)
    //console.log(keyid)
    console.log(aliveNum)
    

        if(!aliveNum) return; 
        aliveNum = false;

    console.log(aliveNum)    

   $(keyid).html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>');
        

        //$('keyid').html('<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>')
        //console.log(event.which)


        $(document).on("keyup", function(event){
            if(event.which === num){            
            //$('#key1').html('')



            //------

            $(keyid).html('');
            //-------           
            //console.log(event.which)
            aliveNum = true;
            }
        })
    


}













//-------------------end function

//--------------------together--------------------
var allowed71 = true;
var allowed72 = true;
var allowed69 = true;

$(document).on("keydown", function(event){



        //letter e
    if(event.which === 69){
    keyass(69,'#key3',allowed69)
    }
    if(event.which === 71){
    keyass(71,'#key1',allowed71)
    }
    //keyass(72,'#key2', 'allowed72')
    
/*-------test test test-------
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
    --------------test test test------------- */ 


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


/*--------
var keytest = '#key5'
var codetest = 71
var allowtest = "allow71"
var testfunk =function(keyz,keycode,allow){
    console.log(keyz)
    console.log(keycode)
    console.log(allow)
    $().html('hello')
}
testfunk(keytest, codetest, allowtest)--------*/


});
$(document).ready(function(){
//Testing LoadPopBug branch
//document.getElementById('B4').play()
//$('#B4').animate({volume: 0.1}, 500)

//2.This function constructs the mp3 HTML5 audio tags and content
	var sound = function(note){
	 //return '<audio id=' +note+ '> <source src="sounds/notes/' + note + '.mp3" type="audio/mpeg"></audio>'
 var x = 'sounds/notes/' + note + '.mp3'
 var z = note
	var audioNote = document.createElement('audio');
    audioNote.setAttribute('src', x)//; 'type'="audio/mpeg"; 'id', "'"note"'";);
	audioNote.setAttribute('id', z)
	console.log(audioNote)



	}
	
	//console.log (sound('C4'))//Use this for Debugging
//2.End----------------------

//C Cx D Dx E F Fx G Gx A Ax B

	var C3 = sound('C3')
	var Cx3 = sound('Cx3')
	var D3 = sound('D3')
	var Dx3 = sound('Dx3')
	var E3 = sound('E3')
	var F3 = sound('F3')
	var Fx3 = sound('Fx3')
	var G3 = sound('G3')
	var Gx3 = sound('Gx3')
	var A3 = sound('A3')
	var Ax3 = sound('Ax3')
	var B3 = sound('B3')

	var C4 = sound('C4')
	var Cx4 = sound('Cx4')
	var D4 = sound('D4')
	var Dx4 = sound('Dx4')
	var E4 = sound('E4')
	var F4 = sound('F4')
	var Fx4 = sound('Fx4')
	var G4 = sound('G4')
	var Gx4 = sound('Gx4')
	var A4 = sound('A4')
	var Ax4 = sound('Ax4')
	var B4 = sound('B4')
	


//$( ".AllMp3s" ).append(C3, Cx3, D3, Dx3, E3, F3, Fx3, G3, Gx3, A3, Ax3, B3, C4, Cx4, D4, Dx4, E4, F4, Fx4, G4, Gx4, A4, Ax4, B4);

//1. This object contains the arrays of sound clips for each key
//	musical key (The key of whatever)
	var keys = {
		em: ['E3', 'G3', 'A3', 'B3', 'D4', 'E4', 'G4', 'A4', 'B4'],
		//em: [E3, G3, A3, B3, D4, E4, G4, A4, B4],
		fm: ['Dx3','F3', 'Gx3', 'Ax3','C4','Dx4','F4','Gx4','Ax4'],
		fxm: ['E3', 'Fx3','A3', 'B3','Cx4','E4','Fx4','A4', 'B4'],
		gm: ['D3','F3','G3','Ax3','C4','D4','F4','G4','Ax4'],
		gxm: ['Dx3','Fx3','Gx3','B3','Cx4','Dx4','Fx4','Gx4','B4'],
		am: ['C3','D3','E3','G3','A3','C4','D4','E4','G4'],
		axm: ['Cx3','Dx3','F3','Gx3','Ax3','Cx4','Dx4','F4','Gx4'],
		bm: ['D3','E3','Fx3','A3','B3','D4','E4','Fx4','A4'],
		cm: ['C3','Dx3','F3','G3','Ax3','C4','Dx4','F4','G4'],
		cxm: ['Cx3','E3','Fx3','Gx3','B3','Cx4','E4','Fx4','Gx4'],
		dm: ['D3','F3','G3','A3','C4','D4','F4','G4','A4'],
		dxm: ['Dx3','Fx3','Gx3','Ax3','Cx4','Dx4','Fx4','Gx4','Ax4']
	}
	//console.log(keys.em[2]) 
//1.End----------------------




//3.This function is used to assign a key a sound
//  and prevent the default re-triggering of a key
//	before it is released

                 //work('65a', 65, '.key1', n[0], 'A')

	var work = function(allowed,num,keyid,tone,letter){

		var allowed = true;

		$(document).on("keydown", function(xevent){
		    

		    if(xevent.which === num){
		        if(!allowed) return;
		        allowed = false;

		        $(keyid).addClass('keyIsDown')
		        //$(keyid).html(letter + tone)
		          //audioId = tone
		          //console.log(audioId)
		          console.log(tone)		       		         
		          document.getElementById(tone).play();

		        console.log(xevent.which)


		        $(document).on("keyup", function(xevent){

		            if(xevent.which === num){            
		            //$(keyid).html(letter)//Use for Testing		           
		            audioId = "#" + tone
		            var damn =audioId.toString()	
		            console.log(damn)
		            //document.getElementById(tone).pause()
		            //document.getElementById(tone).animate({volume: 0.1}, 500)	       		         
		         	$('#B4').animate({volume: 0.1}, 500);
		            $(keyid).removeClass('keyIsDown')

		            allowed = true;
		            }
		        })
		    }

		})

		//This is the start of mouse trigger function
		
		//$(keyid).on('tap', function(){
		// 	$(this).html(letter + sound(tone))
		// })


		$(keyid).on('mouseenter', function(){
		 	$(this).html(letter + sound(tone))
		 })
		
		 $(keyid).on('mouseleave', function(){
		 	//$(this).html(letter)
		 	audioId = "#" + tone		       		         
		    $(audioId).animate({volume: 0.1}, 500);
		 })
		 
		 //$(keyid).on ('vmouseup', function(){
		 //	$(this).html(letter)
		 //})
		
	}
//3.End-----------------------




//work(allowed,num,keyid,tone,letter)<<function arugments

//4. This creates a set of notes and assigns keys 
//  for each musical key
	var keySelection =function(setOfNotes){

		//console.log(setOfNotes)//use this for debugging musically wrong notes
		var n = setOfNotes

	//work('65a', 65, '.key1', 'E3')

	work('65a', 65, '.key1', n[0], 'A')
	work('83s', 83, '.key2', n[1], 'S')
	work('68d', 68, '.key3', n[2], 'D')
	work('70f', 70, '.key4', n[3], 'F')
	work('71g', 71, '.key5', n[4], 'G')
	work('72h', 72, '.key6', n[5], 'H')
	work('74j', 74, '.key7', n[6], 'J')
	work('75k', 75, '.key8', n[7], 'K')
	work('76l', 76, '.key9', n[8], 'L')
	}
//4.End---------------------

	
keySelection(keys.em)
	

//5.This is the menu used to make a musical key selection
	//For Testing 
	//$('.em').on("click", function(){
	//	keySelection(keys.em)
	//})
	

var assignNotesToKey = function(ScaleKey){
	$(ScaleKey).on("click", function(){
			keySelection(keys[$(this).attr('class')])
	})		   
}
 assignNotesToKey(".em")
 assignNotesToKey(".fm")
 assignNotesToKey(".fxm")
 assignNotesToKey(".gm")
 assignNotesToKey(".gxm")
 assignNotesToKey(".am")
 assignNotesToKey(".axm")
 assignNotesToKey(".bm")
 assignNotesToKey(".cm")
 assignNotesToKey(".cxm")
 assignNotesToKey(".dm")
 assignNotesToKey(".dxm")

//5.End--------------------

})//----------end of document------
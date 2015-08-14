$(document).ready(function(){

//1.This function constructs the mp3 HTML5 audio tags and content
	var sound = function(note){
	 return '<audio autoplay> <source src="sounds/notes/' + note + '.mp3" type="audio/mpeg"></audio>'
	}
	
	console.log (sound('C4'))
//1.End----------------------

//2.This function is used to assign a key a sound
//  and prevent the default re-triggering of a key
//	before it is released

	var work = function(allowed,num,keyid,tone,letter){

		var allowed = true;

		$(document).on("keydown", function(xevent){
		    

		    if(xevent.which === num){
		        if(!allowed) return;
		        allowed = false;

		        $(keyid).addClass('keyIsDown')
		        $(keyid).html(letter + sound(tone))
		        console.log(xevent.which)


		        $(document).on("keyup", function(xevent){

		            if(xevent.which === num){            

		            $(keyid).html(letter);
		            $(keyid).removeClass('keyIsDown')

		            allowed = true;
		            }
		        })
		    }

		})
	}
//2.End-----------------------

//3. This object contains the arrays of sound clips for each key
//	musical key (The key of X)
	var keys = {
		em: ['E3', 'G3', 'A3', 'B3', 'D4','E4','G4','A4','B4'],
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
	console.log(keys.em[2]) 
//3.End----------------------



//work(allowed,num,keyid,tone)<<function arugments

//4. This creates a set of notes and assigns keys 
//  for each musical key
	var keySelection =function(setOfNotes){

		console.log(setOfNotes)//use this for debugging musically wrong notes
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


	/*  Possible function notes for version 3.0
	$('.em').on("click", function(){
		var xxclass = $(this).attr('class');
		console.log(xxclass)
		$(function(){
			console.log(xxclass)
			var classKey = "keys." + xxclass
			console.log(classKey)
			keySelection(classKey)
		})
	})
	*/

	keySelection(keys.em)

//5.This is the menu used to make a musical key selection

	$('.em').on("click", function(){
		keySelection(keys.em)
	})

	$('.fm').on("click", function(){
		keySelection(keys.fm)
	})

	$('.fxm').on("click", function(){
		keySelection(keys.fxm)
	})

	$('.gm').on("click", function(){
		keySelection(keys.gm)
	})

	$('.gxm').on("click", function(){
		keySelection(keys.gxm)
	})

	$('.am').on("click", function(){
		keySelection(keys.am)
	})

	$('.axm').on("click", function(){
		keySelection(keys.axm)
	})

	$('.bm').on("click", function(){
		keySelection(keys.bm)
	})

	$('.cm').on("click", function(){
		keySelection(keys.cm)
	})

	$('.cxm').on("click", function(){
		keySelection(keys.cxm)
	})

	$('.dm').on("click", function(){
		keySelection(keys.dm)
	})

	$('.dxm').on("click", function(){
		keySelection(keys.dxm)
	})
//5.End--------------------


})//----------end of document------
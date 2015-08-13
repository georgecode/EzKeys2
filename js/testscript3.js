$(document).ready(function(){


	var sound = function(note){
	 return '<audio autoplay> <source src="sounds/notes/' + note + '.mp3" type="audio/mpeg"></audio>'
	}
	
	console.log (sound('C4'))


//'<audio autoplay> <source src="sounds/notes/C4.mp3" type="audio/mpeg"></audio>'

	var work = function(allowed,num,keyid,tone){

		var allowed = true;

		$(document).on("keydown", function(xevent){
		    

		    if(xevent.which === num){
		        if(!allowed) return;
		        allowed = false;

		        $(keyid).addClass('keyIsDown')
		        $(keyid).html(sound(tone))
		        console.log(xevent.which)


		        $(document).on("keyup", function(xevent){

		            if(xevent.which === num){            

		            $(keyid).html('');
		            $(keyid).removeClass('keyIsDown')

		            allowed = true;
		            }
		        })
		    }

		})
	}


	var keys = {
	

		//C D E F G A B, CDEFGAB

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



/*
work(allowed,num,keyid,tone)
*/
var keySelection =function(setOfNotes){

	console.log(setOfNotes)
	var n = setOfNotes

//work('65a', 65, '.key1', 'E3')

work('65a', 65, '.key1', n[0])
work('83s', 83, '.key2', n[1])
work('68d', 68, '.key3', n[2])
work('70f', 70, '.key4', n[3])
work('71g', 71, '.key5', n[4])
work('72h', 72, '.key6', n[5])
work('74j', 74, '.key7', n[6])
work('75k', 75, '.key8', n[7])
work('76l', 76, '.key9', n[8])
}

keySelection(keys.em)

/*
$('.em').on("click", function(){
	var notexx = $(this).attr('class');
	console.log(notexx)
	$(function(){
		console.log(notexx)
		var fuck = "keys." + notexx
		console.log(fuck)
		keySelection(fuck)
	})
	
	//keySelection(keys.em)
})
*/
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



//keySelection(keys.em)

//work('72h',72, '.key9', 'C4')


})//----------end of document------
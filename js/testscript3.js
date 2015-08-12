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
		
		eMinor: ['E3', 'G3', 'A3', 'B3', 'D4','E4','G4','A4','B4']

	}
	console.log(keys.eMinor[2]) 



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

keySelection(keys.eMinor)

//work('72h',72, '.key9', 'C4')


})//----------end of document------
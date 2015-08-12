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

/*
	var keys = {
		eMinor: ['E3', 'G3', 'A3', 'B3', 'D4','E4','G4','A4','B4'],
		XXXXXX: ['', '', '', '', '', '', '', '', '']
	}
*/





work('65a', 65, '.key1', 'E3')
work('83s', 83, '.key2', 'G3')
work('68d', 68, '.key3', 'A3')
work('70f', 70, '.key4', 'B3')
work('71g', 71, '.key5', 'D4')
work('72h', 72, '.key6', 'E4')
work('74j', 74, '.key7', 'G4')
work('75k', 75, '.key8', 'A4')
work('76l', 76, '.key9', 'B4')




//work('72h',72, '.key9', 'C4')


})//----------end of document------
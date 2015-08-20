$(document).ready(function(){
//Testing LoadPopBug branch
//document.getElementById('B4').play()
//$('#B4').animate({volume: 0.1}, 500)





//3.This function is used to assign a key a sound
//  and prevent the default re-triggering of a key
//	before it is released

                 //work('65a', 65, '.key1', n[0], 'A')

	var work = function(allowed,num,keyid,tone,letter){
			console.log("FUCK YOU")
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

		          var xxx = '#'+ tone
		        	console.log(xxx)

		        	//$(xxx).animate({volume: 1.0});


		        	$(xxx).stop(true);

		        	var soundIdEl = document.getElementById(tone);
					soundIdEl.currentTime=0;	
		          soundIdEl.volume=1.0;
		          soundIdEl.play();

		        console.log(xevent.which)


		        $(document).on("keyup", function(xevent){

		            if(xevent.which === num){            
		            //$(keyid).html(letter)//Use for Testing		           

		            //var getIt = document.getElementById(tone);
		            //getIt.addEventListener("ended",function(){
		            //	this.currentTime = 0;
		            //	this.pause();
		            //})

		        	var xxx = '#'+ tone
		        	console.log(xxx)

		        	$(xxx).animate({volume: 0.1}, 500)//, function(){
		        		//document.getElementById(tone).pause();
		        		

		        	//});

		            //document.getElementById(tone).pause();
		            //document.getElementById(tone).currentTime=0;
		            




		            //document.getElementById(tone).pause()
		            //document.getElementById(tone).animate({volume: 0.1}, 500)	       		         
		         	//$('#B4').animate({volume: 0.1}, 500);
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
	//var keySelection =function(setOfNotes){

		//console.log(setOfNotes)//use this for debugging musically wrong notes
		//var n = setOfNotes

	//work('65a', 65, '.key1', 'E3')

	work('65a', 65, '.key1', 'Dx4', 'A')
	work('83s', 83, '.key2', 'E4', 'S')
	work('68d', 68, '.key3', 'F4', 'D')
	work('70f', 70, '.key4', 'Fx4', 'F')
	work('71g', 71, '.key5', 'G4', 'G')
	work('72h', 72, '.key6', 'Gx4', 'H')
	work('74j', 74, '.key7', 'A4', 'J')
	work('75k', 75, '.key8', 'Ax4', 'K')
	work('76l', 76, '.key9', 'B4', 'L')
	//}
//4.End---------------------

})
	

//5.This is the menu used to make a musical key selection
	//For Testing 
	//$('.em').on("click", function(){
	//	keySelection(keys.em)
	//})
	



//----------end of document------
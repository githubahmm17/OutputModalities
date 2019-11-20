<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){                 
	$('#random').on("tap",function(){
    random();
	
 	}); 
});

function random() {	
var x = !Math.round(Math.random()); //true/false is assigned to x
$("#myText").text(x);

	if(x == true){
	navigator.notification.beep(1); //one beep
	}
	if(x == false){
	navigator.notification.beep(2); //two beeps
	}
	
	return x;
}


<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){                 
	$('#random').on("tap",function(){
    random();
 	}); 
});


function random() {
var x = !Math.round(Math.random());
$("#myText").text(x);
return x;
}
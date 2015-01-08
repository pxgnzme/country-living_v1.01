// VERSION 1.01

$(document).ready(function() {

	goSlider();

});

function goSlider(){

	$('#slides').superslides({
		hashchange: true,
		inherit_width_from: 'section',
        inherit_height_from: 'section',
        play: 5000
	});

}

// =====================================================================================================
// ADDITIONAL FUNCTIONS
// =====================================================================================================

// validate email
function validateEmail(email){ 

	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
	
	if(!reg.test(email)){ 
	
		return false;
	
	}else{
		
		return true;
		
	} 

} 

//IE placehoder input fix
function placeholderFix(){

    //ie placeholder fix
    $.support.placeholder = ( 'placeholder' in document.createElement('input') );
	
	if($.support.placeholder){
		
		$('.form_label').hide();
	}

}

function getUniqueTime() {
	var time = new Date().getTime();
	while (time == new Date().getTime());
	return new Date().getTime();
}

// CONSOLE LOG FUNCTION ---------------------------------------------
// taken from http://www.nodans.com/index.cfm/2010/7/12/consolelog-throws-error-on-Internet-Explorer-IE

jQuery.logThis = function(text){
  
   if((window['console'] !== undefined)){
     
        console.log(text);
    
   }

}

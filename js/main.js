$( ".form" ).submit(function( event ) {

	console.log(event);
  event.preventDefault();

	$.ajax({
		type: 'POST',
	  url: 'localhost:3000',
	  success: function(){
	    alert('Load was performed.');
	  }
	});
});

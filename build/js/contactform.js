/**
 * Created by Jeff.DeGraef on 25/07/2016.
 */
$( document ).ready( function() {
    $('#package2').hide();
});
$('#button_download_package2').click(function(){
    $(this).hide();
    $('#package2').show();
});
$('#button_submit_package2').click(function(event){
        $.get( "HandlerMailingList", $("#email_package2"),function(){
        window.location.href = "downloadCustomerBrochure.html";
    });
});

$('#newsletterform').submit(function(event){

        var $this = $(this);
        $this.hide();
        // we want to submit the form using Ajax (prevent page refresh)
        event.preventDefault();

        // this is where your validation code (if any) would go

        // this tells the server-side process that Ajax was used
        $('input[name="usingAJAX"]',this).val( 'true' );
        // store reference to the form
        //var $this = $(this);
        // prepare the form data to send
        var dataToSend = $this.serialize();
        // the callback function that tells us what the server-side process had to say
        var callback = function(dataReceived){
            // hide the form (thankfully we stored a reference to it)
            //$this.hide();
        // in our case the server returned an HTML snippet so just append it to the DOM
        // expecting: <div id="result">Your favorite food is pizza! Thanks for telling us!</div>
            $('#newsletterresult').html(dataReceived)
        };
    // now send the form and wait to hear back
    $.get( "HandlerMailingList", dataToSend, callback, 'html' )
    }); // close .submit()

$('#contactform').submit(function(event){

				var $this = $(this);
				$this.hide();

				// we want to submit the form using Ajax (prevent page refresh)
				event.preventDefault();

				// this is where your validation code (if any) would go

				// this tells the server-side process that Ajax was used
				$('input[name="usingAJAX"]',this).val( 'true' );
				// store reference to the form
				var $this = $(this);
				// prepare the form data to send
				var dataToSend = $this.serialize();
				// the callback function that tells us what the server-side process had to say
				var callback = function(dataReceived){
					// hide the form (thankfully we stored a reference to it)
					$this.hide();
					// in our case the server returned an HTML snippet so just append it to the DOM, expecting: <div id="result">Your favorite food is pizza!</div>
					$('#contactresult').html(dataReceived)
				};
				// type of data to receive (in our case we're expecting an HTML snippet)
				var typeOfDataToReceive = 'html';
				// now send the form and wait to hear back
				$.get( "HandlerForm", dataToSend, callback, typeOfDataToReceive )
			}); // close .submit()
/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

/* ToDo in script TheContactUsMainApp
/* ToDo in script TheContactUsMainApp
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
 */

module.exports  = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheContactUsMainApp");
            return (
                <section className="contact-us" style={{"padding-top": '100px'}}>
                    <div className="container">
                            <div className="section-header">
                                <h2 className="white-text">Get in touch</h2>
                                <h6 className="white-text">
                                    Have any questions? Drop us a message. We will get back to you as soon as possible.
                                </h6>
                            </div>
                            <div className="row">
                                <div id='contactresult'><h2 className="orange-text"></h2></div>
                                <form id="contactform" className="contact-form" method="get">
                                    <input type="hidden" name="usingAJAX" value="false" />
                                    <div className="wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                        <div className="col-lg-4 col-sm-4">
                                            <input type="text" name="name" placeholder="Your Name" className="form-control input-box" required/>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <input type="email" name="email" placeholder="Your Email" className="form-control input-box" required/>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <input type="text" name="subject" placeholder="Subject" className="form-control input-box" required/>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="col-md-12 wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                            <textarea name="message" className="form-control textarea-box" placeholder="Your Message" required></textarea>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary custom-button red-btn wow fadeInLeft animated" id="submit" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s" type="submit">Send Message</button>
                                </form>
                                <script>
                                </script>
                            </div>
                    </div>
                </section>
            )
        }
    });
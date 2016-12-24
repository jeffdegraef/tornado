/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

/* ToDo TheNewsletterMainApp in script tag

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
 */

module.exports  = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheNewsletterMainApp");
            return (
                <section id="contact" className="newsletter" style={{"padding-top": '100px'}}>
                    <div className="container">
                        <h2 className="white-text wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">Keep in touch</h2>
                        <div className="sub-heading white-text wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                             Sign up for (unfrequent) email Updates or News
                        </div>
                        <div id='newsletterresult'>
                            <h2 className="orange-text"></h2>
                        </div>
                        <form id="newsletterform" className="subscription wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s" role="form">
                            <input type="hidden" name="usingAJAX" value="false" />
                            <input type="email" placeholder="Enter email" className="form-control input-box" name="email"/>
                            <button className="btn btn-primary custom-button red-btn">Sign Up</button>
                        </form>
                        <script>
                        </script>
                    </div>
                </section>
            )
        }
    });
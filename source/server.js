/**
 * Created by Jeff.DeGraef on 10/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');


var TheLoadingMainApp = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheLoadingMainApp");
            return (
                <div class="preloader">
                    <div class="status">&nbsp;</div>
                </div>
            )
        }
    });

var HeaderMainApp = React.createClass(
    {
        render: function()
        {
            console.info("rendering HeaderMainApp");
            return (
                <header id="home" className="header">
                    <div id="main-nav" className="navbar navbar-inverse bs-docs-nav" role="banner">
                        <div className="container">
                            <nav className="navbar-collapse collapse" role="navigation" id="bs-navbar-collapse">
                                <ul className="nav navbar-nav navbar-right responsive-nav main-nav-list">
                                <li><a href="#home" style={{"text-decoration": 'none'}}>Home</a></li>
                                <li><a href="#idea" style={{"text-decoration": 'none'}}>The idea</a></li>
                                <li><a href="#packagestable" style={{"text-decoration": 'none'}}>Configure and Order</a></li>
                                <li><a href="#documentation" style={{"text-decoration": 'none'}}>Documentation</a></li>
                                <li><a href="#contact" style={{"text-decoration": 'none'}}>Contact!</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="container">
                        <h1 className="intro" style={{"color": '#FFF'}}>
                        The Norsonic sound measurement Project
                        </h1><br/>
                        <h3 className="white-text">
                        Use Internet of Things technologies <br />
                        to enrich Sound detection reporting and trending.
                        </h3>
                    </div>
                </header>
            )
        }
    });

var TheIdeaMainApp = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheIdeaMainApp");
            return (
                        <section id="idea" className="the-idea" style={{"padding-top":'100px',"padding-bottom": '50px'}}>
                            <div className="container">
                                <div className="section-header">
                                        <h2 className="text">The idea</h2>
                                        <h6 className="white-text">
                                            The Internet of Things technologies installed and running on a Raspberry Pi, easy to use with a graphical interface
                                        </h6>
                                </div>
                                <div className="row">
                                        <div className="col-lg-6 col-sm-5 column">
                                            <div className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                                This project provides the ability to <b>measure</b><br/> and report on soundlevels.<br/>
                                            </div>
                                        </div>

                                        <div className="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                            <h5 style={{"text-align":'left',"margin-top":'0px'}}>What is this project all about</h5>
                                            <p>
                                            This project is a set of software already installed and configured.
                                            </p>
                                            <p>
                                            It allows anyone to graphically configure sound measurements using Norsonic devices from a simple web-browser.
                                            </p>
                                            <img style={{"width":'500px',"margin-top":'15px',"margin-bottom":'15px',"margin-left":'20px'}} src="images/node-red-screenshot.png" className="responsive-logo"/><br/>
                                        </div>
                                </div>

                                <br/><br/>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-5 column">
                                        <div className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                            <img border='1' style={{"border":'5px solid #ccc'}} src="images/ttb.jpg" className="responsive-logo"/>
                                        </div>
                                    </div>
                                    <div className="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                        <h5 style={{"text-align":'left',"margin-top":'0px'}}>Dedicated to</h5>
                                        <ul>
                                            <li><b>For non-technical people</b>, this project provides in single easy steps a graphical interface to take fully advantage the Internet of Things and Norsonic functionality.</li>
                                            <li><b>For technical people</b>, the project is a ready to use device released under the <a href="http://www.wtfpl.net/">WTFPL</a> licence
                                            (the  WTFPL is a very permissive license for software and other scientific or artistic works that offers a huge degree of freedom). <br/>
                                            Use it to build you projects. There is no associated licence fee.</li>
                                        </ul>
                                        <h5 style={{"text-align":'left',"margin-top":'0px'}}>What this project is NOT</h5>
                                        <p>This project is not a (yet another) new home automation box. It's purpose is to help create new usages that go far beyond home automation, more specifically leveraging on the Raspberry pi platform to enable advanced sound measurment with cutting edge technology from Norsonic.</p>

                                        <h5 style={{"text-align":'left',"margin-top":'15px'}}>Why the Raspberry Pi?</h5>
                                        <p>
                                            You need a full time running computer. And it cannot be in the cloud since it should be near the things you want to manage and monitor. Although an ordinary computer can be used for this, many people prefer the tiny, affordable Raspberry-Pi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
            )
        }
    });

var TestimonialMainApp = React.createClass(
    {
        render: function()
        {
            return (
            <section id="testimonials" className="testimonial" style={{"background":'#605F5D'}}>
                <div className="container">
                        <div className="section-header">
                        <h2 className="white-text">Testimonials</h2>
                        <h6 className="white-text">
                            See what our awesome happy users say about us and let us show you some amazing graphs too.
                        </h6>
                    </div>
                    <div className="row wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                        <div className="col-md-12">
                            <div id="client-feedbacks" className="owl-carousel owl-theme">
                                <div className="feedback-box">
                                    <div className="message">
                                         “Norsonic is totally awsome by the way. I am telling everyone I know about it.”
                                    </div>
                                    <div className="client">
                                        <div className="quote green-text">
                                            <i className="icon-fontawesome-webfont-294"></i>
                                        </div>
                                        <div className="client-info">
                                            <a className="client-name" href="#">Mathias</a>
                                            <div className="client-company">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback-box">
                                    <div className="message">
                                          “Customer comment.”
                                    </div>
                                    <div className="client">
                                        <div className="quote blue-text">
                                            <i className="icon-fontawesome-webfont-294"></i>
                                        </div>
                                        <div className="client-info">
                                            <a className="client-name" href="#">customer name</a>
                                            <div className="client-company">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback-box">
                                    <div className="message">
                                         “We could also include some measurement graphs in here”
                                    </div>
                                    <div className="client">
                                        <div className="quote red-text">
                                            <i className="icon-fontawesome-webfont-294"></i>
                                        </div>
                                        <div className="client-info">
                                            <a className="client-name" href="#">chart name</a>
                                            <div className="client-company">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback-box">
                                    <div className="message">
                                         “Yet another customer comment.”
                                    </div>
                                    <div className="client">
                                        <div className="quote red-text">
                                            <i className="icon-fontawesome-webfont-294"></i>
                                        </div>
                                        <div className="client-info">
                                            <a className="client-name" href="#">customer name</a>
                                            <div className="client-company">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback-box">
                                    <div className="message">
                                         “Yet another graph.”
                                    </div>
                                    <div className="client">
                                        <div className="quote blue-text">
                                            <i className="icon-fontawesome-webfont-294"></i>
                                        </div>
                                        <div className="client-info">
                                            <a className="client-name" href="#">graph name</a>
                                            <div className="client-company">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback-box">
                                    <div className="message">
                                         “some trending data perhaps?”
                                    </div>
                                    <div className="client">
                                        <div className="quote green-text">
                                            <i className="icon-fontawesome-webfont-294"></i>
                                        </div>
                                        <div className="client-info">
                                            <a className="client-name" href="#">trending data name</a>
                                            <div className="client-company">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback-box">
                                    <div className="message">
                                         “More testimonials.”
                                    </div>
                                    <div className="client">
                                        <div className="quote blue-text">
                                            <i className="icon-fontawesome-webfont-294"></i>
                                        </div>
                                        <div className="client-info">
                                            <a className="client-name" href="#">customer</a>
                                            <div className="client-company">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback-box">
                                    <div className="message">
                                         “More testimonials.”
                                    </div>
                                    <div className="client">
                                        <div className="quote red-text">
                                            <i className="icon-fontawesome-webfont-294"></i>
                                        </div>
                                        <div className="client-info">
                                            <a className="client-name" href="#">customer</a>
                                            <div className="client-company">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback-box">
                                    <div className="message">
                                         “More testimonials.”
                                    </div>
                                    <div className="client">
                                        <div className="quote blue-text">
                                            <i className="icon-fontawesome-webfont-294"></i>
                                        </div>
                                        <div className="client-info">
                                            <a className="client-name" href="#">customer</a>
                                            <div className="client-company">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            )
        }
    });

var TheBuildMainApp = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheBuildMainApp");
            return (
                <section id="packagestable" className="the-idea"  style={{"padding-top":'100px'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2 className="text">How to get a Norsonic sound measurement solution</h2>
                            <h6 className="white-text">
                                It could not be easier
                            </h6>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-5 column">
                                <h2 className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                    Build your Sound measurement box configuration ...
                                </h2>
                            </div>
                            <div className="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <p>Just Just fill in this form and provide us the details of your requirements, the form can be found <a href="#documentation">here</a>.</p>
                                <p>Use the links below to download our datasheets and reference cases.</p>
                            </div>
                        </div>
                    </div>
                    </section>
            )
        }
    });

/* todo
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

 */
var ThePackagesMainApp = React.createClass(
    {
        render: function()
        {
            console.info("rendering ThePackagesMainApp");
            return(
                	<section className="packages">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-3">
                                    <div className="package wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                        <div className="package-header blue-bg">
                                            <h3>Cutomer brochure</h3>
                                        </div>
                                        <div className="price-container blue-bg white-text">
                                            <div style={{"background-image": 'url("images/sdcard.png")',"background-repeat": 'no-repeat',"margin-left":'10px'}}>
                                                <br/>
                                                <h5>Version 1.8.6<br/>Release date<br/>2016 march 21</h5>
                                                <br/><br/><br/><br/><br/>
                                            </div>
                                        </div>
                                        <button id="button_download_package2" className="btn btn-primary custom-button-ttb blue-btn">Download</button>
                                    <div id ="package2" className="pack-form">
                                            <input type="hidden" name="usingAJAX" value="false" />
                                            <input type="text" id="email_package2" placeholder="Please enter email" className="form-control input-text-ttb input-box" style={{"margin-top": '10px',"border-style":'solid'}} name="email"></input>
                                            <button id="button_submit_package2" className="btn btn-primary custom-button-ttb red-btn">Download</button>
                                    </div>
                                    <script>

                                    </script>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            )
        }
    });

var TheTSAMainApp = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheTSAMainApp");
            return (
                <section id="what" className="the-idea-onwhite" style={{"padding-top": '50px', "padding-bottom": '50px', "background-color": '#FFF'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-5 column">
                                <h2 className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                    ... come buy one!
                                </h2>
                                <p>You can buy an already built Norsonic measurement box via our webshop.</p>
                                <br/><br/>
                                <a href='http://www.norsonic.be/' target ='tsa'>
                                    <img src="images/logo_Norsonic_Benelux.png" className="responsive-logo" width='500'/>
                                </a>
                            </div>
                            <div className="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <p>
                                We are a Norsonic certified partner able to help you to take sound measurement to the next level.
                                </p>
                                <p>
                                All components are wired in a solid box, ready to plug and play, with its user guide and tutorials illustrating each example.
                                The package also contains an Internet access modem, a sound cable, a solar power option.
                                </p>
                                <br/>
                                <p>
                                    Read more about it here: <a href='http://www.norsonic.be/' target ='tsa' style={{"text-decoration":'none'}}>Norsonic Benelux</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    });

var TheDocumentationMainApp = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheDocumentationMainApp");
            return (
                <section className="features" id="documentation" style={{"padding-top":'100px'}}>
                    <div className="container">
                        <div className="section-header">
                            <h2 className="white-text">Documentation</h2>
                            <h6 className="white-text">
                                Need some help? Get the documentation!
                            </h6>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <div className="feature">
                                    <a target="_blank" href="docs/whatsnew.html" style={{"text-decoration": 'none'}}>
                                    <div className="feature-icon">
                                        <i className="icon-file-text"></i>
                                    </div>
                                        <h6 className="white-text">What's New</h6>
                                        <p className="white-text">
                                            Discover what's new in the last release.
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <xdiv className="col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <div className="feature">
                                    <a target="_blank" href="docs/faq.html" style={{"text-decoration": 'none'}}>
                                        <div className="feature-icon">
                                            <i className="icon-file-text"></i>
                                        </div>
                                        <h6 className="white-text">FAQ</h6>
                                        <p className="white-text">
                                            Consult the Frequently Asked Questions.
                                        </p>
                                    </a>
                                </div>
                            </xdiv>
                            <div className="col-md-6 col-sm-6 wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <div className="feature">
                                    <a target="_blank" href="docs/index.html" style={{"text-decoration": 'none'}}>
                                        <div className="feature-icon">
                                            <i className="icon-file-text"></i>
                                        </div>
                                        <h6 className="white-text">The Norsonic documentation</h6>
                                        <p className="white-text">
                                            All the steps to buy a Norsonic Sound Measurement box, prepare it and to enjoy tutorials!
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    });

var TheDonateMainApp = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheDonateMainApp");
            return (
                <section className="the-idea" style={{"padding-top": '100px',"padding-bottom": '50px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-5 column">
                                <div className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                    Pay a beer<br/>to the Norsonic team !
                                </div>
                            </div>
                                <div className="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <h4>Let us know were me can meet up and discuss how we can help you out!</h4>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    });

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

var TheNewsletterMainApp = React.createClass(
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

var TheContactUsMainApp = React.createClass(
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

var TheFooterMainApp = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheFooterMainApp");
            return (
                <footer>
                    <div className="container">
                        <a className="white-text" target="_blank" href="http://www.norsonic.be/">
                            © Norsonic Belgium
                        </a>
                    </div>
                    <br/>
                </footer>
            )
        }
    });

/**
 *
 * @type {ClassicComponentClass<P>}
 * @remark This is our main app, every section of the site will be linked as childobjects to the main react component.
 */
var ReactMainApp = React.createClass(
    {
        getInitialState: function ()
        {
            console.info("Initializing...");
            return {
            isHeaderHidden: false,
            title: 'statefull react component'
            };
        },
        handleClick: function ()
        {
            console.info("handleClick called");
            this.setState({isHeaderHidden: !this.state.isHeaderHidden});
        },
        render: function ()
        {
            console.info("rendering ReactMainApp");
            //var boundClick = this.handleClick.bind(this);
            //var mainHeader = React.createElement('header',{id:'header',className:'header'},React.createElement('div',{id: 'main-nav',className:'navbar navbar-inverse bs-docs-nav',role:'banner'}));
            //var mainHeader = React.createElement(HeaderMainApp);
            //var testheaderElement = React.createElement('h1',{className: 'header',key:'header'},this.state.title);
            //var headerElement = React.createElement(HeaderMainApp);
            //var ideaElement = React.createElement(TheIdeaMainApp);
           // var buttonElement = React.createElement('button',{className:'btn btn-default',onClick:boundClick, key: 'button'},'toggle header');
            //return React.createElement('div', null, [headerElement,ideaElement]);

            return (
                <div className="FullApp">
                    <HeaderMainApp/>
                    <TheIdeaMainApp/>
                    <TestimonialMainApp/>
                    <TheBuildMainApp/>
                    <ThePackagesMainApp/>
                    <TheTSAMainApp/>
                    <TheDocumentationMainApp/>
                    <TheDonateMainApp/>
                    <TheNewsletterMainApp/>
                    <TheContactUsMainApp/>
                    <TheFooterMainApp/>
                </div>
            );

        }
    });
            
var theApp = React.createElement(ReactMainApp);
//var theApp = React.createElement(ReactMainApp);
var myMainApp = ReactDOM.render(theApp, document.getElementById('react-application'));


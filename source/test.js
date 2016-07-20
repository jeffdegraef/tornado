/**
 * Created by Jeff.DeGraef on 10/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

/**
var MainFrame = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <Header />
        <Footer />
      </div>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});



var testMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});
 */


var CommentList = React.createClass({
  render: function()
  {
    return (
        <div>Hello</div>)
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
                                            <img style={{"width":'500px',"margin-top":'15px',"margin-bottom":'15px',"margin-left":'20px'}} src="static/images/node-red-screenshot.png" className="responsive-logo"/><br/>
                                        </div>
                                </div>

                                <br/><br/>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-5 column">
                                        <div className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                            <img border='1' style={{"border":'5px solid #ccc'}} src="static/images/ttb.jpg" className="responsive-logo"/>
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
                    <div classPath="container">
                        <div classPath="section-header">
                            <h2 classPath="text">How to get a Norsonic sound measurement solution</h2>
                            <h6 classPath="white-text">
                                It could not be easier
                            </h6>
                        </div>
                        <div classPath="row">
                            <div classPath="col-lg-6 col-sm-5 column">
                                <h2 classPath="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                    Build your Sound measurement box configuration ...
                                </h2>
                            </div>
                            <div classPath="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <p>Just Just fill in this form and provide us the details of your requirements, the form can be found <a href="#documentation">here</a>.</p>
                                <p>Use the links below to download our datasheets and reference cases.</p>
                            </div>
                        </div>
                    </div>
                    </section>
            )
        }
    });

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
                                        <div style={{"background-image": 'url("static/images/sdcard.png")',"background-repeat": 'no-repeat',"margin-left":'10px'}}>
                                            <br>
                                            <h5>Version 1.8.6<br>Release date<br>2016 march 21</h5>
                                            <br><br><br><br><br>
                                        </div>
                                    </div>
                                    <button id="button_download_package2" className="btn btn-primary custom-button-ttb blue-btn">Download</button>
                                <div id ="package2" className="pack-form">
                                        <input type="hidden" name="usingAJAX" value="false" />
                                        <input type="text" id="email_package2" placeholder="Please enter email" className="form-control input-text-ttb input-box" style='margin-top: 10px;border-style:solid' name="email">
                                        <button id="button_submit_package2" className="btn btn-primary custom-button-ttb red-btn">Download</button>
                                </div>
                                <script>
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
                                </script>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
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
                </div>
            );

        }
    });
var theApp = React.createElement(ReactMainApp);
//var theApp = React.createElement(ReactMainApp);
var myMainApp = ReactDOM.render(theApp, document.getElementById('react-application'));


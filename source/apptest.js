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

//,data-toggle:'collapse',data-target:'#bs-navbar-collapse'

            // ToDO see how we can force style, it does not seem to work.
            var liStyle = {"text-decoration": 'none'};

            var a1 = React.createElement('a',{href:'#home',style:{liStyle}},"Home");
            var li1 = React.createElement('li',null,a1);
            var a2 = React.createElement('a',{href:'#idea',style:{liStyle}},"The idea");
            var li2 = React.createElement('li',null,a2);
            var a3 = React.createElement('a',{href:'#packagestable',style:{liStyle}},"Configure and Order");
            var li3 = React.createElement('li',null,a3);
            var a4 = React.createElement('a',{href:'#documentation',style:{liStyle}},"Documentation");
            var li4 = React.createElement('li',null,a4);
            var a5 = React.createElement('a',{href:'#contact',style:{liStyle}},"Contact!");
            var li5 = React.createElement('li',null,a5);


            var ul = React.createElement('ul',{className:'nav navbar-nav navbar-right responsive-nav main-nav-list'},[li1,li2,li3,li4,li5]);

            var mainNavButtons = React.createElement('nav',{className:'navbar-collapse collapse',role:'navigation',id:'bs-navbar-collapse'},ul);

            var mainNavContainer = React.createElement('div',{className:'container'},mainNavButtons);

            var mainNavDiv = React.createElement('div',{id:'main-nav',className:'navbar navbar-inverse bs-docs-nav',role:'banner'},mainNavContainer);


            return React.createElement('header',{id:'home',className:'mainNavDiv'},mainNavDiv);

        }
    }
    );

var TheIdeaMainApp = React.createClass(
    {
        /*
        <section id="idea" class="the-idea" style='padding-top: 100px;padding-bottom: 50px'>
                        <div class="container">

                            <!-- SECTION HEADER -->
                            <div class="section-header">

                                <!-- SECTION TITLE -->
                                <h2 class="text">The idea</h2>

                                <!-- SHORT DESCRIPTION ABOUT THE SECTION -->
                                <h6 class="white-text">
                                    The Internet of Things technologies installed and running on a Raspberry Pi, easy to use with a graphical interface
                                </h6>
                            </div>
                            <!-- / END SECTION HEADER -->

                            <!--  COLUMNS -->
                            <div class="row">

                                <!-- COLUMN 1 - BIG MESSAGE ABOUT THE COMPANY-->
                                <div class="col-lg-6 col-sm-5 column">
                                    <div class="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                        This project provides the ability to <b>measure</b><br/> and report on soundlevels.<br/>
                                    </div>

                                </div>

                                <!-- COLUMN 2 - BRIEF ABOUT THE COMPANY-->
                                    <div class="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                    <h5 style='text-align:left;margin-top:0px'>What is this project all about</h5>
                                    <p>
                                    This project is a set of software already installed and configured.
                                    </p>
                                    <p>
                                    It allows anyone to graphically configure sound measurements using Norsonic devices from a simple web-browser.
                                    </p>

                                    <img style='width:500px;margin-top:15px; margin-bottom:15px; margin-left:20px' src="{{static_url("images/node-red-screenshot.png")}}"  class="responsive-logo"><br/>

                                    </div>
                            </div>
                            <!-- / END COLUMNS -->

                            <br/><br/>

                            <!--  COLUMNS -->
                            <div class="row">

                                <!-- COLUMN 1 - BIG MESSAGE ABOUT THE COMPANY-->
                                <div class="col-lg-6 col-sm-5 column">
                                    <div class="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                        <img border='1' style="border:5px solid #ccc;" src="{{static_url("images/ttb.jpg")}}" class="responsive-logo"/>
                                    </div>
                                </div>

                                <!-- COLUMN 2 - BRIEF ABOUT THE COMPANY-->
                                <div class="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                    <h5 style='text-align:left;margin-top:0px'>Dedicated to</h5>

                                    <ul>
                                    <li><b>For non-technical people</b>, this project provides in single easy steps a graphical interface to take fully advantage the Internet of Things and Norsonic functionality.</li>
                                    <li><b>For technical people</b>, the project is a ready to use device released under the <a href="http://www.wtfpl.net/">WTFPL</a> licence
                                    (the  WTFPL is a very permissive license for software and other scientific or artistic works that offers a huge degree of freedom). <br/>
                                    Use it to build you projects. There is no associated licence fee.</li>
                                    </ul>


                                    <h5 style='text-align:left;margin-top:0px'>What this project is NOT</h5>
                                    <p>This project is not a (yet another) new home automation box. It's purpose is to help create new usages that go far beyond home automation, more specifically leveraging on the Raspberry pi platform to enable advanced sound measurment with cutting edge technology from Norsonic.</p>

                                    <h5 style='text-align:left;margin-top:15px'>Why the Raspberry Pi?</h5>
                                    <p>
                                    You need a full time running computer. And it cannot be in the cloud since it should be near the things you want to manage and monitor. Although an ordinary computer can be used for this, many people prefer the tiny, affordable Raspberry-Pi.
                                    </p>
                                </div>
                            <!-- / END COLUMNS -->
                        </div>
                        <!-- / END CONTAINER -->

                 </section>)
         */

        render: function()
        {
            return (
                <section id="idea" class="the-idea" style='padding-top: 100px;padding-bottom: 50px'>
                    <div class="container">

                        <div class="section-header">
                                <h2 class="text">The idea</h2>
                                <h6 class="white-text">
                                    The Internet of Things technologies installed and running on a Raspberry Pi, easy to use with a graphical interface
                                </h6>
                         </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-5 column">
                                <div class="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                    <img border='1' style="border:5px solid #ccc;" src="{{static_url("images/ttb.jpg")}}" class="responsive-logo"/>
                                </div>
                            </div>
                            <div class="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <h5 style='text-align:left;margin-top:0px'>Dedicated to</h5>
                                <ul>
                                    <li><b>For non-technical people</b>, this project provides in single easy steps a graphical interface to take fully advantage the Internet of Things and Norsonic functionality.</li>
                                    <li><b>For technical people</b>, the project is a ready to use device released under the <a href="http://www.wtfpl.net/">WTFPL</a> licence
                                    (the  WTFPL is a very permissive license for software and other scientific or artistic works that offers a huge degree of freedom). <br/>
                                    Use it to build you projects. There is no associated licence fee.</li>
                                </ul>
                                <h5 style='text-align:left;margin-top:0px'>What this project is NOT</h5>
                                <p>This project is not a (yet another) new home automation box. It's purpose is to help create new usages that go far beyond home automation, more specifically leveraging on the Raspberry pi platform to enable advanced sound measurment with cutting edge technology from Norsonic.</p>

                                <h5 style='text-align:left;margin-top:15px'>Why the Raspberry Pi?</h5>
                                <p>
                                    You need a full time running computer. And it cannot be in the cloud since it should be near the things you want to manage and monitor. Although an ordinary computer can be used for this, many people prefer the tiny, affordable Raspberry-Pi.
                                </p>
                        </div>
                    </div>
                </section>
                );
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
            var boundClick = this.handleClick.bind(this);

            var mainHeader = React.createElement('header',{id:'header',className:'header'},React.createElement('div',{id: 'main-nav',className:'navbar navbar-inverse bs-docs-nav',role:'banner'}));
            //var mainHeader = React.createElement(HeaderMainApp);


            var testheaderElement = React.createElement('h1',{className: 'header',key:'header'},this.state.title);
           // var buttonElement = React.createElement('button',{className:'btn btn-default',onClick:boundClick, key: 'button'},'toggle header');

            return React.createElement('div', null, mainHeader);
        }
    });
var theApp = React.createElement(HeaderMainApp);
//var theApp = React.createElement(ReactMainApp);
var myMainApp = ReactDOM.render(theApp, document.getElementById('react-application'));


/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

module.exports  = React.createClass(
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
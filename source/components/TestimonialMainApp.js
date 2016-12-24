/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

module.exports  = React.createClass(
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
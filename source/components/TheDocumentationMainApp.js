/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass(
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
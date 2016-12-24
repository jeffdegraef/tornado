/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

module.exports  = React.createClass(
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
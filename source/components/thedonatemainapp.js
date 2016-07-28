/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

module.exports  = React.createClass(
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

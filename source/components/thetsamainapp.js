/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

module.exports  = React.createClass(
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
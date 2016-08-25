/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var autobahn = require('autobahn');

module.exports  = React.createClass(
    {
        render: function()
        {
            console.info("rendering thechatmainapp");
            return (
                <section className="the-chat" style={{"background":'#605F5D'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-5 column">
                                <div className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                    Temperature in my house:
                                </div>
                            </div>
                            <div className="skills wow fadeInRight animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <h4>{this.props.temperature}</h4>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    });



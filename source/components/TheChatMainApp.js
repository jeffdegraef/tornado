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
                        <div className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                            <h1 className="intro" style={{"color": '#FFF'}}>
                                Temperature in my house:
                            </h1><br/>
                            <h3 className="white-text">
                                {this.props.temperature} testing and {this.props.humidity} humidity
                            </h3>
                            <br/>
                        </div>
                    </div>
                </section>
            )
        }
    });




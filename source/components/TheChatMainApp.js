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
            /*
            var content = this.props.sensorinput.map((post) =>
                <div key={post.NodeID}>
                  <h3>{post.NodeIDName}</h3>
                  <p>{post.Variable1}</p>
                </div>
            );
            */
            return (
                <section className="the-chat" style={{"background":'#605F5D'}}>
                    <div className="container">
                        <div className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                            <h1 className="intro" style={{"color": '#FFF'}}>
                                Temperature in my house:
                            </h1><br/>
                            <h3 className="white-text">
                                {this.props.temperature} degrees and {this.props.humidity} humidity
                            </h3>
                        </div>
                    </div>
                </section>
            )
        }
    });




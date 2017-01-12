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
            //data = JSON.parse(this.props.sensorinput);

            //console.info("The data is : " + this.props.sensorinput);

            var content = this.props.sensorinput.map(function (post){
                        return (<div key={post.id}>
                            <h3 key={post.id} className="white-text">{post.Variable1} degrees and {post.Variable2} humidity in the {post.NodeIDName}</h3>
                            </div>);
                            });
            console.info(content);
            /*
            const content = this.props.sensorinput.map(function(post) =>
                <div key={post.id}>
                  <h3>{post.NodeIDName}</h3>
                  <p>{post.Variable1}</p>
                </div>
              );
*/          if (this.props.syncro == true)
                {
                   return (
                            <section className="the-chat" style={{"background":'#605F5D'}}>
                                <div className="container">
                                    <div className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                        <h1 className="intro" style={{"color": '#FFF'}}>
                                            Temperature in my house:
                                        </h1><br/>
                                        <br/>
                                            {content}
                                        <br/>
                                    </div>
                                </div>
                            </section>
                        )
                }
            else
                {
                return (
                    <section className="the-chat" style={{"background":'#605F5D'}}>
                        <div className="container">
                            <div className="big-intro wow fadeInLeft animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                                <h1 className="intro" style={{"color": '#FFF'}}>
                                    Not synchronised yet, waiting for first update from my house...
                                </h1><br/>
                            </div>
                        </div>
                    </section>
                    )

                }

            }//einde render functie
    });




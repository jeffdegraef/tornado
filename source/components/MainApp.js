/**
 * Created by jeff on 28/07/2016.
 * this is the main app
 */
var React = require('react');
var ReactDOM = require('react-dom');
var autobahn = require('autobahn');
var HeaderMainApp = require('./HeaderMainApp')
var TheIdeaMainApp = require('./TheIdeaMainApp')
var TestimonialMainApp = require('./TestimonialMainApp')
var TheBuildMainApp = require('./TheBuildMainApp')
var ThePackagesMainApp = require('./ThePackagesMainApp')
var TheTSAMainApp = require('./TheTSAMainApp')
var TheDocumentationMainApp = require('./TheDocumentationMainApp')
var TheDonateMainApp = require('./TheDonateMainApp')
var TheNewsletterMainApp = require('./TheNewsletterMainApp')
var TheContactUsMainApp = require('./TheContactUsMainApp')
var TheFooterMainApp = require('./TheFooterMainApp')
var TheChatMainApp = require('./TheChatMainApp')
var TheTestMainApp = require('./TheTestMainApp')


var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

module.exports = React.createClass(
    {
        getInitialState: function() {
            console.info("In Initial Stage");
            return {
                temperature: '25.0',
                humidity: '30.0'
            };
        },
        componentDidMount: function() {
            console.info("In componentDidMount");
            // this.setState({ temperature: 'vol'});
            // console.info("changed temperature to vol");
            // setTimeout(function () {
            //     this.setState({ temperature: 'testje'});
            //     }.bind(this), 5000);
            // console.info("after time out")

            //Needed to keep the context of this in this component so it can be addres in the functions.
            var component = this
            //component.setState({temperature: 'leeg'});

            var wsuri = "ws://ec2-54-200-239-15.us-west-2.compute.amazonaws.com:8080/ws";

            // the WAMP connection to the Router
            //
            var connection = new autobahn.Connection({
               url: wsuri,
               realm: "realm1"
            });

            // fired when connection is established and session attached
            //
            connection.onopen = function (session) {

               // SUBSCRIBE to a topic and receive events
               //
                console.info("connection is open");

                // onhello = (args) => {
                //    var msg = args[0];
                //     component.setState({temperature: 'vol'});
                // }

                function ontemperature (args) {
                   var msg = args[0];
                   var array = args[1];
                    console.info("messsage test received temperature: " + msg);
                    console.info("array received temperature: " + array);
                   component.setState({temperature: msg});
                }


                function onhumidity (args) {
                   var msg = args[0];
                    console.info("messsage received humidity: " + msg);
                   component.setState({humidity: msg});
                }

                session.subscribe('com.example.ontemperature', ontemperature).then(
                  function (sub) {
                     console.info("subscribed to topic 'ontemperature'");
                  },
                  function (err) {
                     console.info("failed to subscribed: " + err);
                  }
                );

                session.subscribe('com.example.onhumidity', onhumidity).then(
                  function (sub) {
                     console.info("subscribed to topic 'onhumidity'");
                  },
                  function (err) {
                     console.info("failed to subscribed: " + err);
                  }
                );

            }
            connection.open();
        },
        render: function ()
        {
            console.info("rendering ReactMainApp");
            return (
                <div className="FullApp">
                    <HeaderMainApp/>
                    <TheChatMainApp temperature={this.state.temperature} humidity={this.state.humidity}/>
                    <TheIdeaMainApp/>
                    <TestimonialMainApp/>
                    <TheBuildMainApp/>
                    <ThePackagesMainApp/>
                    <TheTSAMainApp/>
                    <TheDocumentationMainApp/>
                    <TheDonateMainApp/>
                    <TheNewsletterMainApp/>
                    <TheContactUsMainApp/>
                    <TheFooterMainApp/>
                </div>
            );

        }
    });
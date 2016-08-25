/**
 * Created by jeff on 28/07/2016.
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

module.exports = React.createClass(
    {
        getInitialState: function() {
            console.info("In Initial Stage");
            return {temperature: 'leeg'};
        },
        handleClick: function ()
        {
            console.info("handleClick called");
            this.setState({isHeaderHidden: !this.state.isHeaderHidden});
        },
        componentDidMount: function() {
            console.info("In componentDidMount");
            var wsuri = "ws://ec2-54-200-239-15.us-west-2.compute.amazonaws.com:8080/ws";

            // the WAMP connection to the Router
            //
            var connection = new autobahn.Connection({
               url: wsuri,
               realm: "realm1"
            });

            console.info("connection aangemaakt");
            // fired when connection is established and session attached
            //
            connection.onopen = function (session) {

               // SUBSCRIBE to a topic and receive events
               //
                console.info("connection is open");
               function onhello (args) {
                  var msg = args[0];
                  console.info("SUPER!! event for 'onhello' received: " + msg);
                   console.info("state before change:");
                   //console.info("state before change: " + this.state.temperature);
                   this.replaceState({temperature: 'vol'});
                   //console.info("state after change: " + this.state.temperature);
               }
               session.subscribe('com.example.onhello', onhello).then(
                  function (sub) {
                     console.info("subscribed to topic 'onhello'");
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
                    <TheChatMainApp temperature={this.state.temperature}/>
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
/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var autobahn = require('autobahn');

module.exports  = React.createClass(
    {
        getInitialState: function() {
            console.info("In Initial Stage");
            return {test: "initiele waarde"};
        },
        handleClick: function ()
        {
            console.info("handleClick called");
            this.setState({test: "nieuwe waarde"});
        },
        render: function()
        {
            console.info("rendering thetestmainapp");
            const text = this.state.test;
            return (
                <div onClick={this.handleClick}>
                    You {text} this. Click to toggle.
                </div>
            )
        }
    });



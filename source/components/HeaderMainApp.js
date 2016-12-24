/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');


module.exports = React.createClass(
    {
        render: function()
        {
            console.info("rendering HeaderMainApp");
            return (
                <header id="home" className="header">
                    <div id="main-nav" className="navbar navbar-inverse bs-docs-nav" role="banner">
                        <div className="container">
                            <nav className="navbar-collapse collapse" role="navigation" id="bs-navbar-collapse">
                                <ul className="nav navbar-nav navbar-right responsive-nav main-nav-list">
                                <li><a href="#home" style={{"text-decoration": 'none'}}>Home</a></li>
                                <li><a href="#idea" style={{"text-decoration": 'none'}}>The idea</a></li>
                                <li><a href="#packagestable" style={{"text-decoration": 'none'}}>Configure and Order</a></li>
                                <li><a href="#documentation" style={{"text-decoration": 'none'}}>Documentation</a></li>
                                <li><a href="#contact" style={{"text-decoration": 'none'}}>Contact!</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="container">
                        <h1 className="intro" style={{"color": '#FFF'}}>
                        The Norsonic sound measurement Project
                        </h1><br/>
                        <h3 className="white-text">
                        Use Internet of Things technologies <br />
                        to enrich Sound detection reporting and trending.
                        </h3>
                    </div>
                </header>
            )
        }
    });

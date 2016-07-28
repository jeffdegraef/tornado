/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');


module.exports  = React.createClass(
    {
        render: function()
        {
            console.info("rendering TheFooterMainApp");
            return (
                <footer>
                    <div className="container">
                        <a className="white-text" target="_blank" href="http://www.norsonic.be/">
                            © Norsonic Belgium
                        </a>
                    </div>
                    <br/>
                </footer>
            )
        }
    });
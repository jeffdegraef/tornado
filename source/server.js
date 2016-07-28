/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react')
var ReactDOM = require('react-dom')
var App = require('./components/ReactMainApp')
var logger = require('./lib/logger')

logger.log('In Server.js');
ReactDOM.render(<App/>, document.getElementById('react-application'));
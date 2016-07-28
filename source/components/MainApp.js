/**
 * Created by jeff on 28/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
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

module.exports = React.createClass(
    {
        getInitialState: function ()
        {
            console.info("Initializing...");
            return {
            isHeaderHidden: false,
            title: 'statefull react component'
            };
        },
        handleClick: function ()
        {
            console.info("handleClick called");
            this.setState({isHeaderHidden: !this.state.isHeaderHidden});
        },
        render: function ()
        {
            console.info("rendering ReactMainApp");
            return (
                <div className="FullApp">
                    <HeaderMainApp/>
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
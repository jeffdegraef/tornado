/**
 * Created by Jeff.DeGraef on 10/07/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

/**
var MainFrame = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <Header />
        <Footer />
      </div>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});



var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});
 */
var ReactClass = React.createClass(
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
            var boundClick = this.handleClick.bind(this);
            var headerElement = React.createElement('h1',{className: 'header',key:'header'},this.state.title);
            var buttonElement = React.createElement('button',{className:'btn btn-default',onClick:boundClick, key: 'button'},'toggle header');
            if (this.state.isHeaderHidden)
            {
                return React.createElement('div',null, [buttonElement]);
            }
            return React.createElement('div', null, [buttonElement,headerElement]);

        }
    });

var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
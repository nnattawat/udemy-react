var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Default Name',
      message: '...'
    }
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  handleUpdates: function(updates) {
    this.setState(updates);
  },

  render: function() {
    return (
      <div>
        <GreeterMessage name={this.state.name} message={this.state.message}/>
        <GreeterForm onUpdates={this.handleUpdates}/>
      </div>
    );
  }
});

module.exports = Greeter;

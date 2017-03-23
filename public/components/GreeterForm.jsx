var React = require('react');

var GreeterForm = React.createClass({
  formSubmit: function(e) {
    e.preventDefault();

    var updates = {};

    var name = this.refs.name.value;
    if (name.length > 0) {
      updates.name = name;
      this.refs.name.value = '';
    }

    var message = this.refs.message.value;
    if (message.length > 0) {
      updates.message = message;
      this.refs.message.value = '';
    }

    this.props.onUpdates(updates);
  },

  render: function() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <input type="text" ref="name"/>
        </div>
        <div>
          <textarea ref="message"></textarea>
        </div>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;

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
        <button>Set name</button>
      </form>
    );
  }
});

var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }

});

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

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);

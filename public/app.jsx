var GreeterForm = React.createClass({
  formSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    this.refs.name.value = '';
    this.props.onNewName(name);
  },

  render: function() {
    return (
      <form onSubmit={this.formSubmit}>
        <input type="text" ref="name"/>
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

  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },

  render: function() {
    return (
      <div>
        <GreeterMessage name={this.state.name} message={this.state.message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);

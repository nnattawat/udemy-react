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

  formSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    this.refs.name.value = '';
    this.setState({
      name: name
    });
  },

  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.formSubmit}>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter message="This is a first react app"/>,
  document.getElementById('app')
);

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Default Name',
      message: '...'
    }
  },
  
  formSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
  },

  render: function() {
    var name = this.props.name;
    var message = this.props.message;
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

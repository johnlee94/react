var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Arteezy is best NA'
    };
  },
  render: function(){
    var name = this.props.name;
    var message = this.props.message;

    return(
      <div>
        <h1>Hello {name}!</h1>
      <p>{message + '!!'}</p>
      </div>
    )
  }
});

var playerName = 'Arteezy'
var theMessage = 'secret message'

ReactDOM.render(
  <Greeter name={playerName} message={theMessage}/>,
  document.getElementById('app')
);

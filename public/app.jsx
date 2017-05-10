var Greeter = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Hello React!</h1>
      <p>Test</p>
      </div>
    )
  }
});

var Greeter2 = React.createClass({
  render: function() {
    return (
      <div>
        <p>Test #2?</p>
      </div>
    )
  }
})


ReactDOM.render(
  <Greeter/>,
// <Greeter2/>,
  document.getElementById('app')
);

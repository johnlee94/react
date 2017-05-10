var Greeter = React.createClass({
  render: function(){
    return React.createElement(
      'h1',
      null,
      'Hello React!'
    )
    // return(
    //   <div>
    //     <h1>Hello React!</h1>
    //   <p>Test</p>
    //   </div>
    // )
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);

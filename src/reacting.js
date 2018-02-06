var React = require(/react);
var ReactDom= require(react-dom);

var ReviewComp = React.createClass({
 render:function(){
 return (<h1> Reviews <h1>);
 }
});

 ReactDom.render(<ReviewComp>,$("#review"))

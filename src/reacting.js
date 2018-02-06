
var ReviewComp = React.createClass({
 //getInitial Function
 getInitialState:function(){
 return {
    last: ['Rajesh ','Kumar']
  }
}, //getInitial Function

  // Render function
 render:function(){
 return (
 <div>
 <center><h1> REVIEWS </h1></center>
 <span> {this.props.com.name}: </span>
  <span> {this.props.com.comment} </span><br/>

  <p> {this.props.time} </p>
  <span>
  <input type="text" placeholder="Enter the review"/>
  <input type="text" placeholder="Enter the review"/>
  <button type="submit" onClick={this.handleSubmit}>Submit </button>
</span>
 </div>
 );
 },// Render function

handleSubmit:function(){
console.log('Value Entered');
}
});

 var date= Date();
 var comments = { name:'Janani', comment:'Awesome'};
 ReactDOM.render(<ReviewComp com={comments} time={date}/>,document.getElementById('review'));

/*
var React = require('react');
var ReactDOM= require('react-dom');


 getInitialState:function(){
 return {
    last: ['Rajesh ','Kumar']
  }
  }, //getInitial Function

   var tmt = setTimeout(function(){
      this.setState({
      last:['Akshay'] });
   }.bind(this),3000); // SetState example*/

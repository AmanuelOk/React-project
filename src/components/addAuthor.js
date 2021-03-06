
import React from 'react';
import {crudAction} from '../actions/authorsCrudAction';
import {authorActions} from '../actions/authorAction';
export class AddAuthor extends React.Component{
 constructor(props){
super(props);
this.state = {
first_name:'',
last_name:''}
 }

 reset(){
  this.setState({
    first_name: '',
    last_name: ''
  });
}
getValues(event){
  this.setState({
    [event.target.name]: event.target.value,
    
  });
}

handleAdd(event){
  event.preventDefault();

  crudAction.addAuthor(this.state);
  console.log(this.state);
  this.reset();
  setTimeout(function(){authorActions.readAuthors();}, 300);
  this.props.history.push("/authors");

}

render(){

return(
<form onSubmit={this.handleAdd.bind(this)}>
  <div className="form-group">
    <label htmlFor="firstName">FirstName</label>
    <input type="text" className="form-control" id="firstName" name="first_name"  onChange={this.getValues.bind(this)} placeholder="FirstName"></input>
  </div>
  <div className="form-group">
    <label htmlFor="lastName">LastName</label>
    <input type="text" className="form-control" id="lastName" name=" last_name" onChange={this.getValues.bind(this)} placeholder="LastName"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

);

}


}



import React from 'react';
import {crudAction} from '../actions/authorsCrudAction';
export class DeleteAuthor extends React.Component{
 constructor(props){
super(props);
this.state = {
author_id:''
}
 }
 reset(){this.setState({author_id:''})}
getValue(event){  
  this.setState({
    [event.target.name]:event.target.value
});

}
handleDelete(event){
    event.preventDefault();
    
crudAction.deleteAuthor(this.state);
console.log(this.state);
this.reset();
//this.props.history.push("/status");
}

render(){

return(
<form onSubmit={this.handleDelete.bind(this)}>
  <div className="form-group">
    <label htmlFor="author_id">Author_id</label>
    <input type="text" className="form-control" id="author_id" name="author_id" onChange={this.getValue.bind(this)} placeholder="Author_id"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

);

}
}


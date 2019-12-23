
import React from 'react';
import {crudAction} from '../actions/authorsCrudAction';
export class AddAuthor extends React.Component{
 constructor(props){
super(props);
this.state = {
author:{first_name:'',
last_name:''}
}
 }

handleAdd(event){
    event.preventDefault();
    this.setState({
        [event.target.name]:event.target.value
});
crudAction.addAuthor(this.state.author);
}

render(){

return(
<form onSubmit={this.handleAdd.bind(this)}>
  <div className="form-group">
    <label htmlFor="firstName">FirstName</label>
    <input type="text" className="form-control" id="firstName" name="first_name" placeholder="FirstName"></input>
  </div>
  <div className="form-group">
    <label htmlFor="lastName">LastName</label>
    <input type="text" className="form-control" id="lastName" name=" last_name" placeholder="LastName"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

);

}


}



import React from 'react';
import authorActions from '../actions/authorActions';
import { render } from 'react-dom';
export class AddAuthor extends React.Component(props){
 constructor(props){
super(props);
this.state = {
author:{first_name:'',
last_name:''}
}
 }

handleAdd=event=>{
    preventDefault();
    this.setState({
        [event.target.name]:event.target.value
});
authorActions.addAuthor(this.state.author);
}

render(){

return(
<form onSubmit={this.handleAdd}>
  <div class="form-group">
    <label for="firstName">FirstName</label>
    <input type="text" class="form-control" id="firstName" name="first_name" placeholder="FirstName"></input>
  </div>
  <div class="form-group">
    <label for="lastName">LastName</label>
    <input type="text" class="form-control" id="lastName" name=" last_name" placeholder="LastName"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

);

}


}


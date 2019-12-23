
import React from 'react';
import authorActions from '../actions/authorActions';
import { render } from 'react-dom';
export class updateAuthor extends React.Component(props){
 constructor(props){
super(props);
this.state = {
author:{author_id:''
      ,first_name:'',
      last_name:''}
}
 }

handleUpdate=event=>{
    preventDefault();
    this.setState({
        [event.target.name]:event.target.value
});
authorActions.updateAuthor(this.state.author);
}

render(){

return(
<form onSubmit={this.handleUpdate}>
  <div class="form-group">
    <label for="firstName">FirstName</label>
    <input type="text" class="form-control" id="firstName" name="first_name" placeholder="FirstName"></input>
  </div>
  <div class="form-group">
    <label for="lastName">LastName</label>
    <input type="text" class="form-control" id="lastName" name=" last_name" placeholder="LastName"></input>
  </div>
  <div class="form-group">
    <label for="AuthorId">AuthorId</label>
    <input type="text" class="form-control" id="authorId" name="author_id" placeholder="AuthorId"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

);

}


}


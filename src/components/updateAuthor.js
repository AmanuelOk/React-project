
import React from 'react';
import {authorActions} from '../actions/authorAction';
export class updateAuthor extends React.Component(props){
 constructor(props){
super(props);
this.state = {
author:{author_id:''
      ,first_name:'',
      last_name:''}
}
 }

handleUpdate=(event)=>{
    preventDefault();
    this.setState({
        [event.target.name]:event.target.value
});
authorActions.updateAuthor(this.state.author);
}

render(){

return(
<form onSubmit={this.handleUpdate}>
  <div className="form-group">
    <label htmlFor="firstName">FirstName</label>
    <input type="text" className="form-control" id="firstName" name="first_name" placeholder="FirstName"></input>
  </div>
  <div className="form-group">
    <label htmlFor="lastName">LastName</label>
    <input type="text" className="form-control" id="lastName" name=" last_name" placeholder="LastName"></input>
  </div>
  <div className="form-group">
    <label htmlFor="AuthorId">AuthorId</label>
    <input type="text" className="form-control" id="authorId" name="author_id" placeholder="AuthorId"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

);

}


}


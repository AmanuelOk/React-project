
import React from 'react';
import {crudAction} from '../actions/authorsCrudAction';
export class deleteAuthor extends React.Component{
 constructor(props){
super(props);
this.state = {
author_id:''
}
 }

handleDelete(event){
    event.preventDefault();
    this.setState({
        [event.target.name]:event.target.value
});
crudAction.deleteAuthor(this.state.author_id);
}

render(){

return(
<form onSubmit={this.handleDelete.bind(this)}>
  <div className="form-group">
    <label htmlFor="author_id">Author_id</label>
    <input type="text" className="form-control" id="author_id" name="author_id" placeholder="Author_id"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

);

}


}



import React from 'react';
import authorActions from '../actions/authorActions';
import { render } from 'react-dom';
export class deleteAuthor extends React.Component(props){
 constructor(props){
super(props);
this.state = {
author_id:''
}
 }

handleDelete=event=>{
    preventDefault();
    this.setState({
        [event.target.name]:event.target.value
});
authorActions.deleteAuthor(this.state.author_id);
}

render(){

return(
<form onSubmit={this.handleDelete}>
  <div class="form-group">
    <label for="author_id">Author_id</label>
    <input type="text" class="form-control" id="author_id" name="author_id" placeholder="Author_id"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

);

}


}


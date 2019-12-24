"use strict"
import React from 'react';
import PropTypes from 'prop-types';
import {authorActions} from '../actions/authorAction';
import {Link} from 'react-router-dom';
export class AuthorList extends React.Component{

    createAuthorsRow(author){
        return (
            <tr key={author.author_id}>
                <td> {author.author_id} </td>
                <td> {author.first_name} </td>
                <td> {author.last_name} </td>
            </tr>
        );
    }

    componentDidMount(){
        authorActions.readAuthors();
    }

    render() {
        
        let content = '';
        
        if(this.props.author.readState.pending){
            content = (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> 
                </div>
            );
        }
        
    
        if(this.props.author.readState.success){
            content = 
                (
                    <div>
                    <ul>
                    <li className="list-inline-item"><Link to="/addAuthors" replace>Add</Link></li>
                    <li className="list-inline-item"><Link to="/deleteAuthors" replace>Delete</Link></li>
                    <li className="list-inline-item"><Link to="/updateAuthors" replace>Update</Link></li>
                   </ul>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>AuthorId</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.author.authorList.map(this.createAuthorsRow, this)}
                    </tbody>    
                </table>
                </div>
                )
                
        }

        if(this.props.author.readState.failure){
            content = 
            (
                <div className="alert alert-danger" role="alert">
                    Error while loading authors!
                </div>
            )
        }

        return(
            <div>
                <h1>Authors</h1>
                {content}
            </div>
        );
    }
}

AuthorList.propTypes = {
    author: PropTypes.object.isRequired,
};




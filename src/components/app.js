"use strict"

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Header} from './header.js';
import {Home} from './home.js';
import {BookList} from '../components/BookList';
import {AuthorList} from '../components/authorList';
import BookStore from '../stores/bookStore';
import authorStore from '../stores/authorStore';
import {AddAuthor} from './addAuthor';
import {deleteAuthor} from './deleteAuthor';
import {updateAuthor} from './updateAuthor';
export class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            book:{
                bookList: [],
                readState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                error: ''
            },
            author:{
                authorList: [],
                readState: {
                    pending:false,
                    success:false,
                    failure:false
                },
                error: ''
            }
            
        }
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/books' render={(props) => (<BookList {...props} book={this.state.book} />)}/>
                    <Route path='/authors' render={(props) => (<AuthorList {...props} author={this.state.author} />)}/>
                    <Route path='/addAuthors' render={(props) => <AddAuthor/>}/>
                    <Route path='/deleteAuthors' render={(props) => <deleteAuthor/>}/>
                    <Route path='/updateAuthors' render={(props) => <updateAuthor/>}/>
                </Switch>
            </div>
        );
    }

    componentDidMount(){
        authorStore.addChangeListener(this._onAuthorChange.bind(this));
        BookStore.addChangeListener(this._onBookChange.bind(this));
    }

    componentWillUnmount(){
        authorStore.removeChangeListener(this._onAuthorChange.bind(this));
        BookStore.removeChangeListener(this._onBookChange.bind(this));
    }

    _onAuthorChange(){
        this.setState({author: authorStore.getAllAuthors()});
    }
    _onBookChange(){
        this.setState({book: BookStore.getAllBooks()});
    }
}
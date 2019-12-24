"use strict"

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Header} from './header.js';
import {Home} from './home.js';
import {BookList} from '../components/BookList';
import {AuthorList} from '../components/authorList';
import BookStore from '../stores/bookStore';
import statusReport from '../stores/status'
import authorStore from '../stores/authorStore';
import {AddAuthor} from './addAuthor';
import {DeleteAuthor} from './deleteAuthor';
import {UpdateAuthor} from './updateAuthor';
import {SubmissionStatus } from './submissionStatus.js';
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
            },
            statusObj:{ 
                report : '',
                status:{
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
                    <Route path='/addAuthors' render={(props) => (<AddAuthor {...props}/>)}/>
                    <Route path='/deleteAuthors' render={(props) => (<DeleteAuthor {...props}/>)}/>
                    <Route path='/updateAuthors' render={(props) => (<UpdateAuthor {...props}/>)}/>
                    <Route path='/status' render={(props) => (<SubmissionStatus {...props} info={this.state.statusObj} />)}/>
                </Switch>
            </div>
        );
    }

    componentDidMount(){
        authorStore.addChangeListener(this._onAuthorChange.bind(this));
        BookStore.addChangeListener(this._onBookChange.bind(this));
        statusReport.addChangeListener(this._onEditChange.bind(this));
    }

    componentWillUnmount(){
        authorStore.removeChangeListener(this._onAuthorChange.bind(this));
        BookStore.removeChangeListener(this._onBookChange.bind(this));
        statusReport.addChangeListener(this._onEditChange.bind(this));
    }

    _onAuthorChange(){
        this.setState({author: authorStore.getAllAuthors()});
    }
    _onBookChange(){
        this.setState({book: BookStore.getAllBooks()});
    }
    _onEditChange(){
        this.setState({ statusObj: statusReport.getStatus()})
    }
}
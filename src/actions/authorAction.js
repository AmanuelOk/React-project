import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios';

const authorActions = {
    readAuthors: function () {
        Dispatcher.dispatch({
            actionType: 'read_authors_started'
        });
        axios.get(`localhost:3001/author`)
            .then(res => {
                Dispatcher.dispatch({
                    actionType: 'read_authors_successful',
                    data: res.data
                });
            })
            .catch((error) => {
                console.log(error);
                Dispatcher.dispatch({
                    actionType: 'read_authors_failure'
                });
            });
    },
    deleteAuthor: function (id) {
        axios.delete(`localhost:3001/author/` + id).then(res => { data: res.data }).catch((error) => { console.log(error) }
        );
    },
    addAuthor: function (author) {
        axios.post(`localhost:3001/author` + author).then(res => { data: res.data }).catch((error) => { console.log(error) }
        );
    },
    updateAuthor: function (author) {
        axios.delete(`localhost:3001/author` + author).then(res => { data: res.data }).catch((error) => { console.log(error) }
        );
    }

    

}



module.exports = authorActions;
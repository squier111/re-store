import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import {booksLoaded, booksRequest} from '../../actions';

import WithBookstoreService from '../hoc'
import './book-list.css';

 class BookList extends Component {

  componentDidMount() {
    // 1. receive data
    const {bookstoreService, booksLoaded, booksRequest} =this.props;
    // const data = bookstoreService.getBooks();
    // this.props.booksLoaded(data);
    // console.log(data);
    
    booksRequest();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));


    // 2.dispacth action to store
  }

  render() {
    const {books , loading} =this.props;

    if(loading) {
      return <Spinner/>
    }

    return (
          <ul className="book-list">
            {
              books.map((book)=>{
                return (
                  <li key = {book.id} >
                      <BookListItem book ={book}/>
                  </li>
                )
              })
            }
          </ul>
        );
  }
}

const mapStateToProps =(state) => {
  return {
    books: state.books,
    loading: state.loading,
  };
};

// const mapDispatchToProps = (dispatch) => {

//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(booksLoaded(newBooks));
//     },
//     booksRequest: () => {
//       dispatch(booksRequest());
//     }
//   };
// };

const mapDispatchToProps =  {
  booksLoaded,
  booksRequest
};

export default WithBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
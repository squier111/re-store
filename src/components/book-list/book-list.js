import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {booksLoaded} from '../../actions';

import WithBookstoreService from '../hoc'
import './book-list.css';

 class BookList extends Component {

  componentDidMount() {
    // 1. receive data
    const {bookstoreService} =this.props;
    const data = bookstoreService.getBooks();
    this.props.booksLoaded(data);
    console.log(data);

    // 2.dispacth action to store
  }

  render() {
    const {books} =this.props;
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
  };
};

// const mapDispatchToProps = (dispatch) => {

//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(booksLoaded(newBooks));
//     }
//   };
// };

const mapDispatchToProps =  {
  booksLoaded
};

export default WithBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
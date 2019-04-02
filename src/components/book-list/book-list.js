import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {booksLoaded, booksRequest, booksError , bookAddedToCart} from '../../actions';

import WithBookstoreService from '../hoc'
import './book-list.css';


const BookList = ({books , onAddedToCart}) => {
  return (
      <ul className="book-list">
        {
          books.map((book)=>{
            return (
              <li key = {book.id} >
                  <BookListItem
                  onAddedToCart = {()=> onAddedToCart(book.id)}
                   book ={book}
                  />
              </li>
            )
          })
        }
      </ul>
    );
}


 class BookListContainer extends Component {

  componentDidMount() {
    // 1. receive data
    const {bookstoreService, booksLoaded, booksRequest, booksError} = this.props;
    // const data = bookstoreService.getBooks();
    // this.props.booksLoaded(data);
    // console.log(data);
    
    booksRequest();
    
        // 2.dispacth action to store
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((err)=> booksError(err));

  }

  render() {
    const {books , loading, error, onAddedToCart} =this.props;

    if(loading) {
      return <Spinner/>
    }

    if(error) {
      return <ErrorIndicator/>
    }

     return ( <BookList books= {books} onAddedToCart = {onAddedToCart} /> )
  }
}




const mapStateToProps =(state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch , ownProps) => {

  return {
    booksLoaded: (newBooks) => {
      dispatch(booksLoaded(newBooks));
    },
    booksRequest: () => {
      dispatch(booksRequest());
    },
    booksError: (err) => {
      dispatch(booksError(err));
    },
    onAddedToCart : (id) => {
      dispatch(bookAddedToCart(id))
      // console.log('added to cart' , id)
    }
  };
};

// const mapDispatchToProps =  {
//   booksLoaded,
//   booksRequest,
//   booksError,
//   onAddedToCart : () => {
//     console.log("sdsa")
//   }
// };

export default WithBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
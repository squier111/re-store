const booksRequest = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED',
  };
};


const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};


const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId,
  };
};


export {
  booksLoaded,
  booksRequest,
  booksError,
  bookAddedToCart
  
};
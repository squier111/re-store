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

const bookDeleteFromCart = (cartId) => {
  return {
    type: 'BOOK_DELETE_FROM_CART',
    payload: cartId,
  };
};

const booksDecreaseCart = (cartId) => {
  return {
    type: 'BOOK_DECREASE_CART',
    payload: cartId,
  };
};



export {
  booksLoaded,
  booksRequest,
  booksError,
  bookAddedToCart,
  bookDeleteFromCart,
  booksDecreaseCart
};
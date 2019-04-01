const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};


const booksRequest = () => {
  return {
    type: 'BOOKS_REQUESTED',
  };
};

export {
  booksLoaded,
  booksRequest
};
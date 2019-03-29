import React from 'react';
import BookList from '../book-list'

const HomePage =() => {

  const books = [
    { id:1 ,
      title: 'Production-Ready',
      author: 'Susan Flower'
     },
     { id:2 ,
      title: 'Kill `am all',
      author: 'd .Mustaine'
     }
  ];
  
  return (
    <>
      <div>Home Page</div>
      <BookList books={books}/>
    </>
  )
}

export default HomePage;
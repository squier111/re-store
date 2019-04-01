export default class BookstoreService {
  
  getBooks () {
    return [
      { id:1 ,
        title: 'Production-Ready ',
        author: 'Susan Flower',
        price: 32,
        coverImage:'https://images-na.ssl-images-amazon.com/images/I/A1J-Xl6I7CL.jpg'
       },
       { id:2 ,
        title: 'Kill `am all ',
        author: 'D .Mustaine',
        price: 45,
        coverImage:'https://i.pinimg.com/originals/9e/82/7b/9e827bd21c7289ad4e85537b459f2422.jpg'
       }
    ];
  }
}
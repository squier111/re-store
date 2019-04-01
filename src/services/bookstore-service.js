export default class BookstoreService {
  
  data = [
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


  dataOther = [
    { id:1 ,
      title: 'Production-Ready1111 ',
      author: 'Susan Flower',
      price: 32,
      coverImage:'https://i.pinimg.com/originals/b7/5d/08/b75d08baa4bc763eb2ec81324337bd5e.jpg'
     },
     { id:2 ,
      title: 'Kill `am allasdasdsa ',
      author: 'D .Mustaineasdasdsa',
      price: 45,
      coverImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINs1r8PaSuzhl5fpe8_CIaTJ-xUzBClgA0wfwr7hUI9lsb8Uf'
     }
  ];

  getBooks() {
    return new Promise((resolve ,reject)=> {
        setTimeout(()=> {
          resolve(this.data);
        },1000)
    })
  }

  getOtherBooks() {
    return new Promise((resolve ,reject)=> {
        setTimeout(()=> {
          resolve(this.dataOther);
        },1000)
    })
  }

}
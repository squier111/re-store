
const initialState = {
  books:[],
  loading: true,
  error:null,
  cartItems: [],
  orderTotal: 0,
};

const reducer = (state = initialState, action) => {

  // console.log(action.type);

  switch (action.type) {
    case 'FETCH_BOOKS_REQUESTED':
      return {
        ...state,
        books: [],
        loading:true,
        error:null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading:false,
        error:null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading:false,
        error: action.payload,
      };


    case 'BOOK_DELETE_FROM_CART':
      const cartId = action.payload;
      const inx = state.cartItems.findIndex((el)=> el.id === cartId);
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0 , inx),
          ...state.cartItems.slice(inx + 1),
        ]
      };
    case 'BOOK_DECREASE_CART':
      const cartIdDec = action.payload;
      const inxDel = state.cartItems.findIndex((el)=> el.id === cartIdDec);
      const bookDel = state.books.find((book)=> book.id === cartIdDec);
      const itemDel = state.cartItems.find((itemDel) => itemDel.id === cartIdDec);
       let newItemDec = {
        ...itemDel,
        count:itemDel.count - 1,
        total:itemDel.total - bookDel.price
      };
      if ( itemDel.total > bookDel.price ) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0 , inxDel),
            newItemDec,
            ...state.cartItems.slice(inxDel + 1),
          ]
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0 , inxDel),
            ...state.cartItems.slice(inxDel + 1),
          ]
        };
      }
    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book)=> book.id === bookId);


      const ItemIndex = state.cartItems.findIndex(({id}) => id === bookId);
      // const item = state.cartItems[ItemIndex];
      const item = state.cartItems.find((cartItems)=> cartItems.id === bookId);

      
      let newItem;
      
      if (item) {
        newItem = {
          ...item,
          count:item.count + 1,
          total:item.total + book.price
        };
      } else {
        newItem = {
          id:book.id,
          name:book.title,
          count:1,
          total:book.price
        };
      }
      
      if (ItemIndex < 0) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            newItem
          ]
        };
      } else 
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0 , ItemIndex),
            newItem,
            ...state.cartItems.slice(ItemIndex + 1),
          ]
        };
    default:
      return state;
  }

};

export default reducer;
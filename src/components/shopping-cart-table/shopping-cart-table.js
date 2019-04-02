import React from 'react';
import {connect} from 'react-redux';
import './shopping-cart-table.css';

const ShoppingCartTable = ({items,total, onIncrease, onDecrease, onDelete}) => {
  const RenderRow = (item, idx) => {
      const {id, name, count , total} = item;
      return (
        <tr key = {id}>
          <td>{idx +1}</td>
          <td>{name}</td>
          <td>{count}</td>
          <td>${total}</td>
          <td>
            <button
              onClick ={()=> onDelete(id)}
            className="btn btn-outline-danger">
              <i className="fa fa-trash-o"></i>
            </button>
            <button 
                onClick ={()=> onIncrease(id)}
              className="btn btn-outline-success">
              <i className="fa fa-plus-circle"></i>
            </button>
            <button
              onClick ={()=> onDecrease(id)}
              className="btn btn-outline-warning">
              <i className="fa fa-minus-circle"></i>
            </button>
          </td>
        </tr>
      )
  }
  return (
      <div className="shopping-cart-table">
        <h2>Your Order</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {items.map(RenderRow)}
          </tbody>
        </table>

        <div className="total">
          Total : ${total}
        </div>
      </div>
  )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
  return {
    items:cartItems,
    total:orderTotal,
  };
}


const mapDispatchToProps = ({dispatch}) => {
  return {
    onIncrease:(id) => {
      console.log(`increase${id}`)
    },
    onDecrease:(id) => {
      console.log(`decrease${id}`)
    },
    onDelete:(id) => {
      console.log(`delete${id}`)
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);
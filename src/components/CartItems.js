import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        
          {cartItems.map(item => (
            <li>
            <CartItem quantity={item.quantity} 
            id= {item.id} price={item.price}
             name={item.name} total={item.totalPrice}/>
             </li>
          ))}

      </ul>
    </div>
  );
};

export default CartItems;

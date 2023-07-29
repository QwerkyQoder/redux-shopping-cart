import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        changed: false,
    },
    reducers: {
        replaceData (state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.itemsList = action.payload.itemsList;
        },
        addToCart (state, action) {
            state.changed = true;
            const newItem = action.payload;
            console.log(state.itemsList)
            const existItem = state.itemsList.find((item) => item.id === newItem.id)
            if (existItem) {
                console.log("Item exists")
                existItem.quantity ++;
                existItem.totalPrice += newItem.price;
            }
            else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1, 
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                
            }
            state.totalQuantity++;
        },
        removeFromCart (state, action) {
            state.changed = true;
            const id = action.payload;
            const existItem = state.itemsList.find((item) => item.id === id)
            if (existItem) {
                if(existItem.quantity === 1) {
                    state.itemsList = state.itemsList.filter(item => item.id !== id)
                }
                else {
                    existItem.quantity --;
                    existItem.totalPrice -= existItem.price;
                }
                state.totalQuantity--;
            }
        },
        setShowCart (state) {
                state.showCart = !state.showCart;
        },
        reset: (state) => {
            return {
                itemsList: [],
                totalQuantity: 0,
                showCart: false
            }
        }
    }
})




export const cartActions = cartSlice.actions;
export default cartSlice;
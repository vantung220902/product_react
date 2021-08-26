import * as TYPES from "./../constants/actionTYPE";
import { findIndex } from "lodash";
let data = JSON.parse(localStorage.getItem('CART'));
var innit = data ? data : [];
const cart = (state = innit, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            index = findProductInCart(state, action.product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                let newCart = {
                    product,
                    quantity
                }
                state.push(newCart);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case TYPES.DELETE_CART:
            index = findIndex(state, (e) => {
                return e.product.id === action.id;
            });
            if(index !== undefined|| index !== -1){
                state.splice(index, 1);
                localStorage.setItem('CART', JSON.stringify(state));
            }
            return [...state];
        case TYPES.UPDATE_CART:
           
            index  = findIndex(state,(e)=>{
                return e.product.id = action.id;
            });
            if(index !== undefined|| index !== -1){
                state[index] = {
                    ...state[index],
                    quantity: action.quantity,
                }
                localStorage.setItem('CART', JSON.stringify(state));
            }
            return [...state];    
        default: return [...state]
    }
}
var findProductInCart = (cart, item) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === item.id) {
                index = i;
                break;
            }
        }

    }
    return index;
}
export default cart;
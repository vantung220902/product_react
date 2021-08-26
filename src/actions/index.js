import * as TYPE from "./../constants/actionTYPE";
export const ADDCART = (product, quantity) => {
    return {
        type: TYPE.ADD_TO_CART,
        product,
        quantity
    }
}
export const CHANGE_ADD_CART = () => {
    return {
        type: TYPE.CHANGE_MESSAGE,
       
    }
}
export const DELETE_ADD_CART = (id) => {
    return {
        type: TYPE.DELETE_CART,
        id
       
    }
}
export const DELETE_MESSAGE_CART = () => {
    return {
        type: TYPE.MESSAGE_CART_DELETE,
       
    }
}
export const UPDATE_CART = (id,quantity) => {
    return {
        type: TYPE.UPDATE_CART,
        id,
        quantity
    }
}
export const UPDATE_MESSAGE_CART = () => {
    return {
        type: TYPE.MESSAGE_UPDATE_CART,
       
    }
}
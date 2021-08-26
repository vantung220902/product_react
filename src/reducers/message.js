import * as TYPE from "./../constants/actionTYPE";
import * as MESSAGE from "./../constants/message";
var init = MESSAGE.MSG_WELCOME;
const message = (state = init, action) => {
    switch (action.type) {
        case TYPE.CHANGE_MESSAGE:
            return MESSAGE.MSG_ADD_TO_CART_SUCCESS;
        case TYPE.MESSAGE_CART_DELETE:
            return MESSAGE.MSG_DELETE_TO_CART_SUCCESS;
        case TYPE.MESSAGE_UPDATE_CART:
            return MESSAGE.MSG_UPDATE_TO_CART_SUCCESS;
        default: return state;
    }
}
export default message;
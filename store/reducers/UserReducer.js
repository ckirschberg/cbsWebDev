import { CHATROOMS } from "../../dummy.data";
import { Chatroom } from "../../entities/Chatroom";
import { SUBTRACT, TOGGLE_HAPPY, ADD, ADD_CHATROOM, DELETE_CHATROOM } from "../actions/ChatActions";
import { RESTORE_USER, SIGNUP } from "../actions/UserActions";

const initialState = {
    idToken: undefined,
    email: undefined
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email }
        case RESTORE_USER:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email }

        default:
            return state; //does not do anything yet​   
    }
};

export default userReducer;
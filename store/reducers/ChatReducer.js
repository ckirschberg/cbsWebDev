import { CHATROOMS } from "../../dummy.data";
import { SUBTRACT, TOGGLE_HAPPY, ADD } from "../actions/ChatActions";

const initialState = {
    chatrooms: CHATROOMS,
    counter: 0,
    isHappy: false,
    name: 'Andre'
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, counter: state.counter + 1 }
        case SUBTRACT:
            return { ...state, counter: state.counter - 1 }
        case TOGGLE_HAPPY:
            return { ...state, isHappy: !state.isHappy }
        // state.isHappy = !state.isHappy; // not allowed, it mutates the prior state

        default:
            return state; //does not do anything yet​   
    }
};

export default chatReducer;
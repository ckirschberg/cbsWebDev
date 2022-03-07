import { TOGGLE_HAPPY } from "../actions/ChatActions";

const initialState = {
    isHappy: false,
    name: 'Andre'
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_HAPPY:
            return { ...state, isHappy: !state.isHappy }
        // state.isHappy = !state.isHappy; // not allowed, it mutates the prior state

        default:
            return state; //does not do anything yet​   
    }
};

export default chatReducer;
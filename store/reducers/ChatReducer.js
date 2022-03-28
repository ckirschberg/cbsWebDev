import { CHATROOMS } from "../../dummy.data";
import { Chatroom } from "../../entities/Chatroom";
import { SUBTRACT, TOGGLE_HAPPY, ADD, ADD_CHATROOM, DELETE_CHATROOM, FETCH_CHATROOMS } from "../actions/ChatActions";

const initialState = {
    chatrooms: [],
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
        case FETCH_CHATROOMS:
            return { ...state, chatrooms: action.payload }

        case ADD_CHATROOM:
            console.log(action.payload); // Should print out the chatroomName
            //state.chatrooms.push(chatroom); // mutate chatrroms array! Not Allowed!

            const chatroom = new Chatroom(action.payload.chatroomName, [], '', action.payload.id);
            // const chatroom = { title: action.payload, chatmessages: [], imageUrl: ''}

            const newChatroomArray = [...state.chatrooms, chatroom];
            return { ...state, chatrooms: newChatroomArray };

        case DELETE_CHATROOM:
            console.log(action.payload);
            return {
                ...state, chatrooms:
                    state.chatrooms.filter(chatroom => chatroom.id !== action.payload)
            }



        //            return {...state, chatrooms: [...state.chatrooms, {title: action.payload}]}


        // state.isHappy = !state.isHappy; // not allowed, it mutates the prior state

        default:
            return state; //does not do anything yet​   
    }
};

export default chatReducer;
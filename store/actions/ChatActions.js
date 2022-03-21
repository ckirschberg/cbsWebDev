export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const ADD_CHATROOM = 'ADD_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';

export const toggleHappy = () => {
    return { type: TOGGLE_HAPPY };
};

export const add = () => {
    return { type: ADD };
};

export const subtract = () => {
    return { type: SUBTRACT };
};

export const addChatroom = (chatroomName) => {
    return { type: ADD_CHATROOM, payload: chatroomName };
};

export const deleteChatroom = (title) => {
    return { type: DELETE_CHATROOM, payload: title }
}
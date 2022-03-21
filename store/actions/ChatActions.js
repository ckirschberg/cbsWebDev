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

export const signup = (email, password) => {
    return async dispatch => {
        console.log("hi");

        const response = await fetch('some url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...

                returnSecureToken: true
            })
        });

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            //There was a problem..
        } else {
            dispatch({ type: SIGNUP, payload: 'something to pass to reducer' })
        }
    };
};

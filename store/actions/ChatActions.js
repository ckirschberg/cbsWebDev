export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const toggleHappy = () => {
    return { type: TOGGLE_HAPPY };
};

export const add = () => {
    return { type: ADD };
};

export const subtract = () => {
    return { type: SUBTRACT };
};
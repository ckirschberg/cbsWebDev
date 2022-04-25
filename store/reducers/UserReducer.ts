import { RESTORE_USER, SIGNUP } from "../actions/UserActions";


export interface UserState {
    idToken: string | undefined;
    email: string | undefined;
    username: string | undefined;
}

const initialState: UserState = {
    idToken: undefined,
    email: undefined,
    username: 'Test'
};

export interface Action {
    type: string;
    payload: any;
}

const userReducer = (state: UserState = initialState, action: Action) => {
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
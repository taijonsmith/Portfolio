import { LOGIN_USER, LOGOUT_USER } from '../actions/user_actions';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, action.payload);
        case LOGOUT_USER:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
import { SET_CURRENT_PROTOTYPE } from '../actions/prototype_actions';

export default function prototypeReducer(state = 1, action) {
    switch (action.type) {
        case SET_CURRENT_PROTOTYPE:
            return action.payload;
        default:
            return state;
    }
}
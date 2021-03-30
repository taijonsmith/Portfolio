import { SET_CURRENT_PROTOTYPE } from '../actions/prototype_actions';

export default function prototypeReducer(state = {index: 0, name: 'Home'}, action) {
    switch (action.type) {
        case SET_CURRENT_PROTOTYPE:
            return action.payload;
        default:
            return state;
    }
}
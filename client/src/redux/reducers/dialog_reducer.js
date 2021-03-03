import { OPEN_DIALOG, CLOSE_DIALOG } from '../actions/dialog_actions';

export default function dialogReducer(state = {}, action) {
    switch (action.type) {
        case OPEN_DIALOG:
            return Object.assign({}, state, action.payload);
        case CLOSE_DIALOG:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
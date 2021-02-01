import { TOGGLE_LEFT_MENU } from '../actions/left_menu_actions';

export default function leftMenuReducer(state = false, action) {
    switch (action.type) {
        case TOGGLE_LEFT_MENU:
            return action.payload;
        default:
            return state;
    }
}
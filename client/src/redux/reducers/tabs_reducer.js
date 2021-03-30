import { SET_CURRENT_TAB } from '../actions/tabs_actions';

export default function tabsReducer(state = 0, action) {
    switch (action.type) {
        case SET_CURRENT_TAB:
            return action.payload;
        default:
            return state;
    }
}
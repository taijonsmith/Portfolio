import { SET_MOBILE_MODE } from '../actions/mobile_mode_actions';

export default function mobileModeReducer(state = window.matchMedia("(max-width: 600px)").matches, action) {
    switch (action.type) {
        case SET_MOBILE_MODE:
            return action.payload;
        default:
            return state;
    }
}
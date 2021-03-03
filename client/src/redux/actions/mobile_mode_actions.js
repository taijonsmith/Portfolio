export const SET_MOBILE_MODE = 'users:setMobileMode';

export function set_mobile_mode(mobile_mode) {
    return {
        type: SET_MOBILE_MODE,
        payload: mobile_mode
    }
}
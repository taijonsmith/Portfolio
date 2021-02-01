export const SET_CURRENT_PROTOTYPE = 'content:onSetPrototype';

export function set_current_prototype(index) {
    return {
        type: SET_CURRENT_PROTOTYPE,
        payload: index
    }
}
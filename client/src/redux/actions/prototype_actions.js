export const SET_CURRENT_PROTOTYPE = 'prototype:onSetPrototype';

export function set_current_prototype(prototype) {
    return {
        type: SET_CURRENT_PROTOTYPE,
        payload: {index: prototype.index, name: prototype.name}
    }
}
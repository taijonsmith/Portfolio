export const SET_CURRENT_TAB = 'tabs:setCurrentTab';

export function set_current_tab(tab_index) {
    return {
        type: SET_CURRENT_TAB,
        payload: tab_index
    }
}
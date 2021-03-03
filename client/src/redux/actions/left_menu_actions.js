export const TOGGLE_LEFT_MENU = 'content:onToggleLeftMenu';

export function toggle_left_menu(open_menu) {
    return {
        type: TOGGLE_LEFT_MENU,
        payload: !open_menu
    }
}
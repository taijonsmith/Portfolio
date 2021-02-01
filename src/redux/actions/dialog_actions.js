export const OPEN_DIALOG = 'content:onOpenDialog';
export const CLOSE_DIALOG = 'content:onCloseDialog';

export function open_dialog(type, title, content) {
    return {
        type: OPEN_DIALOG,
        payload: {opened: true, type: type, title: title, content: content}
    }
}

export function close_dialog() {
    return {
        type: CLOSE_DIALOG,
        payload: {opened: false}
    }
}
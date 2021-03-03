export const OPEN_DIALOG = 'content:onOpenDialog';
export const CLOSE_DIALOG = 'content:onCloseDialog';

export function open_dialog(type, title, content) {
    var open;
    if (!type || !title || (type !== 'login' && !content)) {
        open = false;
    }
    else {
        open = true;
    }
    return {
        type: OPEN_DIALOG,
        payload: {opened: open, type: type, title: title, content: content}
    }
}

export function close_dialog() {
    return {
        type: CLOSE_DIALOG,
        payload: {opened: false}
    }
}
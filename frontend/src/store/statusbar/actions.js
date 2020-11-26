export const STATUSBAR_SET_TEXT = 'STATUSBAR_SET_TEXT';
export const STATUSBAR_HIDE = 'STATUSBAR_HIDE';
export const STATUSBAR_SHOW = 'STATUSBAR_SHOW';

export const setStatusbarText = text => ({
    type: STATUSBAR_SET_TEXT,
    payload: text
});

export const hideStatusbar = () => ({
    type: STATUSBAR_HIDE,
});

export const showStatusbar = () => ({
    type: STATUSBAR_SHOW,
});

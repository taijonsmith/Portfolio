export const LOGIN_USER = 'content:onLoginUser';
export const LOGOUT_USER = 'content:onLogoutUser';

export function login_user(user) {
    return {
        type: LOGIN_USER,
        payload: {user_id: user.id, email: user.email, logged_in: true}
    }
}

export function logout_user(user) {
    return {
        type: LOGOUT_USER,
        payload: {user_id: user.id, email: user.email, logged_in: false}
    }
}
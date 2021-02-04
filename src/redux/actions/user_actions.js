export const LOGIN_USER = 'content:onLoginUser';

export function login_user(user) {
    return {
        type: LOGIN_USER,
        payload: {user_id: user.id, logged_in: true}
    }
}
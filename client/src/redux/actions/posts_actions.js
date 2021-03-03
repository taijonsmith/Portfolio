import * as api from '../../api';


export const FETCH_ALL = 'posts:fetchAll';
export const CREATE = 'posts:create';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
}
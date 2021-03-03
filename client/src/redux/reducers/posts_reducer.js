import { CREATE, FETCH_ALL } from '../actions/posts_actions';

export default function postsReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return action.payload;
        default:
            return state;
    }
}
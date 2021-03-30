import { combineReducers } from 'redux';
import prototypeReducer from './prototype_reducer';
import mobileModeReducer from './mobile_mode_reducer';
import dialogReducer from './dialog_reducer';
import userReducer from './user_reducer';
import postsReducer from './posts_reducer';
import tabsReducer from './tabs_reducer';

const allReducers = combineReducers({
    current_prototype: prototypeReducer,
    mobile_mode: mobileModeReducer,
    dialog: dialogReducer,
    user: userReducer,
    posts: postsReducer,
    current_tab: tabsReducer
  });

export default allReducers;
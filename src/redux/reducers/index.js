import { combineReducers } from 'redux';
import prototypeReducer from './prototype_reducer';
import leftMenuReducer from './left_menu_reducer';
import mobileModeReducer from './mobile_mode_reducer';
import dialogReducer from './dialog_reducer';

const allReducers = combineReducers({
    left_menu_opened: leftMenuReducer,
    current_prototype: prototypeReducer,
    mobile_mode: mobileModeReducer,
    dialog: dialogReducer
  });

export default allReducers;
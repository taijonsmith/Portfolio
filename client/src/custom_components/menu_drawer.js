import React, { useRef } from 'react';
import './css/menu_drawer.css';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { open_dialog } from '../redux/actions/dialog_actions';
import { set_current_prototype } from '../redux/actions/prototype_actions';

export default function MenuDrawer(props) {
    const drawer = useRef(null);
    const current_prototype = useSelector(state => state.current_prototype);
    const dispatch = useDispatch();
    const about_me = 'My name is TaiJon and I\'m a full stack web developer from Louisville, KY. I love designing and creating dynamic web applications. This PWA prototype project is built using React, Redux and Material-UI components for the front end, and Node (Express) and MongoDB for the back end & database. I will continue building on this application over time to experiment with and implement various design concepts and technologies.'
    const menu_items_list =
        [
            {name: 'Home', icon: <HomeIcon/>, callback: () => {
                close_drawer();
                dispatch(set_current_prototype({index: 0, name: 'Home'}));
            }, index: 0},
            {name: 'Prototype 1', icon: <Filter1Icon/>, callback: () => {
                close_drawer();
                dispatch(set_current_prototype({index: 1, name: 'Prototype 1'}));
            }, index: 1},
            {name: 'Prototype 2', icon: <Filter2Icon/>, callback: () => {
                close_drawer();
                dispatch(open_dialog('general', 'Prototype 2', 'Prototype 2 Coming Soon!'));
                //dispatch(set_current_prototype(2));
            }, index: 2},
            {name: 'Prototype 3', icon: <Filter3Icon/>, callback: () => {
                close_drawer();
                dispatch(open_dialog('general', 'Prototype 3', 'Prototype 3 Coming Soon!'));
                //dispatch(set_current_prototype(3));
            }, index: 3},
            {name: 'About Me', icon: <AccountBoxIcon/>, callback: () => {
                close_drawer();
                dispatch(open_dialog('general', 'About Me', <React.Fragment><Typography>{about_me}</Typography><br/><a id="github_link" href="https://github.com/taijonsmith">Visit My GitHub Page!</a></React.Fragment>));
            }, index: 4},
            {name: 'Settings', icon: <SettingsIcon/>, callback: () => {
                close_drawer();
                dispatch(open_dialog('general', 'Settings', 'In Progress...'));
            }, index: 5},
    ];

    function close_drawer() {
        props.close_drawer();
    }

    const options = menu_items_list && menu_items_list.length > 0 ? menu_items_list.map((item, index) => (
        <ListItem button className="flex-container list_item" key={index} onClick={item.callback} selected={current_prototype.index === item.index}>
            <ListItemIcon className="menu_icon">
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name}/>
        </ListItem>
    )) : null;

    return (
        <SwipeableDrawer ref={drawer} id="left_drawer" className="side_drawer" open={props.drawerOpened} onClose={close_drawer} onOpen={()=>{}}>
            <List id="drawer_list">
                <div id="options_list">
                    {options}
                </div>
            </List>
        </SwipeableDrawer>
    );
}
import React, { useRef } from 'react';
import './css/menu_drawer.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { toggle_left_menu } from '../redux/actions/left_menu_actions';
import { open_dialog } from '../redux/actions/dialog_actions';
import { set_current_prototype } from '../redux/actions/prototype_actions';

export default function MenuDrawer() {
    const drawer = useRef(null);
    const left_menu_opened = useSelector(state => state.left_menu_opened);
    const dispatch = useDispatch();
    const about_me = 'My name is TaiJon and I\'m a full stack web developer from Louisville, KY. I love designing and creating dynamic web applications. This PWA prototype project is built using React, Redux and Material-UI components. I will continue building on this application over time to experiment with and implement various design concepts.'
    const menu_items_list =
        [
            {name: 'Prototype 1', icon: <Filter1Icon/>, callback: () => {
                dispatch(toggle_left_menu(left_menu_opened));
                dispatch(set_current_prototype(1));
            }},
            {name: 'Prototype 2', icon: <Filter2Icon/>, callback: () => {
                dispatch(toggle_left_menu(left_menu_opened));
                dispatch(open_dialog('general', 'Prototype 2', 'Prototype 2 Coming Soon!'));
                //dispatch(set_current_prototype(2));
            }},
            {name: 'About Me', icon: <AccountBoxIcon/>, callback: () => {
                dispatch(toggle_left_menu(left_menu_opened));
                dispatch(open_dialog('general', 'About Me', <React.Fragment><Typography>{about_me}</Typography><br/><a id="github_link" href="https://github.com/taijonsmith">Visit My GitHub Page!</a></React.Fragment>));
            }},
    ];

    const options = menu_items_list.map((item, index) => (
        <ListItem button className="flex-container list_item" key={index} onClick={item.callback}>
            <ListItemIcon className="menu_icon">
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name}/>
        </ListItem>
    ));


    return (
        <Drawer ref={drawer} id="left_drawer" className="side_drawer" open={left_menu_opened} variant="persistent">
            <Toolbar />
            <List id="drawer_list">
                <div id="options_list">
                    {options}
                </div>
            </List>
        </Drawer>
    );
}
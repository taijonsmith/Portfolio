import React from 'react';
import './css/menu_options.css';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default function MenuOptions(props) {
    var anchor = props.anchor;

    const handleClose = (e, item_callback) => {
        if (anchor && anchor.contains(e.target)) {
            return;
        }
        props.setOpen(false);
        if (item_callback) {
          item_callback();
        }
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          props.setOpen(false);
        }
    }

    const prevOpen = React.useRef(props.open);
    React.useEffect(() => {
        if (prevOpen.current === true && props.open === false) {
          anchor.focus();
        }
        prevOpen.current = props.open;
    }, [props.open, anchor]);
    
    const menu_items = props.menu_items ? props.menu_items.map((item, index) =>  {
        const icon = item.icon ? (<ListItemIcon>{item.icon}</ListItemIcon>) : null;
        return <MenuItem key={index} onClick={(e) => {handleClose(e, item.callback)}}>{icon}{item.name}</MenuItem>
    }) : [];

    return (
        <Popper className="options" open={props.open} anchorEl={anchor} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              exit={false}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={props.open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {menu_items}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    );
}
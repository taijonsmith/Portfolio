import React, { useState, useEffect, useRef } from 'react';
import './css/search_bar.css';
import { edit_class } from '../utils';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CancelIcon from '@material-ui/icons/Cancel';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    search: {
      display: 'flex',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      margin: 'auto',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeIcon: {
      display: 'flex',
      alignSelf: 'center',
      float: 'right',
      padding: theme.spacing(0, 1),
      color: fade(theme.palette.common.white, 0.35),
      '&:hover': {
        color: fade(theme.palette.common.white, 0.50),
      },
      cursor: 'pointer',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '18ch',
        '&:focus': {
          width: '22ch',
        },
      },
    },
  }));


export default function SearchBar(props){
    const classes = useStyles();
    const search_bar = useRef(null);
    const toolbar_search_input = useRef(null);
    const clear_button = useRef(null);
    const [searchValue, setSearchValue] = useState('');
    const [valuePresent, setValuePresent] = useState(false);
    const mobile_mode = useSelector(state => state.mobile_mode);

    function clear_input() {
      setSearchValue('');
      toolbar_search_input.current.firstElementChild.focus();
    }
  
    useEffect(() => {
      if (searchValue === '' || null) {
        setValuePresent(false);
        edit_class('add', clear_button.current, 'hide_element');
      }
      else {
        setValuePresent(true);
        edit_class('remove', clear_button.current, 'hide_element');
      }
    }, [searchValue])

    useEffect(() => {
      if (mobile_mode) {
        edit_class('add', search_bar.current, 'hide_element');
      }
      else {
        edit_class('remove', search_bar.current, 'hide_element');
      }
    }, [mobile_mode]);

    return (
        <div ref={search_bar} className={classes.search} hidden={mobile_mode}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              ref={toolbar_search_input}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearchValue(e.target.value)} value={searchValue}
            />
            <div ref={clear_button} className={classes.closeIcon} hidden={valuePresent}>
              <CancelIcon onClick={clear_input} />
            </div>
        </div>
    );
}
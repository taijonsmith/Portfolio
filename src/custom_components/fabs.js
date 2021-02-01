import React from 'react';
import './css/fabs.css';
import SearchIcon from '@material-ui/icons/Search';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';

export default function Fabs() {
    const mobile_mode = useSelector(state => state.mobile_mode);


    return (
        <Fade in>
            <div id="main_fabs">
                <Fab className="fabs">
                    <EditIcon />
                </Fab>
                <Fab className="fabs" hidden={!mobile_mode}>
                    <SearchIcon />
                </Fab>
            </div>
        </Fade>
    );
}
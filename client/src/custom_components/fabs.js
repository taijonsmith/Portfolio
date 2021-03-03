import React from 'react';
import './css/fabs.css';
import SearchIcon from '@material-ui/icons/Search';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useSelector } from 'react-redux';

export default function Fabs() {
    const mobile_mode = useSelector(state => state.mobile_mode);

    return (
        <Fade in>
            <div id="main_fabs">
                <Fab className="fabs">
                    <a id="github_link" href="https://github.com/taijonsmith" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                </Fab>
                <Fade in={mobile_mode} unmountOnExit>
                    <Fab className="fabs">
                        <SearchIcon />
                    </Fab>
                </Fade>
            </div>
        </Fade>
    );
}
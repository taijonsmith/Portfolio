import React, { useEffect, useState } from 'react';
import './css/fabs.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from '@material-ui/icons/Search';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import { open_dialog } from '../redux/actions/dialog_actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Fabs() {
    const mobile_mode = useSelector(state => state.mobile_mode);
    const current_prototype = useSelector(state => state.current_prototype);
    const [currentFabs, setCurrentFabs] = useState(null);
    const dispatch = useDispatch();
    const home_fabs = [
        {type: 'GitHub', details: <a className="links" href="https://github.com/taijonsmith" rel="noreferrer" target="_blank"><GitHubIcon /></a>}, 
        {type: 'LinkedIn', details: <a className="links" href="https://linkedin.com/taijonsmith" rel="noreferrer" target="_blank"><LinkedInIcon /></a>}
    ];
    const prototype_one_fabs = [
        {type: 'Info', details: <InfoIcon fontSize="large" onClick={() => {dispatch(open_dialog('general', 'Prototype 1', 'Prototype 1 is a page that mocks a site that displays information about specific people and groups their profile into corresponding cards.'));}}/>},
        {type: 'Search', details: <SearchIcon />, in: mobile_mode}
    ];

    function set_fabs() {
        switch(current_prototype.index) {
            case 0:
                setCurrentFabs(home_fabs);
                break;
            case 1:
                setCurrentFabs(prototype_one_fabs);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        set_fabs();
    }, [current_prototype, mobile_mode]);

    const fabs = currentFabs && currentFabs.length ? currentFabs.map((fab, index) => {
        return (
            <Fade in={"in" in fab ? fab.in : true} key={index} exit={false} unmountOnExit>
                <Fab className="fabs" color="primary">
                    {fab.details}
                </Fab>
            </Fade>
        );
    }) : null;

    return (
        <div id="main_fabs">
            {fabs}
        </div>
    );
}
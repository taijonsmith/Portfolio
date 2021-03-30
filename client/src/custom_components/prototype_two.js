import React, { useEffect, useRef, useState } from 'react';
import './css/prototype_two.css';
import { useEvent } from './utility_hooks/use_event';
import HideOnScroll from './utility_hooks/hide_on_scroll';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ProfileHome from './profile_home';
import AppViews from './app_views';
import { useSelector, useDispatch } from 'react-redux';
import { set_current_tab } from '../redux/actions/tabs_actions';


export default function PrototypeTwo(props) {
    //const [scrollPosition, setScrollPosition] = React.useState(window.pageYOffset);
    const tab_bar = useRef(null);
    const [tabIndex, setTabIndex] = useState(0);
    const [forceShowTabs, setForceShowTabs] = useState(false);
    const logged_in = useSelector(state => state.user.logged_in);
    const current_prototype = useSelector(state => state.current_prototype);
    const dispatch = useDispatch();
    const home_tabs = [
        {label: 'Home', icon: <HomeIcon />, view: <ProfileHome key={0} tab_index={0} />},
        {label: 'About Me', icon: <PersonIcon />},
        {label: 'Skills', icon: <BuildIcon />},
        {label: 'Resume', icon: <DescriptionIcon />},
        {label: 'Contact', icon: <ContactSupportIcon />}
    ];
    const [tabs, setTabs] = useState(home_tabs);

    useEvent('scroll', () => { 
        if (forceShowTabs) { setForceShowTabs(false); }
        /*if (props.current_tab === props.tab_index) {
            setScrollPosition(window.pageYOffset);
        }*/
    });

    function tabChanged(event, newValue) {
        setTabIndex(newValue);
        dispatch(set_current_tab(newValue));
    }

    function tabIndexChanged(index) {
        setTabIndex(index);
        dispatch(set_current_tab(index));
    }
    
    function set_tabs(prototype) {
        if (prototype.index === 0) {
            setTabs(home_tabs);
        }
        else {
            setTabs(null);
        }
    }
    
    useEffect(() => {
        set_tabs(current_prototype);
    }, [current_prototype]);

    useEffect(() => {
        //waits for window to scroll to page-specific scroll position
        setTimeout(() => {
            setForceShowTabs(true);
        }, 800);
    }, [tabIndex]);

    useEffect(() => {
        setTabIndex(0);
    }, [logged_in]);

    useEffect(() => {
        window.scrollTo({top: 0});
    }, []);

    /*
    useEffect(() => {
        if (props.current_tab === props.tab_index) {
            window.scrollTo({ top: scrollPosition, behavior: 'smooth'});
        }
    }, [props.current_tab]);
    */

    const tab_items = tabs && tabs.length > 0 ? tabs.map((tab, index) => {
        return (<Tab key={index} label={tab.label} icon={tab.icon} />);
    }) : [];

    return (
        <React.Fragment>
            <HideOnScroll force_show_tabs={forceShowTabs} {...props}>
                <AppBar id="tabs_toolbar" color="secondary">
                    <Tabs ref={tab_bar} className="tabs" value={tabIndex} indicatorColor="primary" textColor="primary" onChange={tabChanged} variant="scrollable" selectionFollowsFocus aria-label="tabs">
                        {tab_items}
                    </Tabs>
                </AppBar>
            </HideOnScroll>
            <AppViews tabs={tabs} tabIndex={tabIndex} tabIndexChanged={tabIndexChanged}/>
        </React.Fragment>
    );
}
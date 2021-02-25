import React from 'react';
import '../css/design_one.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import TvActors from '../tv_actors';
import Grow from '@material-ui/core/Grow';
import { useSelector } from 'react-redux';
import HideOnScroll from '../utility_hooks/hide_on_scroll';


export default function DesignOne(props) {
    const current_prototype = useSelector(state => state.current_prototype);
    const [tabIndex, setTabIndex] = React.useState(0);
    const DEFAULT_DATA_COUNT = 12;
    

    function tabChanged(event, newValue) {
        setTabIndex(newValue);
    }

    function tabIndexChanged(index) {
        setTabIndex(index);
    }

    async function get_api_content(url, data_count) {
        if (!url) {
            return Promise.reject();
        }
        if (!data_count) {
            data_count = DEFAULT_DATA_COUNT;
        }
        var content_list = [];
        for (var i=1; i < data_count; i++) {
            try {
                const result = await fetch(url + Math.floor((Math.random() * 100) + 1));
                const json_data = await result.json();
                content_list.push(json_data);
                //TODO: prevent repeats (implement Fisher-Yates algorithm O(n))
            }
            catch(error) {
                console.log(error)
                //dispatch error
            }
        }
        return content_list;
    }

    const tabs = props.tabs && props.tabs.length > 0 ? props.tabs.map((tab, index) => {
        return (<Tab key={index} label={tab.label} icon={tab.icon} />);
    }) : [];

    return (
        <Grow in={current_prototype === 1}>
            <div id="design_one" className="content">
                <HideOnScroll {...props}>
                    <AppBar className="tabs_toolbar" color="secondary">
                        <Toolbar>
                            <Tabs className="tabs" value={tabIndex} indicatorColor="primary" textColor="primary" onChange={tabChanged} variant="scrollable" selectionFollowsFocus aria-label="tabs" >
                                {tabs}
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <SwipeableViews id="views" index={tabIndex} onChangeIndex={tabIndexChanged}>
                    <TvActors id="tv_actors" tab_index={0} get_api_content={get_api_content} />
                    <TvActors id="placeholder_1" tab_index={1} get_api_content={get_api_content} />
                    <div id="placeholder_2" />
                    <div id="placeholder_3" />
                    <div id="placeholder_4" />
                    <div id="placeholder_5" />
                    <div id="placeholder_6" />
                    <div id="placeholder_7" />
                </SwipeableViews>
            </div>
        </Grow>
    );
}
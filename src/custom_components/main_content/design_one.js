import React, { useEffect } from 'react';
import '../css/design_one.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import AppCard from '../app_card';
import Grow from '@material-ui/core/Grow';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import HideOnScroll from '../utility_hooks/hide_on_scroll';


export default function DesignOne(props) {
    const current_prototype = useSelector(state => state.current_prototype);
    const [contentList, setContentList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [tabIndex, setTabIndex] = React.useState(0);
    const api_url = 'https://api.tvmaze.com/people/';
    const data_count = 24;

    function handleChange(event, newValue) {
        setTabIndex(newValue);
    }

    async function get_api_content(url) {
        try {
            const result = await fetch(url);
            const json_data = await result.json();
            return json_data;
        }
        catch(error) {
            console.log(error)
            //dispatch error
        }
    }

    useEffect(() => {
        async function get_initial_data() {
            setLoading(true);
            var content_list = [];
            for (var i=1; i < data_count; i++) {
                await get_api_content(api_url + Math.floor(Math.random() * 100)).then((data) => {
                    console.log(data);
                    content_list.push(data);
                });
            }
            setContentList(content_list);
            setLoading(false);
        }
        get_initial_data();
    }, []);

    const card_content = contentList && contentList.length > 0 ? contentList.map((content, index) => {
        const image = content.image ? content.image.medium : null;
        return (<AppCard key={index} name={content.name} image={image} url={content.url} />);
    }) : [];

    const tabs = props.tabs && props.tabs.length > 0 ? props.tabs.map((tab, index) => {
        return (<Tab key={index} label={tab.label} icon={tab.icon} />)
    }) : [];

    return (
        <Grow in={current_prototype === 1}>
            <div id="design_one" className="content">
                <HideOnScroll {...props}>
                    <AppBar className="tabs_toolbar" color="secondary">
                        <Toolbar>
                            <Tabs value={tabIndex} indicatorColor="primary" textColor="primary" onChange={handleChange} variant="scrollable" selectionFollowsFocus aria-label="tabs" >
                                {tabs}
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <SwipeableViews id="views" index={tabIndex}>
                    <div id="tv_actors" className="content_page">
                        <Typography className="subheader" variant="h6">TV Actors</Typography>
                        {loading ? 
                        <div className="center"><CircularProgress color="primary" /> </div>:
                        <div id="card_content" className="flex-container">
                            {card_content}
                        </div>
                        }
                    </div>
                    <div id="placeholder_1" />
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
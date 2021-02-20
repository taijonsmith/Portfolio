import React, { useEffect } from 'react';
import '../css/design_one.css';
import { edit_class, debouncer } from '../../utils';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import AppCard from '../app_card';
import Grow from '@material-ui/core/Grow';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import HideOnScroll from '../utility_hooks/hide_on_scroll';


export default function DesignOne(props) {
    const current_prototype = useSelector(state => state.current_prototype);
    const [contentList, setContentList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [tabIndex, setTabIndex] = React.useState(0);
    const refresh_button = React.useRef(null);
    const people_api_url = 'https://api.tvmaze.com/people/';
    const data_count = 12;
    const debounce = debouncer(function(callback, time){ callback(time); return time }, 400);

    function tabChanged(event, newValue) {
        setTabIndex(newValue);
    }

    function tabIndexChanged(index) {
        setTabIndex(index);
    }

    function rotate_button() {
        edit_class('remove', refresh_button.current, 'rotate360');
        void refresh_button.current.offsetWidth;
        edit_class('add', refresh_button.current, 'rotate360');
    }

    async function get_api_content(url) {
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

    function refresh_content(api_url) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        setRefreshing(true);
        const callback = () => {
            rotate_button();
            get_api_content(api_url).then((data) => {
                setContentList(data);
                setRefreshing(false);
            });
        }
        debounce(callback);
    }

    useEffect(() => {
        async function load_initial_data() {
            setLoading(true);
            const data = await get_api_content(people_api_url);
            setContentList(data);
            setLoading(false);
        }
        load_initial_data();
    }, []);

    const card_content = contentList && contentList.length > 0 ? contentList.map((content, index) => {
        const image = content.image ? content.image.medium : null;
        return (<AppCard key={index} name={content.name} image={image} url={content.url} refreshing={refreshing} />);
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
                            <Tabs className="tabs" value={tabIndex} indicatorColor="primary" textColor="primary" onChange={tabChanged} variant="scrollable" selectionFollowsFocus aria-label="tabs" >
                                {tabs}
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <SwipeableViews id="views" index={tabIndex} onChangeIndex={tabIndexChanged}>
                    <div id="tv_actors" className="content_page">
                        <Typography className="subheader" variant="h6">TV Actors</Typography>
                        {loading ? 
                        <div className="center"><CircularProgress color="primary" /></div> :
                        <React.Fragment>
                            <div id="refresh_container">
                                <IconButton ref={refresh_button} id="refresh_button" onClick={() => refresh_content(people_api_url)} aria-label="refresh button">
                                    <RefreshIcon />
                                </IconButton>
                            </div>
                            <div id="card_content" className="flex-container">
                                {card_content}
                            </div>
                        </React.Fragment>
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
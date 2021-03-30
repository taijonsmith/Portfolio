import React, { useEffect } from 'react';
import './css/prototype_one.css';
import { debouncer } from '../utils';
import RefreshPage from './refresh_page';
import AppContainer from './app_container'
import AppCard from './app_card';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';


function PrototypeOne(props) {
    const [loading, setLoading] = React.useState(false);
    const [contentList, setContentList] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const logged_in = useSelector(state => state.user.logged_in);
    const current_prototype = useSelector(state => state.current_prototype);
    const people_api_url = 'https://api.tvmaze.com/people/';
    const DEFAULT_DATA_COUNT = 12;
    const container_content = [{name: 'Filtered List 1'}, {name: 'Filtered List 2'}, {name: 'Filtered List 3'}, {name: 'Filtered List 4'}, {name: 'Filtered List 5'}];
    const debounce = debouncer(function(callback, time){ callback(time); return time }, 400);

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
                console.log(json_data)
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
        if (!api_url) {
            return;
        }
        const callback = () => {
            setRefreshing(true);
            //rotate_button();
            get_api_content(api_url).then((data) => {
                setContentList(data);
                setRefreshing(false);
            }).catch((console.log('REFRESH FAILED!!')));
        }
        debounce(callback);
    }

    useEffect(() => {
        if (contentList.length === 0 && current_prototype.index === 1) {
            async function load_initial_data() {
                setLoading(true);
                try {
                    const data = await get_api_content(people_api_url);
                    setContentList(data);
                }
                catch(err) {
                    console.log('UNABLE TO LOAD DATA');
                }
                setLoading(false);
            }
            load_initial_data();
        }
    }, [contentList]);

    useEffect(() => {
        if (contentList.length > 0) {
            setContentList([]);
        }
    }, [logged_in]);

    const containers = container_content && container_content.length > 0 ? container_content.map((container, index) => {
        return (
            <AppContainer key={index} className="flex-container card_content_container" content_list={contentList} refresh_content={refresh_content} refreshing={refreshing} name={container.name} />
        );
    }) : null;

    const card_content = contentList && contentList.length > 0 ? contentList.map((content, index) => {
        const image = content.image ? content.image.medium : null;
        return (<AppCard key={index} name={content.name} image={image} url={content.url} refreshing={props.refreshing} />);
    }) : [];
    
    return (
        <React.Fragment>
            {loading ? <RefreshPage /> :
                (<div id="prototype_one">
                    {containers}
                    <div className="content_container">
                        <Typography className="content_header" variant="h5">More Actors</Typography>
                        <div className="card_container">
                            {card_content}
                        </div>
                    </div>
                </div>)
            }
        </React.Fragment>
    );
}

export default PrototypeOne;
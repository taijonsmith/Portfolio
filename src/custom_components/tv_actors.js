import React, { useEffect } from 'react';
import './css/tv_actors.css';
import { edit_class, debouncer } from '../utils';
import AppCard from './app_card';
import RefreshPage from './refresh_page';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Typography from '@material-ui/core/Typography';

export default function TvActors(props) {
    const refresh_button = React.useRef(null);
    const [loading, setLoading] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [contentList, setContentList] = React.useState([]);
    const people_api_url = 'https://api.tvmaze.com/people/';
    const debounce = debouncer(function(callback, time){ callback(time); return time }, 400);

    function rotate_button() {
        if (!refresh_button.current) {
            return;
        }
        edit_class('remove', refresh_button.current, 'rotate360');
        void refresh_button.current.offsetWidth;
        edit_class('add', refresh_button.current, 'rotate360');
    }

    function refresh_content(api_url) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        if (!api_url) {
            return;
        }
        const callback = () => {
            setRefreshing(true);
            rotate_button();
            props.get_api_content(api_url).then((data) => {
                setContentList(data);
                setRefreshing(false);
            });
        }
        debounce(callback);
    }

    useEffect(() => {
        async function load_initial_data() {
            setLoading(true);
            const data = await props.get_api_content(people_api_url);
            setContentList(data);
            setLoading(false);
        }
        load_initial_data();
    }, []);

    const card_content = contentList && contentList.length > 0 ? contentList.map((content, index) => {
        const image = content.image ? content.image.medium : null;
        return (<AppCard key={index} name={content.name} image={image} url={content.url} refreshing={refreshing} />);
    }) : [];


    return (
        <React.Fragment>
            {loading ? <RefreshPage /> :
                (<div id="actors_page" className="content_page">
                    <Typography className="subheader" variant="h6">TV Actors</Typography>
                    <div className="refresh_container">
                        <IconButton ref={refresh_button} id="refresh_button" onClick={() => refresh_content(people_api_url)} aria-label="refresh button" disabled={refreshing}>
                            <RefreshIcon />
                        </IconButton>
                    </div>
                    <div className="flex-container card_content_container">
                        {card_content}
                    </div>
                </div>)
            }
        </React.Fragment>
    )
}
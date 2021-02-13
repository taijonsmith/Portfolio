import React, { useEffect } from 'react';
import '../css/design_one.css';
import Typography from '@material-ui/core/Typography';
import AppCard from '../app_card';
import Grow from '@material-ui/core/Grow';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


export default function DesignOne() {
    const current_prototype = useSelector(state => state.current_prototype);
    const [contentList, setContentList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const api_url = 'https://api.tvmaze.com/people/';
    const data_count = 24;

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
                await get_api_content(api_url + i).then((data) => {
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

    return (
        <Grow in={current_prototype === 1}>
            <div id="design_one" className="content">
                <div id="tv_actors">
                    <Typography className="subheader" variant="h6">TV Actors</Typography>
                    {loading ? 
                    <div className="center"><CircularProgress color="primary" /> </div>:
                    <div id="card_content" className="flex-container">
                        {card_content}
                    </div>
                    }
                </div>
            </div>
        </Grow>
    );
}
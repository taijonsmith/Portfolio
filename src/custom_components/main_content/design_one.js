import React, { useEffect } from 'react';
import '../css/design_one.css';
import Typography from '@material-ui/core/Typography';
import AppCard from '../app_card';
import Grow from '@material-ui/core/Grow';
import { useSelector } from 'react-redux';


export default function DesignOne() {
    const current_prototype = useSelector(state => state.current_prototype);
    const [contentList, setContentList] = React.useState([]);
    const api_url = 'https://api.tvmaze.com/people/';
    const data_count = 30;

    async function get_api_content(url) {
        try {
            var content = [];
            for (var i=1; i < data_count; i++) {
                const result = await fetch(url + i);
                const json_data = await result.json();
                console.log(json_data)
                content.push(json_data);
            }
            return content;
        }
        catch(error) {
            console.log(error)
            //dispatch error
        }
    }

    useEffect(() => {
        get_api_content(api_url).then((data) => {setContentList(data)});
    }, []);

    const card_content = contentList && contentList.length > 0 ? contentList.map((content, index) => {
        const image = content.image ? content.image.medium : null;
        return (<AppCard key={index} name={content.name} image={image} />);
    }) : [];

    return (
        <Grow in={current_prototype === 1}>
            <div id="design_one" className="content">
                <div id="tv_actors">
                    <Typography className="subheader" variant="h6">TV Actors</Typography>
                    <div id="card_content" className="flex-container">{card_content}</div>
                </div>
            </div>
        </Grow>
    );
}
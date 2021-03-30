import React from 'react';
import './css/app_container.css';
import { edit_class } from '../utils';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import AppCard from './app_card';
import { open_dialog } from '../redux/actions/dialog_actions';
import { useDispatch } from 'react-redux';


export default function AppContainer(props) {
    const refresh_button = React.useRef(null);
    const dispatch = useDispatch();
    
    function rotate_button() {
        if (!refresh_button.current) {
            return;
        }
        edit_class('remove', refresh_button.current, 'rotate360');
        void refresh_button.current.offsetWidth;
        edit_class('add', refresh_button.current, 'rotate360');
    }

    function refresh_page() {
        rotate_button()
        props.refresh_content(props.url)
    }

    return (
        <Card id="app_container" raised>
            <CardContent>
                <Typography variant="h6" className="container_header subheader">
                    <div className="container_title">
                        {props.name}
                        <IconButton ref={refresh_button} className="button" onClick={() => refresh_page} aria-label="refresh button" disabled={props.refreshing}>
                            <RefreshIcon />
                        </IconButton>
                    </div>
                </Typography>

                <GridList className="content_list" cols={1.5} spacing={8}>
                    {props.content_list.map((content, index) => {
                        const image = content.image ? content.image.medium : null;
                        return (
                            <AppCard key={index} name={content.name} image={image} url={content.url} refreshing={props.refreshing} />
                        )})
                    }
                </GridList>
                
                <CardActions className="card_actions">
                    <Button className="button" onClick={() => {dispatch(open_dialog('general', 'See More', 'In Progress...'))}}>See More</Button>
                </CardActions>
                

                
            </CardContent>
        </Card>
    );
}
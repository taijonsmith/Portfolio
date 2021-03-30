import React, { useRef } from 'react';
import './css/app_views.css';
import SwipeableViews from 'react-swipeable-views';
import PlaceHolderPage from './placeholder_page';


export default function AppViews(props) {
    const views = useRef(null);

    const tab_views = props.tabs && props.tabs.length > 0 ? props.tabs.map((tab, index) => {
        const tab_view = tab.view ? tab.view : (<PlaceHolderPage key={index} />);
        return tab_view;
    }) : [];

    return (
        <SwipeableViews 
        ref={views} 
        id="views" 
        index={props.tabIndex} 
        onChangeIndex={props.tabIndexChanged}>
            {tab_views}
        </SwipeableViews>
    );
}
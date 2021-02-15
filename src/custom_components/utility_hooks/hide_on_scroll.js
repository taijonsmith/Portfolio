import React from 'react';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export default function HideOnScroll(props) {
    const { children } = props;
    var scroll_trigger = useScrollTrigger({threshold: 80});


    return (
      <Slide direction="down" in={!scroll_trigger}>
        {children}
      </Slide>
    );
}
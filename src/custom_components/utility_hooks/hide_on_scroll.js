import React from 'react';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export default function HideOnScroll(props) {
    const { children } = props;
    var scroll_trigger = useScrollTrigger({threshold: 80});
    var trigger = props.force_show_tabs ?  false : scroll_trigger;

    return (
      <Slide direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}
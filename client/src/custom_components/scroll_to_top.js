import React from 'react';
import './css/scroll_to_top.css';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';


function ScrollToTop() {
    const trigger = useScrollTrigger({threshold: 20});

    function scroll_to_top () {
        window.scrollTo({ top: 0,  behavior: 'smooth'});
    }

  return (
    <Slide appear={false} direction="up" in={trigger}>
      <Fab id="scroll_to_top_button" size="small" aria-label="scroll back to top" onClick={scroll_to_top} color="primary">
        <KeyboardArrowUpIcon/>
      </Fab>
    </Slide>
  );
}

export default ScrollToTop;
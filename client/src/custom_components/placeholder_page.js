import React, { useEffect } from 'react';

const PlaceHolderPage = React.forwardRef((props, ref) => {
    useEffect(() => {
        if (props.current_tab === props.tab_index) {
            window.scrollTo({ top: 0, behavior: 'auto'});
        }
    }, [props.current_tab])

    return (
        <div ref={ref} />
    )
})

export default PlaceHolderPage;
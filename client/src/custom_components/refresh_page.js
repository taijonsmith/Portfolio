import React from 'react';
import './css/refresh_page.css';
import { CircularProgress } from '@material-ui/core';

export default function RefreshPage() {
    React.useEffect(() => {
        window.scrollTo({top: 0});
    });

    return (
        <div className="center">
            <CircularProgress color="primary" />
        </div>
    )
}
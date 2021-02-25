import React from 'react';
import './css/refresh_page.css';
import { CircularProgress } from '@material-ui/core';

export default function RefreshPage() {
    return (
        <div className="center">
            <CircularProgress color="primary" />
        </div>
    )
}
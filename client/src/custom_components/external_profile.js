import React from 'react';
import './css/external_profile.css';
import Button from '@material-ui/core/Button';

function ExternalProfile(props) {

  return (
    <Button className="action_button" size="small" color="primary" variant="contained">
        <a className="card_link" href={props.url} target="_blank" rel="noreferrer">Profile</a>
    </Button>
  );
}

export default ExternalProfile;
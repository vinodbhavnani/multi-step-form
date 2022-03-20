import React from 'react';
import { Button } from 'react-bootstrap';
import './ThankYouPage.css'

const ThankYouPage = ({ submitApp }) => {
    return (<div className='thankyou-page'>
        <div>Thank You</div>
        <div>Application submitted successfully</div>
    <Button variant="success" size="lg" className="submit-button" onClick={() => submitApp(false)}>Submit another application</Button></div>)
};

export default ThankYouPage;

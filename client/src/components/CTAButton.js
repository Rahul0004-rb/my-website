import React from 'react';
import { Button } from 'react-bootstrap';

function CTAButton({ text, onClick }) {
    return (
        <Button variant="primary" onClick={onClick} className="mt-3">
            {text}
        </Button>
    );
}

export default CTAButton;


import { Card, Button } from 'react-bootstrap'

import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
     <>
                <Card>
                    <Card.Header as="h5">Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
    </>
        );
    }
}

export default About;
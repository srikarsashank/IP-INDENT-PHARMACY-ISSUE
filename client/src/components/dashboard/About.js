import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import NavigationBar_ws from './NavigationBar_ws';
import { Card } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class About extends Component {
    render() {
        return (
            <div>
                <Route render={({ history }) => (
                    <button className='btn1' style={{ marginLeft: '1200px', marginBottom: '50px', marginTop: '50px' }} onClick={() => { history.push('/Issuedindentws') }}>
                        Go back to IssuedIndents page
                    </button>
                )} />
                <div className="about-section" style={{ marginBottom: '80px', marginTop: '50px', width: '100rem' }}>
                    <h1 style={{ textDecoration: 'underline', marginRight: '50px', marginBottom: '20px' }}>About the software</h1>
                    <p>The contents in this browser guides you for using this application fluently and efficiently.</p>
                </div>
                <div style={{ marginLeft: '550px' }}>
                    <Card style={{ width: '40rem', height: '4rem', marginBottom: '50px' }}>
                        <Card.Body style={{ backgroundColor: 'cyan' }}>
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'left', fontSize: '20px', fontWeight: 'bold', color: 'black' }} >
                                How to issue an indent
                        </Card.Subtitle>
                            <Accordion defaultActiveKey="0">
                                <Row className="m-0">
                                    <Col className="">
                                        <Row className="px-0" style={{ padding: '0px' }}>
                                            <Accordion.Toggle as={Button} className="px-0" variant="link" eventKey="1">
                                                Click to View More
                                            </Accordion.Toggle>
                                        </Row>
                                        <Accordion.Collapse eventKey="1">
                                            <Row style={{ textAlign: 'left', color: 'black', fontFamily: 'cursive', fontSize: '20px' }} className="p-2" >Please enter all the fields required else the system prompts an error and indent will not be raised. Please enter all the correct entries as this software's purpose is a security driven software . There is an option for the emergency indent if the indent is required as soon as possible . And it should be used only if it is necessary.  If there is no emergency you can raise a normal indent . Hope you find this software useful and have a nice day!</Row>
                                        </Accordion.Collapse>
                                    </Col>
                                </Row>
                            </Accordion>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '40rem', height: '4rem', marginBottom: '50px' }}>
                        <Card.Body style={{ backgroundColor: 'cyan' }}>
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'left', fontSize: '20px', fontWeight: 'bold', color: 'black' }} >
                                How to verify quantites of medicines
                        </Card.Subtitle>
                            <Accordion defaultActiveKey="0">
                                <Row className="m-0">
                                    <Col className="">
                                        <Row className="px-0" style={{ padding: '0px' }}>
                                            <Accordion.Toggle as={Button} className="px-0" variant="link" eventKey="1">
                                                Click to View More
                                            </Accordion.Toggle>
                                        </Row>
                                        <Accordion.Collapse eventKey="1">
                                            <Row style={{ textAlign: 'left', color: 'black', fontFamily: 'cursive', fontSize: '20px' }} className="p-2" >Please enter all the fields required else the system prompts an error and indent will not be raised. Please enter all the correct entries as this software's purpose is a security driven software . There is an option for the emergency indent if the indent is required as soon as possible . And it should be used only if it is necessary.  If there is no emergency you can raise a normal indent . Hope you find this software useful and have a nice day!</Row>
                                        </Accordion.Collapse>
                                    </Col>
                                </Row>
                            </Accordion>
                        </Card.Body>

                    </Card>
                    <Card style={{ width: '40rem', height: '4rem' }}>
                        <Card.Body style={{ backgroundColor: 'cyan' }}>
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'left', fontSize: '20px', fontWeight: 'bold', color: 'black' }} >
                                How to raise an indent
                        </Card.Subtitle>
                            <Accordion defaultActiveKey="0">
                                <Row className="m-0">
                                    <Col className="">
                                        <Row className="px-0" style={{ padding: '0px' }}>
                                            <Accordion.Toggle as={Button} className="px-0" variant="link" eventKey="1">
                                                Click to View More
                                            </Accordion.Toggle>
                                        </Row>
                                        <Accordion.Collapse eventKey="1">
                                            <Row style={{ textAlign: 'left', color: 'black', fontFamily: 'cursive', fontSize: '20px' }} className="p-2" >Please enter all the fields required else the system prompts an error and indent will not be raised. Please enter all the correct entries as this software's purpose is a security driven software . There is an option for the emergency indent if the indent is required as soon as possible . And it should be used only if it is necessary.  If there is no emergency you can raise a normal indent . Hope you find this software useful and have a nice day!</Row>
                                        </Accordion.Collapse>
                                    </Col>
                                </Row>
                            </Accordion>
                        </Card.Body>

                    </Card>
                </div>
            </div>
        )
    }
}


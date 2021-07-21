import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './Newindent.css';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar_ip from './NavigationBar_ip';

const Swal = require('sweetalert2');

export default class Issuedindent extends Component {

    state = {
        issuedindents: []
    };

    componentDidMount() {
        this.getIssuedIndent();
    };

    getIssuedIndent() {

        axios.get('http://localhost:5000/raisedindent/issue/issueall')
            .then((response) => {
                const data = response.data;
                // console.log(data);
                // console.log("2");
                this.setState({ issuedindents: data });

                console.log("data from mongo recieved to issuedindents");


            })
            .catch((error) => {
                console.log(error);

            })
    }


    render() {

        const indentslist = this.state.issuedindents;

        return indentslist.map((item, index) => {

            return (
                <div className='mt-3'>

                    <Card style={{ width: '40rem', marginLeft: '350px' }}>
                        <Card.Body >
                            <Card.Title style={{ color: 'black' }} >{item.patientid}</Card.Title>
                            {/* <Card.Subtitle style={{ textAlign: 'left' }} className="mb-2 text-muted" >PATIENTNAME: {item.patientname}</Card.Subtitle> */}
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'left' }} >
                                Indent: {item.items}
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'left' }} >
                                CONSULTANT: {item.consultant}
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'left' }} >
                                Wardsister ID: {item.wardsisterid}
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
                                            <Row style={{ textAlign: 'left', color: 'black', fontFamily: 'cursive', fontSize: '20px' }} className="p-2" >WardsisterName: {item.wardsistername}</Row>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Row style={{ textAlign: 'left', color: 'black', fontFamily: 'cursive', fontSize: '20px' }} className="p-2" >PatientName: {item.patientname}</Row>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Row style={{ textAlign: 'left', color: 'black', fontFamily: 'cursive', fontSize: '20px' }} className="p-2" >Ward No: {item.wardno}</Row>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Row style={{ textAlign: 'left', color: 'black', fontFamily: 'cursive', fontSize: '20px' }} className="p-2" >Bed No: {item.bedno}</Row>
                                        </Accordion.Collapse>
                                    </Col>
                                </Row>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </div>

            )
        })

    }
}


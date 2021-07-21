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
import img from './img.jpg';

const Swal = require('sweetalert2');

export default class Newindent extends Component {

    state = {
        indents: []
    };

    componentDidMount() {
        this.getIndent();
    };

    getIndent() {

        axios.get('http://localhost:5000/indent/all')
            .then((response) => {
                const data = response.data;
                // console.log(data);
                this.setState({ indents: data });

                console.log("data from mongo recieved to newindents");


            })
            .catch((error) => {
                console.log(error);

            })
    }

    handlesubmit(wardsisterid, wardsistername, patientid, patientname, wardno, bedno, consultant, items) {

        const data = {
            wardsisterid: wardsisterid,
            wardsistername: wardsistername,
            patientid: patientid,
            patientname: patientname,
            wardno: wardno,
            bedno: bedno,
            consultant: consultant,
            items: items,
        };

        axios.post('http://localhost:5000/raisedindent/issue', data)
            .then(() => {

                Swal.fire({
                    title: 'successful',
                    text: "Click ok to issue indent",
                    type: 'success',
                    confirmButtonText: 'ok'
                })
                    .then(res => {
                        res.json(res.data);
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })

            })
            .catch((error) => {
                console.log("error while issuing data", error);
            });
    }


    render() {

        const indentslist = this.state.indents;
        return indentslist.map((item, index) => {
            return (
                <div className='mt-3'>
                    <Card style={{ width: '40rem', alignContent: 'center', marginLeft: '350px' }}>
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
                            {/* <Card.Img variant="bottom" className="im" style={{ marginLeft: '300px', marginTop: '-100px', width: '100px', height: '80px' }} src="https://www.crushpixel.com/big-static7/preview4/emergency-icon-139148.jpg" /> */}
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
                            <button style={{ width: '20rem', backgroundColor: 'cyan' }} type="submit" onClick={() => this.handlesubmit(item.wardsisterid, item.wardsistername, item.patientid, item.patientname, item.wardno, item.bedno, item.consultant, item.items)}>ISSUE</button>
                        </Card.Body>
                    </Card>
                </div>


            )
        })

    }
}


import React, { Component } from 'react';
import axios from 'axios';
import './Newindent.css';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Newindent extends Component {

    state = {
        indents: []
    };

    componentDidMount() {
        this.getIndent();
    };

    getIndent() {

        console.log('1');

        axios.get('http://localhost:5000/indent/all')
            .then((response) => {
                const data = response.data;
                console.log(data);
                this.setState({ indents: data });

                console.log("data from mongo recieved to newindents");


            })
            .catch((error) => {
                console.log(error);

            })
    }


    render() {

        const indentslist = this.state.indents;

        return indentslist.map((item, index) => {
            return (
                <div className="list" style={{ color: 'black' }} key={index}>
                    <br></br>
                    <h3>PatientID : {item.patientid}</h3>
                    <h3> WardNO : {item.wardno}</h3>
                    <p>Medicines : {item.items}</p>
                    <button>ISSUE</button>
                </div>

            )
        })

    }
};


import React, { Component } from 'react'
import './Indentform.css';

export default class Indentform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientid: "",
            patientname: "",
            wardno: "",
            bedno: "",
            consultant: "",
            item: ""
        }
    }
    handleChangepatientid = (event) => {
        this.setState({ patientid: event.target.value });
    }
    handleChangepatientname = (event) => {
        this.setState({ patientname: event.target.value });
    }
    handleChangewardno = (event) => {
        this.setState({ wardno: event.target.value });
    }
    handleChangebedno = (event) => {
        this.setState({ bedno: event.target.value });
    }
    handleChangeconsultant = (event) => {
        this.setState({ consultant: event.target.value });
    }
    handleChangeitem = (event) => {
        this.setState({ item: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`
        Patientid : ${this.state.patientid}
        Patientname : ${this.state.patientname}
        ward no : ${this.state.wardno}
        bed no : ${this.state.bedno}
        consultant : ${this.state.consultant}
        items/qty : ${this.state.item}
        `);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <body>
                    <h2 style={{ color: 'black' }}> Indent Form</h2>
                    <div class="container">
                        <ul class="flex-outer">
                            <li>
                                <label className="l1">Patient Id</label>
                                <input type="text" id="patientid" value={this.state.patientid} onChange={this.handleChangepatientid} placeholder="Enter patient id here" />
                            </li>
                            <li>
                                <label className="l1"> Patient Name</label>
                                <input type="text" id="patientname" value={this.state.patientname} onChange={this.handleChangepatientname} placeholder="Enter patient name here" />
                            </li>
                            <li>
                                <label className="l1" >Patient ward no</label>
                                <input type="number" id="wardno" value={this.state.wardno} onChange={this.handleChangewardno} placeholder="Enter your email here" />
                            </li>
                            <li>
                                <label className="l1" >Patient bed no</label>
                                <input type="number" id="bedno" value={this.state.bedno} onChange={this.handleChangebedno} placeholder="Enter your phone here" />
                            </li>
                            <li>
                                <label className="l1">Consultant</label>
                                <input type="text" id="consultant" value={this.state.consultant} onChange={this.handleChangeconsultant} placeholder="Enter your consultant here" />
                            </li>
                            <li>
                                <label className="l1" >Item/ QUANTITY</label>
                                <input type="text" id="item" value={this.state.item} onChange={this.handleChangeitem} placeholder="Enter medicine req. here" />
                                <input type="number" id="qty" />
                            </li>
                            <li>
                                <button type="submit">RAISE INDENT</button>
                            </li>
                        </ul>
                    </div>
                </body>
            </form>
        )
    }
}

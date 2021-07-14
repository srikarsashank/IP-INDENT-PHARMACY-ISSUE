import React, { Component } from 'react'
import './Indentform.css';

export default class Indentform extends Component {
    render() {
        return (
            <body>
                <h2 style={{ color: 'black' }}> Indent Form</h2>
                <div class="container">
                    <form>
                        <ul class="flex-outer">
                            <li>
                                <label className="l1" for="first-name">Patient Id</label>
                                <input type="text" id="first-name" placeholder="Enter your first name here" />
                            </li>
                            <li>
                                <label className="l1" for="last-name"> Patient Name</label>
                                <input type="text" id="last-name" placeholder="Enter your last name here" />
                            </li>
                            <li>
                                <label className="l1" for="email">Patient ward no</label>
                                <input type="email" id="email" placeholder="Enter your email here" />
                            </li>
                            <li>
                                <label className="l1" for="phone">Patient bed no</label>
                                <input type="tel" id="phone" placeholder="Enter your phone here" />
                            </li>
                            <li>
                                <label className="l1" for="message">Consultant</label>
                                <input type="tel" id="phone" placeholder="Enter your consultant here" />
                            </li>
                            <li>
                                <label className="l1" for="phone">Item/ QUANTITY</label>
                                <input type="tel" id="phone" placeholder="Enter your phone here" />
                            </li>
                            <li>
                                <button type="submit">Submit</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </body>
        )
    }
}

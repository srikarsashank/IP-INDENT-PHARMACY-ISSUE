import React, { Component } from 'react';
import NavigationBar_ip from './NavigationBar_ip';
import Issuedindent from './Issuedindent';
import NavigationBar_ws from './NavigationBar_ws';

export default class Indentpharma extends Component {
    render() {
        return (
            <div>
                <h2 style={{ color: 'black', fontFamily: 'Jazz LET' }}> Navigation Bar</h2>
                <NavigationBar_ws />
                <Issuedindent />
            </div>
        )
    }
}
import React, { useState } from 'react';
import './Availabledrugs.css';
import NavigationBar_ip from './NavigationBar_ip';

function Availabledrugs() {
    const [users, setUsers] = useState([
        { id: 1, medicine: "PARACETMOL(500mg)", quantity: 113 },
        { id: 2, medicine: "Intra Venous Catheter (22 G)", quantity: 50 },
        { id: 3, medicine: "AMLODIPINE (100 mg)", quantity: 76 },
        { id: 4, medicine: "Naso Gastric Tube (Infant)", quantity: 16 },
        { id: 5, medicine: "ALBUTEROL (20 mg)", quantity: 23 }
    ]);

    return (
        <div>

            <NavigationBar_ip />
            <div style={{ paddingTop: '100px' }}>
                <button className="head" >Available medicines</button>
            </div>
            <div>
                <button className="one" style={{ backgroundColor: 'white', width: '200px', marginRight: '200px' }}>Item</button> <button className="one" style={{ backgroundColor: 'white', width: '200px' }}>Qty</button>
            </div>
            <div>
                <button className="one">PARACETMOL(500mg)</button> <button className="one">113</button>
            </div>
            <div>
                <button className="one">Intra Venous Catheter (22 G)</button> <button className="one">50</button>
            </div>
            <div>
                <button className="one">AMLODIPINE (100 mg)</button> <button className="one">76</button>
            </div>
            <div>
                <button className="one">Naso Gastric Tube (Infant)</button> <button className="one">16</button>
            </div>
            <div>
                <button className="one">ALBUTEROL (20 mg)</button> <button className="one">23</button>
            </div>
            <div>
                <button className="one">Gauze (2 X 2)</button> <button className="one">9</button>
            </div>
        </div>
    );
}

export default Availabledrugs;
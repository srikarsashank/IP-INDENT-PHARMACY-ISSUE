import React, { useState } from 'react';
import './Availabledrugs.css';

function Availabledrugs() {
    const [users, setUsers] = useState([
        { id: 1,medicine : "PARACETMOL(500mg)" , quantity : 113},
        { id: 2, medicine : "Intra Venous Catheter (22 G)" , quantity : 50  }, 
        { id: 3,medicine : "AMLODIPINE (100 mg)" , quantity : 76 },
        { id: 4,medicine : "Naso Gastric Tube (Infant)" , quantity : 16 },
        { id: 5, medicine : "ALBUTEROL (20 mg)" , quantity : 23 }
    ]);

    return (
        <div className="container">
            <button className="head" >Available medicines</button>
            <table className="table">
                <thead>
                    <tr className="col" >
                        <th>Item</th>
                        <th style={{marginLeft:'50px'}}>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr className="row" style={{backgroundColor:'cyan'}} key={user.id}>
                            <td>{user.medicine}</td>
                            <td>{user.quantity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Availabledrugs;
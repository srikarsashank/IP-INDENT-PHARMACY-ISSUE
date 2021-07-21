import React from 'react'
import { Route } from 'react-router-dom'
import './Loginoption.css';
import logo from './yashodha_logo.png';




const Loginoption = () => {

    return (
        <div>
            <img className="img" src={logo} alt="Logo" />

            <div className='button'>
                <Route render={({ history }) => (
                    <button className='btn1' onClick={() => { history.push('/Newindent') }}>
                        LOGIN as PHARMACIST
                    </button>
                )} />
                <Route render={({ history }) => (
                    <button className='btn2' onClick={() => { history.push('/Indentform') }}>
                        LOGIN to INDENT
                    </button>
                )} />
            </div>

        </div>


    )

}

export default Loginoption
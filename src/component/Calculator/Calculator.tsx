import * as React from 'react';

import logo from '../../img/logo.svg'

import './Calculator.scss'
const Calculator = () => {

    return (
        <main className='main'>
            <img className='img' src={logo} alt="logo" />
            <section className='calculatror'> 
            <label > Bill 
                <input type="number" />
            </label>
            <label > Select Tip% 
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>25%</button>
                <button>50%</button>
                <input type="number" />
            </label>
            <label > Number of people 
                <input type="number" />
            </label>
            <div>
                <p>Tip Amount</p> <span>tip</span>
                <p>/person</p>
                <p>Total</p> <span>total cost</span>
                <p>/person</p>
                <button>restart</button>
            </div>
            </section>
        </main>
    )
}

export default Calculator;
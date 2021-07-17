import * as React from 'react';

import logo from '../../img/logo.svg'

import './Calculator.scss'
const Calculator = () => {

    return (
        <main className='main'>
            <img className='img' src={logo} alt="logo" />
            <section className='calculatror'>
                <div className='form'>

                    <label className='bill' > Bill <br />
                        <input className='input' type="number" />
                    </label>

                    <div>

                        <label className='labelSelectTip' > Select Tip%  </label>
                        <div className='selectTip'>
                            <button className='btn5%' >5%</button>
                            <button className='btn10%'>10%</button>
                            <button className='btn15%'>15%</button>
                            <button className='btn25%'>25%</button>
                            <button className='btn50%'>50%</button>
                            <input className='selectInput' type="number" />
                        </div>
                    </div>
                    <label className='numberOfPeople' > Number of people  <br />
                        <input className='input' type="number" />
                    </label>
                </div>
                <div className='outputForm'>
                    <p>Tip Amount</p> <span>tip</span>
                    <p>/person</p>
                    <p>Total</p> <span>total cost</span>
                    <p>/person</p>
                    <button className='btn' >restart</button>
                </div>
            </section>
        </main>
    )
}

export default Calculator;

import { useState } from 'react'
import logo from '../../img/logo.svg'

import './Calculator.scss'

const Calculator = () => {
    const [bill, setBill] = useState<number | undefined | string>()
    const [tip, setTip] = useState<number | undefined | string>()
    const [inputTip, setInputTip] = useState<number | undefined | string>()
    const [numberOfPeople, setNumberOfPeople] = useState<number | undefined | string>()

    const handleBill = (e: any) => {
        setBill(e.target.value)
    }
    const handleTip = (e: any) => {
        setInputTip(Number(''));
        setTip(e.target.value);
    }
    const handleNumberOfPeople = (e: any) => {
        setNumberOfPeople(e.target.value)
    }
    const hanldeInputTip = (e: any) => {
        setInputTip(e.target.value)
    }
    const tipAmount = (bill: number | any, tip: number | any, people: number | any) => {
        if (people === 0 && tip === 0) {
            return (null)
        } else {
            return ((Number(bill) / 100 * Number(tip)) / Number(people)).toFixed(2)
        }
    }
    const totalCost = (bill: number | any, tip: number | any, people: number | any) => {
        if (people === 0 && tip === 0) {
            return (null)
        } else {
            return (((Number(bill) / 100 * Number(tip)) / Number(people) * Number(people) + Number(bill)) / Number(people)).toFixed(2)
        }
    }

    const handleReset = () => {
        setBill('')
        setNumberOfPeople('')
        setTip('')
        setInputTip('')
    }

    return (
        // <main className='main'>
        <>
            <img className='img' src={logo} alt="logo" />
            <section className='calculatror'>
                <div className='form'>

                    <label className='bill' > Bill <br />
                        <input placeholder='0' onChange={handleBill} value={bill} className='inputBill' type="number" min={0} />
                    </label>

                    <div>
                        <label className='labelSelectTip' > Select Tip %  </label>
                        <div className='selectTip'>
                            <button onClick={handleTip} className='btn5' value={5}>5%</button>
                            <button onClick={handleTip} className='btn10' value={10}>10%</button>
                            <button onClick={handleTip} className='btn15' value={15}>15%</button>
                            <button onClick={handleTip} className='btn25' value={25}>25%</button>
                            <button onClick={handleTip} className='btn50' value={50}>50%</button>
                            <input onChange={hanldeInputTip} className='selectInput' type="number" placeholder='Custom' value={inputTip} />
                        </div>
                    </div>

                    <label className='numberOfPeople' > Number of people  <br />
                        <input placeholder='0' onChange={handleNumberOfPeople} value={numberOfPeople} className={Number(numberOfPeople) === 0 ? 'inputPeopleRed' : 'inputPeople'} type="number" min={0} />
                    </label>

                </div>

                <div className='outputForm'>

                    <p className='tipAmount'>Tip Amount
                        <br />
                        <span className='person1'>/person</span>
                    </p>
                    <span className='cost'>{`$${isNaN(Number(tipAmount(bill, inputTip || tip, numberOfPeople))) === true ? "0.00" : tipAmount(bill, inputTip || tip, numberOfPeople)}`}</span>

                    <p className='total'>Total
                        <br />
                        <span className='person2'>/person</span>
                    </p>
                    <span className='totalCost'>{`$${isNaN(Number(totalCost(bill, inputTip || tip, numberOfPeople))) === true ? "0.00" : totalCost(bill, inputTip || tip, numberOfPeople)}`}</span>

                    <button className={'btn'} onClick={handleReset}>reset</button>
                </div>
            </section>
        </>
        // </main> 
    )
}

export default Calculator;
import React, {useState}from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import './App.css';

function App() {
  const [name,setName]=useState("")
  const [number,setNumber]=useState("")
  const [expiry,setExpiry]=useState("")
  const [cvc,setCvc]=useState("")
  const [focus,setFocus]=useState("")
  // const [expMonth, setExpMonth] = useState('');
  // const [expYear, setExpYear] = useState('');
 
  // useEffect(() => {
  //  setExpiry(expMonth + expYear)
  // }, [expMonth || expYear])

  // const handleDateChange = (e) => {
  //   setExpMonth(e.target.value)
  //   setExpYear(e.target.value)
  //   setExpiry(expMonth + expYear)
  // }


  return (
    <div className="App">
      <Cards
        number={number}
        name={name}
        cvc={cvc}
        expiry={expiry}
        focused={focus}
      />
      <form className="form">
        <div className="input_field">
          <label> Card Number </label>
          <input
            type="tel"
            name="number"
            // placeholder="Card Number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <label> Card Holder </label>
          <input
            type="text"
            name="name"
            // placeholder="Card Name"
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <label> Expiration Date </label>
          
          {/* <div className="expiry">
          <select  type="tel" name="expiry" value={expiry}
          onChange={e =>  setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}>
            <option >Month</option>
            {['01','02','03','04','05','06','07','08','09','10','11','12'].map(item => 
                <option value={item}>{item}</option>)}
            </select>
            <select className="expiry"  type="tel" name="expiry" value={expiry}
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}>
            <option >Year</option>
            {['2021','2022','2023','2024','2025','2026','2027','2028','2029','2030'].map(item => 
                <option value={item}>{item}</option>)}
        </select>
        </div> */}
          <input
          type="text"
          name="expiry"
          // placeholder="MM/YYYY Expiry"
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />

        <label className="labelCvc"> CVV </label>
        <input
            type="tel"
            name="cvc"
            // placeholder="CVC"
            value={cvc}
            onChange={e => setCvc(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          </div>
          <button className="button">Submit</button>
      </form>
      
    </div>
  );
}

export default App;

 
import React,{useState} from "react";

import 'react-credit-cards/es/styles-compiled.css';

import Cards from 'react-credit-cards';
import styles from './PaymentCard.module.css'
export default function PaymentCard() {

  const [number, setNumber] = useState('');

  const [name, setName] = useState('');

  const [expiry, setExpiry] = useState('');

  const [cvc, setCvc] = useState('');

  const [focus, setFocus] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.payment}>

    <div className={styles.container}>
        
    <h3>Please Fill your card Details</h3>
       <Cards

          cvc={cvc}

          expiry={expiry}

          focused={focus}

          name={name}

          number={number}

        />

      <form onSubmit={handleSubmit}>

        <input

          type="tel"

          name="number"

          val={number}

          placeholder={"Enter Number"}

          onChange={e => setNumber(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <input

          type="tel"

          name="name"

          val={name}

          placeholder={"Enter Name"}

          onChange={e => setName(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <input

          type="tel"

          name="expiry"

          val={expiry}

          placeholder={"Enter Expiry date"}

          onChange={e => setExpiry(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <input

          type="tel"

          name="cvc"

          val={cvc}

          placeholder={"Enter Cvc"}

          onChange={e => setCvc(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />
        <input type="submit" value="Proceed to checkout" className={styles.btn}/>

      </form>

    </div>
    </div>
  );

}


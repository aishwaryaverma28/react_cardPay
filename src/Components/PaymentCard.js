import React,{useState} from "react";

import 'react-credit-cards/es/styles-compiled.css';

import Cards from 'react-credit-cards';
import styles from './PaymentCard.module.css'
export default function PaymentCard() {

  const [number, setNumber] = useState('4545');

  const [name, setName] = useState('');

  const [expiry, setExpiry] = useState('');

  const [cvc, setCvc] = useState('');

  const [focus, setFocus] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <body className={styles.payment}>
    <div className={styles.container}>
    <h3>Please Fill your card Details</h3>
    <div className={styles.flexContainer}>
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

          placeholder={"xxxx-xxxx-xxxx-xxxx"}

          onChange={e => setNumber(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <input

          type="tel"

          name="name"

          val={name}

          placeholder={"Name of card holder"}

          onChange={e => setName(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />
        <div className={styles.cvvNum}>

        <input

          type="tel"

          name="expiry"

          val={expiry}

          placeholder={"MM/YY"}

          onChange={e => setExpiry(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />

        <input

          type="tel"

          name="cvc"

          val={cvc}

          placeholder={"***"}

          onChange={e => setCvc(e.target.value)}

          onFocus={e=>setFocus(e.target.name)}

        />
        </div>
        <input type="submit" value="Proceed to checkout" className={styles.btn}/>

      </form>

    </div>
    </div>
    </body>
  );

}


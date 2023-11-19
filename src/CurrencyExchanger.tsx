import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const CurrencyExchanger: React.FC = () => {
 const [amount, setAmount] = useState('');
 const [fromCurrency, setFromCurrency] = useState('EUR');
 const [toCurrency, setToCurrency] = useState('USD');
 const [result, setResult] = useState('');

 const convertCurrency = async () => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      const rate = data.rates[toCurrency];
     const convertedAmount = amount * rate;
     setResult(convertedAmount.toFixed(3));
    } catch (error) {
      console.error('Error:', error);
    }
 };

 return (
    <div className="App text-center ms-4 align-items-center justify-content-center">
      <h1 className="text-bg-warning p-3 text-white text-start ms-4  fs-4 rounded">Currency Exchanger</h1>
      <div className='bg-danger bg-opacity-35 rounded '>
      <label>
      <span className="text-start ms-5 text-white">Amount:</span>
       <br></br>
        <input className="rounded ms-5  w-100" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label><br></br>

      <label>

      <span className='ms-5 text-white'>  From:</span><br></br>

        <select  className="ms-5 w-75 rounded" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </label>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-arrow-repeat ms-5 " viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg>                                                                                                                                                                                                                                                     

      <label>   
      <span className='ms-5 text-white'>  To:</span><br></br>

        <select className='ms-5 w-75 rounded fs-bold' value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>

          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </label><br></br>
      <button  type="button" className="btn btn-warning mt-3 ms-5 w-25" onClick={convertCurrency}>Convert</button>
      <p className="bg-white text-center mt-3 rounded"> {amount}{fromCurrency} = {result}{toCurrency}</p>

      <p className='text-center  rounded mb-5  '><span className="text-white">Result:</span> <br></br>
    <h6 className='bg-white rounded ms-5'> {result} {toCurrency}</h6></p>
    <h6 className='text-white '>More Details</h6>
    </div>

<h2 className="text-bg-warning p-3 text-white text-start ms-4  fs-4 rounded mt-3 ">most popular currencies</h2>
<div className='bg-danger bg-opacity-35 rounded  w-100'>
  <h5>1.000 EUR  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>   1.086USD</h5>
  <h6>1EUR=1.086USD  just now     1USD=0.920EUR</h6>
</div>
    </div>

 );
};

export default CurrencyExchanger;
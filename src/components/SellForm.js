import React, { useState } from 'react';
import ethLogo from '../img/eth.png';
import salehLogo from '../img/saleh.png';

function SellForm({ accountEthBalance, accountTokenBalance, sellTokens }) {
  const [output, setOutput] = useState(0);
  return (
    <form
      className='mb-3'
      onSubmit={(event) => {
        event.preventDefault();
        let etherAmount;
        etherAmount = output.toString();
        etherAmount = window.web3.utils.toWei(etherAmount, 'Ether');
        sellTokens(etherAmount);
      }}
    >
      <label class='d-flex'>
        <b class='me-auto font-weight-bold'>Input</b>
        <div class='text-muted'>{window.web3.utils.fromWei(accountTokenBalance, 'Ether')}</div>
      </label>

      <div className='input-group mb-4'>
        <input
          type='number'
          onChange={(event) => {
            const tokenAmount = event.target.value;
            if (tokenAmount < 0) {
              event.target.value = 0;
            } else setOutput(tokenAmount);
          }}
          className='form-control form-control-lg'
          placeholder='0'
          required
        />
        <div className='input-group-append'>
          <div className='input-group-text p-2'>
            <img className='rounded-circle' src={salehLogo} height='32' alt='' />
            &nbsp; SALEH
          </div>
        </div>
      </div>

      <label class='d-flex'>
        <b class='me-auto'>Output</b>
        <div class='text-muted'>{window.web3.utils.fromWei(accountEthBalance, 'Ether')}</div>
      </label>
      <div className='input-group mb-2'>
        <input type='text' className='form-control form-control-lg' placeholder='0' value={output / 100} disabled />
        <div className='input-group-append'>
          <div className='input-group-text p-2'>
            <img src={ethLogo} height='32' alt='' />
            &nbsp;&nbsp;&nbsp; ETH
          </div>
        </div>
      </div>
      <label class='d-flex mb-5 mt-3'>
        <b class='me-auto font-weight-bold'>Exchange Rate</b>
        <div class='text-muted'>1 ETH = 100 SALEH</div>
      </label>
      <button type='submit' className='btn btn-primary btn-lg btn-block w-100'>
        SWAP
      </button>
    </form>
  );
}

export default SellForm;

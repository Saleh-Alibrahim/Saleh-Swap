import React, { useState } from 'react';
import ethLogo from '../img/eth.png';

function SellForm({ accountEthBalance, accountTokenBalance }) {
  const [output, setOutput] = useState(0);
  return (
    <form
      className='mb-3'
      //   onSubmit={(event) => {
      //     event.preventDefault();
      //     let etherAmount;
      //     etherAmount = this.input.value.toString();
      //     etherAmount = window.web3.utils.toWei(etherAmount, 'Ether');
      //     // this.props.sellTokens(etherAmount);
      //   }}
    >
      <div>
        <label className='float-left'>
          <b>Input&nbsp;</b>
        </label>
        <span className='float-right text-muted'>Balance: {window.web3.utils.fromWei(accountTokenBalance, 'Ether')}</span>
      </div>
      <div className='input-group mb-4'>
        <input
          type='text'
          onChange={(event) => {
            const tokenAmount = event.target.value;
            setOutput(tokenAmount / 100);
          }}
          className='form-control form-control-lg'
          placeholder='0'
          required
        />
        <div className='input-group-append'>
          <div className='input-group-text p-2'>
            <img src={ethLogo} height='32' alt='' />
            &nbsp; SALEH
          </div>
        </div>
      </div>
      <div>
        <label className='float-left'>
          <b>Output&nbsp;</b>
        </label>
        <span className='float-right text-muted'>Balance: {window.web3.utils.fromWei(accountEthBalance, 'Ether')}</span>
      </div>
      <div className='input-group mb-2'>
        <input type='text' className='form-control form-control-lg' placeholder='0' value={output} disabled />
        <div className='input-group-append'>
          <div className='input-group-text p-2'>
            <img src={ethLogo} height='32' alt='' />
            &nbsp;&nbsp;&nbsp; ETH
          </div>
        </div>
      </div>
      <div className='mb-5'>
        <span className='float-left text-muted'>Exchange Rate 100 SALEH = 1 ETH</span>
      </div>
      <button type='submit' className='btn btn-primary btn-lg btn-block w-100'>
        SWAP
      </button>
    </form>
  );
}

export default SellForm;
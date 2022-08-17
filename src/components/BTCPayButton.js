import { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {FaBtc} from "react-icons/fa";

class BTCPayButton extends Component {

    render(){
        return (
          <form method="POST" action="https://mainnet.demo.btcpayserver.org/api/v1/invoices" class="btcpay-form btcpay-form--block">
            <input type="hidden" name="storeId" value="HKDtrHpP7SGhHCMBLWiEZy5JMruBZhSUCB1NPQqe4uJK" />
            <input type="hidden" name="browserRedirect" value="https://haroldthan.me" />
            <input type="hidden" name="notifyEmail" value="thanvinhbaohoang@gmail.com" />
            <input type="hidden" name="currency" value="USD" />

            <button type="submit" class="submit nav-connect-button" name="submit" title="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor" target="_blank" rel="noopener noreferrer">
                <FaBtc class='bitcoin-text'/>
                <span>uy Me A Coffee ;) </span> 
            </button>
          </form>
          )
    }
}

export default BTCPayButton;
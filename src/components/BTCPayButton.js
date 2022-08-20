import { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {FaBtc} from "react-icons/fa";

class BTCPayButton extends Component {

    render(){
        return (
            <form method="POST" action="https://btcpay536811.lndyn.com/api/v1/invoices" class="btcpay-form btcpay-form--block">
                <input type="hidden" name="storeId" value="FyJgv9Wamt6P5GT6j7TgQNZvyixdb86ogzYzCvBdDex2" />
                <input type="hidden" name="orderId" value="coffee-donation" />
                <input type="hidden" name="checkoutDesc" value="Buy Harold A Coffee ($3.50)" />
                <input type="hidden" name="notifyEmail" value="thanvinhbaohoang@gmail.com" />
                <input type="hidden" name="price" value="3.5" />
                <input type="hidden" name="currency" value="USD" />
                <input type="hidden" name="defaultPaymentMethod" value="BTC_LightningLike" /><button type="submit" class="submit nav-connect-button" name="submit" title="Pay with BTCPay Server, a Self-Hosted Bitcoin Payment Processor" target="_blank" rel="noopener noreferrer">
                    <FaBtc class='bitcoin-text'/>
                    <span>uy Me A Coffee ;) </span> 
                </button>
            </form>
          )
    }
}

export default BTCPayButton;
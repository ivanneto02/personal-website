import React, { Component } from "react"

import "@styles/Pricing.css"

class PricingTag extends Component {

        render() {
                const { oneTimePayment, monthlyPayment } = this.props;

                return (
                        <div className="pricingtag emphasis1 dark">

                                <h3> Pricing </h3>

                                <ul className="pricinglist">
                                        <li>One-Time Payment</li>
                                        <li className="pricelinebig"><span className="icon solid fa-dollar-sign"></span> <b>{oneTimePayment}</b></li>

                                        <li>Maintenance</li>
                                        <li className="pricelinesmall"><span className="icon solid fa-dollar-sign"></span> <b>{monthlyPayment}/mo</b></li>
                                </ul>
                        </div>
                )
        }
}

export default PricingTag;

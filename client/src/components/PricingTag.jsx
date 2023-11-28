import React, { Component } from "react"

import "../styles/PricingTag.css"
import "../styles/Pricing.css"

class PricingTag extends Component {

    render() {
        const { oneTimePayment, monthlyPayment } = this.props;

        return (
            <div className="pricingtag">

                <h3> Pricing </h3>

                <ul class="pricinglist">
                    <li><span className="icon solid fa-dollar-sign"></span> <b class="pricing">{oneTimePayment}</b></li>
                    <li><span className="icon solid fa-dollar-sign"></span> <b class="pricing">{monthlyPayment} / mo</b></li>
                </ul>
            </div>
        )
    }
}

export default PricingTag;

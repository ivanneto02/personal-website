import React, { Component } from "react";

import Header from "../../components/Header";
import { PricingTag } from "../../components";

import "../../styles/Pricing.css";

class Development extends Component {
    render() {
        return (
            <div id="main">
                <div className="inner">
                    <Header />

                    <section>

                        <h1>Development</h1>

                        <p>
                            If you're interested in receiving development services from me, **please reach out to me by
                            email (<b>ivan.a.neto@email.ucr.edu</b>) to discuss pricing and particular needs. You can also reach out to me through the <a href="/booking"><b>booking page</b></a>.
                        </p>

                    </section>

                    <section>

                        <h2>Contractual Development</h2>

                        <p>
                            If you want me to develop something for you - website, game, or any such product - we will make a contract based on your needs and the skill
                            required to create the product. We will promise deliverables within a <b>preset deadline</b> in order to fit your needs.
                        </p>

                        <p>
                            I typically require <b>plenty of communication</b> (via email, phone call, or text) to ensure that your specifications and needs are completely
                            met and you can gain a real benefit from the product.
                        </p>

                    </section>

                    <section>

                        <h2>Website Products</h2>

                        <div className="posts">
                            <article>
                                <div className="content">
                                    <h3>Static Personal Website</h3>
                                    <p>
                                        We develop a <b>static</b> website to display your personal information as you need.
                                    </p>

                                    <PricingTag oneTimePayment={"10"} monthlyPayment={"25"}/>
                                    
                                    <ul class="pricinglist">
                                        <li><span className="icon solid fa-dollar-sign"></span> <b class="pricing">800 OTP</b></li>
                                        <li><b class="pricing">25/mo</b></li>
                                    </ul>
                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Static Professional Website</h3>
                                    <p>
                                        We develop a <b>static</b> website to display your professional information as you need.
                                    </p>
                                    <ul class="pricinglist">
                                        <li><b class="pricing">1000 OTP</b></li>
                                        <li><b class="pricing">25/mo</b></li>
                                    </ul>
                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Static Other Website</h3>
                                    <p>
                                        We develop a <b>static</b> website to display your wanted content as you need.
                                    </p>
                                    <ul class="pricinglist">
                                        <li><b class="pricing">500 OTP</b></li>
                                        <li><b class="pricing">25/mo</b></li>
                                    </ul>
                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Full-Stack Personal Website</h3>

                                    <ul class="pricinglist">
                                        <li><b class="pricing">1000 OTP</b></li>
                                        <li><b class="pricing">25/mo</b></li>
                                    </ul>
                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Full-Stack Professional Website</h3>

                                    <ul class="pricinglist">
                                        <li><b class="pricing">1200 OTP</b></li>
                                        <li><b class="pricing">25/mo</b></li>
                                    </ul>
                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Full-Stack Other Website</h3>

                                    <ul class="pricinglist">
                                        <li><b class="pricing">1200 OTP</b></li>
                                        <li><b class="pricing">25/mo</b></li>
                                    </ul>
                                </div>
                            </article>
                        </div>

                        {/* <h3>Static Personal Website</h3>

                        <ul>
                            <li>One Time Payment: <b>$500</b></li>
                            <li>Maintenance: <b>$25/mo</b></li>
                        </ul>

                        <h3>Full-Stack Personal Website</h3>

                        <ul>
                            <li>One Time Payment: <b>$1000</b></li>
                            <li>Maintenance: <b>$25/mo</b></li>
                        </ul>

                        <h3>Static Professional Website</h3>

                        <ul>
                            <li>One Time Payment: <b>$500</b></li>
                            <li>Maintenance: <b>$25/mo</b></li>
                        </ul>

                        <h3>Full-Stack Professional Website</h3>

                        <ul>
                            <li>One Time Payment: <b>$1200</b></li>
                            <li>Maintenance: <b>$25/mo</b></li>
                        </ul> */}

                    </section>

                    <section>

                        <h2>Other Products</h2>

                        <p>
                            Pricing for miscellaneous products varies depending on:
                        </p>

                        <ul>
                            <li>Complexity</li>
                            <li>Scope (what will it be used for?)</li>
                            <li>Expertise Required</li>
                            <li>Your Budget</li>
                            <li>Maintenance Requirements</li>
                        </ul>

                    </section>

                </div>
            </div>
        );
    }
}

export default Development;
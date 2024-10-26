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
                            email (<b>ivan.a.neto@hotmail.com</b>) to discuss pricing and particular needs. You can also reach out to me through the <a href="/booking"><b>booking page</b></a>.
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

                                    <PricingTag oneTimePayment={"600.00"} monthlyPayment={"10.00"}/>
                                    
                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Static Professional Website</h3>
                                    <p>
                                        We develop a <b>static</b> website to display your professional information as you need.
                                    </p>

                                    <PricingTag oneTimePayment={"800.00"} monthlyPayment={"10.00"}/>

                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Static Other Website</h3>
                                    <p>
                                        We develop a <b>static</b> website to display your wanted content as you need.
                                    </p>
                                    
                                    <PricingTag oneTimePayment={"650.00-1200.00"} monthlyPayment={"10.00"}/>
                                    
                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Full-Stack Personal Website</h3>

                                    <p>
                                        We develop a <b>full-stack</b> website to display your personal information as you need.
                                        You can also display hosted information (articles, reviews, etc), and upload information (through forms)
                                        as needed for your personal use.
                                    </p>

                                    <PricingTag oneTimePayment={"800.00"} monthlyPayment={"25.00"}/>

                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Full-Stack Professional Website</h3>

                                    <p>
                                        We develop a <b>full-stack</b> website to display your professional information as you need.
                                        You can also display hosted information (products, items, etc), and upload information (through forms)
                                        as needed for your business.
                                    </p>

                                    <PricingTag oneTimePayment={"1000.00"} monthlyPayment={"25.00"}/>

                                </div>
                            </article>
                            <article>
                                <div className="content">
                                    <h3>Full-Stack Other Website</h3>

                                    <p>
                                        In the case that you may need a <b>full-stack</b> solution to a problem with a website and a server,
                                        this is the option for you. Pricing may vary depending on the expertise and time required, as well as
                                        your budget.
                                    </p>

                                    <PricingTag oneTimePayment={"1000.00-2000.00"} monthlyPayment={"25.00"}/>

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
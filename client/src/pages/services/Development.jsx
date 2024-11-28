import React, { Component } from "react";

import Header from "../../components/Header";
import { PricingTag } from "../../components";

import "../../styles/Pricing.css";
import "../../styles/main.css";

import { MarkdownSection } from "../../components";

import raw1 from "./Development1.md";
import raw2 from "./Development2.md";

class Development extends Component {
    render() {
        return (
            <div id="main">
                    <Header />

                    <MarkdownSection raw={raw1}/>

                    <section>

                        <div className="posts">
                            <article className="card">
                                <div className="pricing content emphasis4 dark">
                                    <h3>Static Personal Website</h3>
                                    <p>
                                        We develop a <b>static</b> website to display your personal information as you need.
                                    </p>

                                    <PricingTag oneTimePayment={"399.99"} monthlyPayment={"3.00"}/>
                                </div>
                            </article>

                            <article className="card">
                                <div className="pricing content emphasis4 dark">
                                    <h3>Static Professional Website</h3>
                                    <p>
                                        We develop a <b>static</b> website to display your professional information as you need.
                                    </p>

                                    <PricingTag oneTimePayment={"399.99"} monthlyPayment={"3.00"}/>

                                </div>
                            </article>

                            <article className="card">
                                <div className="pricing content emphasis4 dark">
                                    <h3>Static Other Website</h3>
                                    <p>
                                        We develop a <b>static</b> website to display your wanted content as you need.
                                    </p>
                                    
                                    <PricingTag oneTimePayment={"399.99"} monthlyPayment={"3.00"}/>
                                    
                                </div>
                            </article>

                            <article className="card">
                                <div className="pricing content emphasis4 dark">
                                    <h3>Full-Stack Personal Website</h3>

                                    <p>
                                        We develop a <b>full-stack</b> website to display your personal information as you need.
                                        You can also display hosted information (articles, reviews, etc), and upload information (through forms)
                                        as needed for your personal use.
                                    </p>

                                    <PricingTag oneTimePayment={"449.99"} monthlyPayment={"5.00"}/>

                                </div>
                            </article>

                            <article className="card">
                                <div className="pricing content emphasis4 dark">
                                    <h3>Full-Stack Professional Website</h3>

                                    <p>
                                        We develop a <b>full-stack</b> website to display your professional information as you need.
                                        You can also display hosted information (products, items, etc), and upload information (through forms)
                                        as needed for your business.
                                    </p>

                                    <PricingTag oneTimePayment={"449.99"} monthlyPayment={"5.00"}/>

                                </div>
                            </article>

                            <article className="card">
                                <div className="pricing content emphasis4 dark">
                                    <h3>Full-Stack Other Website</h3>

                                    <p>
                                        In the case that you may need a <b>full-stack</b> solution to a problem with a website and a server,
                                        this is the option for you. Pricing may vary depending on the expertise and time required, as well as
                                        your budget.
                                    </p>

                                    <PricingTag oneTimePayment={"449.99"} monthlyPayment={"10.00"}/>

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

                    <MarkdownSection raw={raw2}/>

            </div>
        );
    }
}

export default Development;
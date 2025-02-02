'use client'
import { Button, Carousel } from "antd"
import "../../assets/styles/Finacial.css"
import React from 'react'

export default function FinacialSolutionsPage() {
    return (
        <div id="finacialSolutions">
            <div className='contrianer'>
                <div className="header-contrainer">
                    <div className="title"><p>Financial Advisory (FA)</p></div>
                    <img src="/BG-FA.png" alt="bg-knowledge" />
                </div>
                <div className="header-object">
                    <div className="object"><img src="/ob-bg-fa.png" alt="bg-ss" /></div>
                </div>
                <div className="section01-contrainer">
                    <div className="description">
                        <div className="des-1">
                            <button>About Us</button>
                        </div>
                        <div className="des-2"><p>We specialize in comprehensive financial advisory services,
                            including ESG consulting and tailored coaching and training  programs.
                            Our team is dedicated to empowering clients with expert guidance in financial management,
                            sustainable practices, and skills development to navigate toda&rsquo;s complex business
                            landscape. </p></div>
                    </div>
                </div>
                <div className="section02-contrainer">
                    <div className="divider">
                        <div className="divider-line"></div>
                        <div className="divider-icon">
                            <img src="/X-Logo.png" width={48} height={48} />
                        </div>
                        <div className="divider-line"></div>
                    </div>

                </div>
                <div className="bt-1"><Button shape="round" >Financial Advisory (FA)</Button></div>
                <div className="section03-contrainer">

                    <Carousel arrows autoplay draggable arrowSize={50}>
                        {/* slide-1 */}
                        <div className="slide-1">
                            <div className="title-1">
                                <div className="col-1">
                                    <div className="title-col-1">
                                        <p>Initial Public Offerings (IPOs)</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="content-col-1">
                                        <img src="/ob-slide1-fa.png" />

                                        <p>Our IPO services are tailored to ensure your company&rsquo;s successful transition to the public market.
                                            We offer end-to-end support, from corporate and shareholding restructuring to assisting you
                                            in the process of SEC filing, preparing financial reporting, and internal audit,
                                            as well as ensuring regulatory compliance. Our team also helps manage investors to
                                            ensure optimal funding and set the stage for future growth in the public market.</p>
                                    </div>
                                </div>


                            </div>
                            <div className="bg-slide-2">
                                <img src="/bg-slide1-fa.png" />
                            </div>
                        </div>
                        {/* slide-2 */}
                        <div className="slide-2" >
                            <div className="title-2">
                                <div className="col-2-1">
                                    <div className="title-col2-1">
                                        <p>Private Placements (PPs)</p>
                                    </div>
                                    <div className="content-col2-1">
                                        <p>Our Private Placement services provide tailored solutions to help your company raise capital through private investors.
                                            We guide you through every step of the process, from structuring the deal,
                                            negotiating pricing, to securing investments, ensuring an optimal fundraising costs.</p>

                                    </div>
                                    <div className="img-col-1">
                                        <img src="/ob-bg-fa-sd2-1.png" style={{ width: "5ุ20px", height: "224px" }} />
                                        <img className="img-man" src="/ob-bg-fa-sd2.png" style={{ width: "635px", height: "325px" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slide-2">
                                <img src="/bg-slide2-fa.png" />
                            </div>
                        </div>
                        {/* slide-3 */}
                        <div className="slide-3">
                            <div className="title-3">
                                <div className="col-3-1">
                                    <div className="title-col-3-1">
                                        <p>Mergers & Acquisitions</p>
                                    </div>
                                </div>
                                <div className="col-3-2">
                                    <div className="content-col-3-1">
                                        <p>Our M&A services range from strategy development and target identification to negotiation, 
                                            business valuation, transaction structuring, and post-deal integration. We help you navigate 
                                            complex transactions, maximize value, and achieve long-term business success.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slide-3">
                                <img src="/bg-slide3-fa.png" />
                            </div>
                        </div>
                        {/* slide-4 */}
                        <div className="slide-4">
                            <div className="title-4">
                                <div className="col-4-1">
                                    <div className="title-col-4-1">
                                        <p>Share Valuation & Feasibility Studies</p>
                                    </div>
                                </div>
                                <div className="col-4-2">
                                    <div className="content-col-4-1">
                                        <p>Our share valuation services provide accurate and insightful assessments of your 
                                            company&rsquo;s value by using appropriate valuation methodologies. 
                                            Whether for mergers, acquisitions, or investment decisions, we deliver reliable, 
                                            data-driven valuations to support your strategic goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slide-4">
                                <img src="/bg-slide4-fa.png" />
                            </div>
                        </div>
                        {/* slide-5 */}
                        <div className="slide-5">
                            <div className="title-5">
                                <div className="col-5-1">
                                    <div className="title-col-5-1">
                                        <p>Independent Financial Advisory (IFA)</p>
                                    </div>
                                </div>
                                <div className="col-5-2">
                                    <div className="content-col-5-1">
                                        <p>Our Independent Financial Advisor (IFA) services provide independent opinions in 
                                            compliance with the regulations of the SET and the SEC regarding acquisitions, 
                                            divestments, connected transactions, and tender offers. Our opinion provides a fair 
                                            basis to assist minority shareholders of listed companies in making informed decisions.</p>
                                    </div>
                                    <img className="img-sd5" src="/ob-slide4-fa.png" />
                                </div>
                            </div>
                            <div className="bg-slide-5">
                                <img src="/bg-slide5-fa.png" />
                            </div>
                        </div>
                        {/* slide-6 */}
                        <div className="slide-6">
                            <div className="title-6">
                                <div className="col-6-1">
                                    <div className="title-col-6-1">
                                        <p>Financial Restructuring</p>
                                    </div>
                                </div>
                                <div className="col-6-2">
                                    <div className="content-col-6-1">
                                        <p>We collaborate closely with you to create a plan for optimizing capital reallocation, 
                                            streamlining operations, and restructuring debt to reduce financial strain. 
                                            We aim to realign both your business and financial strategies, ensuring that resources 
                                            are efficiently allocated and enable your company to thrive in a competitive market.</p>
                                    </div>
            
                                </div>
                            </div>
                            <div className="bg-slide-6">
                                <img src="/bg-slide6-fa.png" />
                            </div>
                        </div>
                        {/* slide-7 */}
                        <div className="slide-7">
                            <div className="title-7">
                                <div className="col-7-1">
                                    <div className="title-col-7-1">
                                        <p>Other FA services</p>
                                    </div>
                                </div>
                                <div className="col-7-2">
                                    <div className="content-col-7-1">
                                        <p>We provide tailored financial solutions designed to meet the unique needs of 
                                            our clients at various stages of their business growth. Whether you are in the startup phase, 
                                            expanding your operations, or navigating more complex financial challenges, we work closely 
                                            with you to create strategic plans that support your specific goals.</p>
                                    </div>
                                    
                                </div>
                                <div className="col-7-3">
                                    <div className="content-col-7-3">
                                        <img  src="/ob-slide7-fa.png"/>
                                        <img style={{height: "209px", width: "353px"}} src="/ob-slide7-1-fa.png"/>
                                        <img src="/ob-slide7-2-fa.png"/>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-slide-7">
                                <img src="/bg-slide7-fa.png" />
                                
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
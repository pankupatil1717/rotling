import React from 'react'

export default function About() {
    return (
        <div>
            {/* <!-- Hero Section --> */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="display-4">Welcome to Our Company</h1>
                    <p className="lead">We are dedicated to providing the best services to our customers.</p>
                </div>
            </section>

            {/* <!-- About Section --> */}
            <section className="about-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="section-title">Our Mission</h2>
                            <p>
                                Our mission is to deliver the highest quality of products and services, ensuring customer satisfaction at every step. We are committed to innovation, integrity, and excellence in everything we do.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="section-title">Our Vision</h2>
                            <p>
                                We aim to be a leading brand that customers trust and rely on for their daily needs, contributing to a healthier and more sustainable future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Team Section --> */}
            <section className="team-section bg-light py-5">
                <div className="container">
                    <h2 className="section-title">Meet Our Team</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="team-member">
                                <img src="/assets/images/boy 1.jpg" alt="Team Member 1" />
                                <h5>John Doe</h5>
                                <p>CEO & Founder</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="team-member">
                                <img src="/assets/images/boy 1.jpg" alt="Team Member 2" />
                                <h5>Jane Smith</h5>
                                <p>Chief Technology Officer</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="team-member">
                                <img src="/assets/images/boy 1.jpg" alt="Team Member 3" />
                                <h5>Sarah Johnson</h5>
                                <p>Head of Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


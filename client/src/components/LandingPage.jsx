/* eslint-disable no-unused-vars */
import React from 'react';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';

const LandingPage = () => (
    <div>
        {/* Intro section */}
        <h1>Welcome to My Website!</h1>
        {/* Other content */}
        
        {/* Feature highlights section */}
        <section className="feature-highlights">
            <h2>Key Features</h2>
            <div className="feature-container">
                <Feature1 />
                <Feature2 />
                <Feature3 />
            </div>
        </section>
    </div>
);

export default LandingPage;
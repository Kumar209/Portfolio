import React from 'react';
import Card from './Card'
import './Portfolio.css';
import Portfolio_data from './PortfolioAPI.jsx';

const Portfolio = () => {
    return (
        <React.Fragment>
            <section className="portfolio top" id="portfolio">
                <div className="container">
                    <div className="heading text-center">
                        <h4>VISIT TO MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                        <h1>My Portfolio</h1>
                    </div>

                    <div className="content grid">
                        {Portfolio_data.map((val, index) => {
                            return <Card key={index} category={val.category} image={val.image} title={val.title} featured={val.featured} githublink={val.githublink} live_website={val.live_website_link} desc1={val.desc1} desc2={val.desc2} />
                        })}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Portfolio;
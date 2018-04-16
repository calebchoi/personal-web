import React from 'react';

const Portfolio = props => (
  <div className="Portfolio">
    <div className="project" id="shiftly">
      <div className="image">
        <img src="assets/shiftly.png" />
      </div>
      <div className="title">
        <h3>Shiftly</h3>
      </div>
      <div className="description">
        <p>Schedule management tool that automates weekly shifts given employee availabilites and shift requirements</p>
      </div>
    </div>

    <div className="project" id="newsstand">
      <div className="image">
        <img src="assets/newsstand.png" />
      </div>
      <div className="title">
        <h3>News Stand</h3>
      </div>
      <div className="description">
        <p>News aggregator that makes smart recommendations based on favorited articles</p>
      </div>
    </div>

    <div className="project" id="butterpassing">
      <div className="image">
        <img src="assets/robot.png" />
      </div>
      <div className="title">
        <h3>Butter Passing Robot</h3>
      </div>
      <div className="description">
        <p>Automated robotic arm that detects and retrieves objects on a flat surface</p>
      </div>
    </div>
  </div>
);

export default Portfolio;
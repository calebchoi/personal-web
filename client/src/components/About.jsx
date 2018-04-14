import React from 'react';

const About = props => (
  <div>
    <div className="bio">
      <h1> Bio </h1>
      <p> I have a background in Mechanical Engineering, but now I code! </p>
    </div>
    <div className="skills">
      <h1> Skills </h1>
      <div className="language">
        <h4> Languages </h4>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>C++</li>
          <li>Python</li>
          <li>MATLAB</li>
        </ul>
      </div>
      <div className="framework-library">
        <h4> Frameworks/Libraries </h4>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Angular</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Mocha</li>
          <li>Chai</li>
        </ul>
      </div>
      <div className="database-orm">
        <h4> Databases/ORM </h4>
        <ul>
          <li>MySQL</li>
          <li>Postgres</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Cassandra</li>
          <li>Redis</li>
        </ul>
      </div>
      <div className="misc-tool">
        <h4> Misc. Tools </h4>
        <ul>
          <li>AWS (EC2)</li>
          <li>Webpack</li>
          <li>Docker</li>
          <li>Git</li>
          <li>TrvisCI</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
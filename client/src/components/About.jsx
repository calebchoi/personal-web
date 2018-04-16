import React from 'react';

const About = props => (
  <div className="About">
    <div className="bio">
      <h1> About Me 👱 </h1>
      <p>
        I'm a full stack engineer located in Bay Area, California. 
        Having backgrounds in mechanical and software engineering, I love the critical-thinking and problem-solving opportunities that software engineering present. 
        I have a passion for developing web applications and solutions, working across the full stack, and I'm always open to learning new tools to add to my skill-set.
        <br/>
        <br/>

        Outside of life as a software engineer, I like to spend time playing golf and acoustic guitar. 
        Feel free to connect with me on LinkedIn or contact me at <a href="mailto:calebc1205@gmail.com" style={{color:"black"}}>calebc1205@gmail.com</a>.
      </p>
    </div>
    <div className="skills">
      <h1> Skills 🛠 </h1>
      <div className="category">
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
          <li>TravisCI</li>
        </ul>
      </div>
    </div>
    </div>
  </div>
);

export default About;
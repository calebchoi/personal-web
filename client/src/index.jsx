import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import About from './components/About.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: 'home',
    };
  }

  selectTab = (selection) => {
    this.setState({
      selection: selection,
    });
  };

  renderContent() {
    if (this.state.selection === 'home') {
      return <Home />;
    } else if (this.state.selection === 'portfolio') {
      return <Portfolio />;
    } else if (this.state.selection === 'about') {
      return <About />;
    }
  };
  
  render() {
    return (
      <div>
        <NavigationBar selectTab={this.selectTab}/>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

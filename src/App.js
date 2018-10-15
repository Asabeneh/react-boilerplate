import React, { Component } from 'react';
import Header from './componens/Header';
import Main from './componens/Main';
import Footer from './componens/Footer';
import './App.css';

const techs = ['HTML', 'CSS', 'JavaScript'];

const menu = [{
    tech: 'HTML',
    link: 'https://developer.mozilla.org/kab/docs/Lmed/Getting_started_with_the_web/HTML_basics'
  },
  {
    tech: 'CSS',
    link: 'https://developer.mozilla.org/kab/docs/Learn/CSS'
  },
  {
    tech: 'JavScript',
    link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
      < Header
      title = "Getting Started React"
      subtitle = "React.js"
      mandatory = {techs[2]}
      createdAt = {2012}
      good = {true}/>
      <Main techs= {techs}/>
      <Footer  menu = {menu} date = {new Date()}/>
      </div>
    );
  }
}

export default App;

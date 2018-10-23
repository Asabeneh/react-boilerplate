import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt,
} from 'react-router-dom';
import Header from './componens/Header';
import Main from './componens/Main';
import Footer from './componens/Footer';
import {contents} from './data/contents'

import './App.css';

const techs = ['HTML', 'CSS', 'JavaScript'];

const menu = [
  {
    tech: 'HTML',
    link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
  },
  {
    tech: 'CSS',
    link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
  },
  {
    tech: 'JavScript',
    link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
];


class App extends Component {
  state = {
    school: 'Integrify',
    name: 'Bill',
    number: 0,
    text: '',
    todos: [],
    bgcolor: 'white',
    color: 'grey',
    fontSize: '16px',
    email: '',
    password: '',
    users: [],
    data: '',
    className: 'primary',
  };
  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };
  handleAdd = () => {
    const todos = this.state.todos;
    todos.push(this.state.text);
    this.setState({
      todos: todos,
    });
  };
  changeName = () => {
    const name = this.state.name === 'Bill' ? 'Bush' : 'Bill';
    this.setState({
      school: 'Microsoft',
      name: name,
    });
  };
  changeNightMode = () => {
    const bgcolor = this.state.bgcolor === 'white' ? 'grey' : 'white';
    const color = this.state.color === 'grey' ? 'white' : 'grey';
    this.setState({
      bgcolor,
      color,
    });
    console.log(this.state.color);
  };
  addOne = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  minusOne = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
      });
    }
  };
  changeColor = () => {
    const color = this.state.color === 'grey' ? 'orange' : 'grey';
    this.setState({
      color,
    });
    console.log(color)
  };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const users = this.state.users;
    users.push({email: this.state.email, password: this.state.password});
    this.setState({
      users: users,
    });
    console.log(this.state.users);
  };

  makeFontBig = () => {
      const fontSize = this.state.fontSize.substr(0, 2);
      let size = parseFloat(fontSize);
      size++;
      if (size < 44) {
        this.setState({fontSize: size + 'px'});
      }
  };
  makeFontSmall = () => {
    const fontSize = this.state.fontSize.substr(0, 2);
    let size = parseFloat(fontSize);
    size--;
    if (size > 12) {
      this.setState({fontSize: size + 'px'});
    }
  };

  render() {
    const school = this.state.school;
    const number = this.state.number;
    const todos = this.state.todos.map(item => <li>{item}</li>);
    const style = {
      fontSize: this.state.fontSize,
      backgroundColor: this.state.bgcolor,
      color: this.state.color,
    };
    return (
      <div className={this.state.className} style={style}>
        <Header
          title="Getting Started React"
          subtitle="React and Redux"
          createdAt={2012}
          good={true}
          changeNightMode={this.changeNightMode}
          makeFontBig={this.makeFontBig}
          makeFontSmall = {this.makeFontSmall}
          changeColor={this.changeColor}
        />
        <Main techs={techs} school={school} contents={contents} />
        <p>Getting user data from a form:</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleOnChange}
            value={this.state.email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleOnChange}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
          <br />
          <br />
        </form>
        <span>Two data Binding in React</span>
        <input
          type="text"
          placeholder="Enter text"
          name="data"
          onChange={this.handleOnChange}
          value={this.state.data}
        />
        <p>{this.state.data}</p>

        <input onChange={this.handleChange} type="text" />
        <button onClick={this.handleAdd}>Add Todo</button>
        <br />
        <br />
        {todos}
        <p>Handling DOM Events and state in React:</p>
        <button onClick={this.changeName}>Change name</button>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <span>{this.state.number}</span>
        <h3 onClick={this.changeName}>
          New Person:
          {this.state.name}
        </h3>
        <Footer menu={menu} date={new Date()} />
      </div>
    );
  }
}

export default App;

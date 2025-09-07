import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './examples/LifecycleExample'; 
import User from './examples/BindExample';


class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className='welcome'>Welcome {this.props.name}!</h1>
        <h2 className="title">Manipulating Components</h2>
      </header>
    );
  }
}

function Navegation() {
  return (
    <div className="navegation">Navegation Bar</div>
  )
}

function Main() {
  return (
    <div className="main">Main Content</div>
  );
}

function Footer() {
  return (
    <div className="footer">Footer</div>
  );
}

function Top(props) {
  return (
    <div className="top">
      <Header name={props.name} />
      <Navegation />
    </div>
  );
}

const newUser = {
    name: 'Maria',
    age: 25
};

function App(props) {
  return (
    <div className="App">
      <Top name={props.name} />
      <Main></Main>    
      <Counter></Counter>
      <User user={newUser}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;

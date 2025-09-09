import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './examples/LifecycleExample'; 
import User from './examples/BindExample';
import LinkClick from './examples/ManipulatingEvents';
import GenerateElements from './examples/Lists_and_Keys_Example';
import Forms from './examples/Forms-1';
import Vehicle from './examples/Forms-2';
import ExampleHook from './examples/Hooks';
import UseHookAndState from './examples/useState';
import ExampleUseEffect from './examples/useEffect';
import UsingFetchAPI from './examples/UsingFectchAPI';
import UsingAxios from './examples/Axios';

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

function Main(props) {
  return (
    <div className="main">
      Main Content
      {props.children}
    </div>
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
      <Main>
        <LinkClick />
      </Main>    
      <Counter></Counter>
      <User user={newUser}/>
      <div className="table-form">
        <Forms></Forms>
        <GenerateElements></GenerateElements>
      </div>
      <Vehicle></Vehicle>
      <ExampleHook ></ExampleHook>
      <UseHookAndState ></UseHookAndState>
      <ExampleUseEffect ></ExampleUseEffect>
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UsingFetchAPI></UsingFetchAPI>
      <UsingAxios></UsingAxios>
      <Footer></Footer>
    </div>
  );
}

export default App;


// const [view, setView] = React.useState(true);

//   setTimeout(() => {
//     setView(false);
//   }, 5000);

//   return view &&(
//     <>
//       <ExampleHook ></ExampleHook>
//       <UseHookAndState ></UseHookAndState>
//       <ExampleUseEffect ></ExampleUseEffect>
  
//     </>
//   );
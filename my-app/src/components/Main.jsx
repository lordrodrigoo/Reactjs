import Navbar from './Navbar';
import { Footer } from './Footer';
import logo from '../logo.svg';


export default function Main(props) {
  return (
    <div className="main">
      <Navbar />
      {props.children}
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        </div>
      </div>
  );
}
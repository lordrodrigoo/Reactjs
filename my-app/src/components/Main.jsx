import Navbar from './Navbar';
import { Footer } from './Footer';


export default function Main(props) {
  return (
    <div className="main">
      <Navbar />
      {props.children}
      <Footer/>
    </div>
  );
}
import {Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import { Header } from './components/Header';
import './App.css';

// Pages
import UserBind from './pages/BindExample';
import UserForm from './pages/Forms-1';
import Vehicle from './pages/Forms-2';
import ExampleHook from './pages/HooksExample';
import UsingJquery from './pages/JqueryExample';
import Counter from './pages/LifecycleExample';
import GenerateElements from './pages/Lists_and_Keys_Example';
import LinkClick from './pages/ManipulatingEvents';
import ExampleUseEffect from './pages/useEffectExample';
import UseHookAndState from './pages/useStateExample';
import UsingAxios from './pages/UsingAxiosExample';
import UsingFetchAPI from './pages/UsingFectchAPIExample';

  //components
import { Footer } from './components/Footer';
import Login from './components/Login';

// Redux
import { useSelector } from 'react-redux';
import { selectUser } from './reducer/userSlice';

export default function App() {
  const { isLogged } = useSelector(selectUser);
  const newUser = { name: 'Rodrigo A', age: 34 };

  if (!isLogged) {
    return <Login />;
  }

  return (
    <>
      <Header name='Rodrigo'/>
      <Main>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/userform" element={<UserForm user={newUser} />} />
          <Route path="/userbind" element={<UserBind user={newUser} />} />
          <Route path="/linkclick" element={<LinkClick />} />
          <Route path="/generateelements" element={<GenerateElements />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/examplehook" element={<ExampleHook />} />
          <Route path="/usehookandstate" element={<UseHookAndState />} />
          <Route path="/exampleuseeffect" element={<ExampleUseEffect />} />
          <Route path="/usingfetchapi" element={<UsingFetchAPI />} />
          <Route path="/usingaxios" element={<UsingAxios />} />
          <Route path="/usingjquery" element={<UsingJquery />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}  

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
import { Link } from "react-router-dom";

export default function Navbar() {  
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link> | {" "}
            <Link to="/counter">Counter</Link> | {" "}
            <Link to="/user">User</Link> | {" "}
            <Link to="/linkclick">LinkClick</Link> | {" "}
            <Link to="/generateelements">GenerateElements</Link> | {" "}
            <Link to="/vehicle">Vehicle</Link> | {" "}
            <Link to="/examplehook">ExampleHook</Link> | {" "}
            <Link to="/usehookandstate">UseHookAndState</Link> | {" "}
            <Link to="/exampleuseeffect">ExampleUseEffect</Link> | {" "}
            <Link to="/usingfetchapi">UsingFetchAPI</Link> | {" "}
            <Link to="/usingaxios">UsingAxios</Link> | {" "}
            <Link to="/usingjquery">UsingJquery</Link>
        </nav>
    );
}

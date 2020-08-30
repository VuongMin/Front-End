import React from "react";
import { BrowserRouter as Router, Switch, Route, Link ,useParams,  useRouteMatch} from "react-router-dom";

function App() {
  var renderNum = Math.random() * 100;
  return (
    <Router>
      <div className="App">
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/about/${renderNum}`}>About</Link>
          </li>
          <li>
            <Link to="/contact">Dashboard</Link>
          </li>
        </ul>
        {/* section to show content page */}
        <Switch>
            <Route exact path="/" ><Home /></Route>
            <Route path="/about/:id" ><About /></Route>
            <Route path="/contact" ><Contact /></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
function Home() {
  
  return <h1>Home</h1>
}
function About() {
  const {id} = useParams();
  return <h1>About + {id}</h1>
}
function Contact() {
  console.log(  useRouteMatch())
  let {url} = useRouteMatch();
return (
      
     <ul>
       <h1>Nesting router </h1> 
        <li> <Link to = {`${url}/child1`}>child 1</Link></li>
        <li> <Link to = {`${url}/child2`}>child 2</Link></li>
        <li> <Link to = {`${url}/child3`}>child 3</Link></li>
     </ul>
     <Switch>
        
     </Switch>
)
}
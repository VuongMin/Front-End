import React from 'react';
import Menu from './components/Menu/Menu';
import routers from './router'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Menu></Menu>
        {ContentBody(routers)}
      </div>
    </Router>

  );
}
function ContentBody(routers) {

  let result = null;
  if( routers.length >0){
    result = routers.map((route ,idx)=>{
        return <Route 
           key={idx}
           path={route.path}
           component={route.component}
           exact={route.exact}
        />
    })
  }
  return <Switch>{result}</Switch>
}

export default App;

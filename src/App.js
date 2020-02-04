import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Current from "./pages/Current";


function App() {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Switch>
                    <Route exact path="/current" component={Current} />
                    <Route exact path="/search" component={Search} />
                    <Route component={Home} />
                </Switch>
            </div>
        </Router>
    );
  
}

export default App;

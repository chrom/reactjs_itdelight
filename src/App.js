import React, {Component} from 'react';
import './App.css';
import ViewList from './pages/ViewList';
import ViewItem from './pages/ViewItem';
import ViewPhotos from './pages/ViewPhotos';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Switch >
                            <Route path="/list" component={ViewList} />
                            <Route path="/view/:id" component={ViewItem}/>
                            <Route path="/photos" component={ViewPhotos}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

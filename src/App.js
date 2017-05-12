import React, { Component } from 'react';
import Intro from './components/Intro';
import CheckboxTree from './components/CheckboxTree';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="content">
                <Intro />
                <CheckboxTree />
            </div>
        );
    }
}

export default App;
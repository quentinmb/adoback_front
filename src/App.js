import React from 'react';
import './App.css';
import Routes from "./components/routes/routes";

class App extends React.Component {

    render() {
        return (
            <div className="container-full">
                <Routes />
            </div>
        );
    }
}

export default App;

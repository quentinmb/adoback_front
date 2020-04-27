import {Route, Switch} from "react-router-dom";
import React from 'react';
import Home from '../Home';
import Library from "../library/Library";
import Login from "../auth/Login";
// import PrivateRoute from "../../helpers/PrivateRoute";
import SignUp from "../auth/SignUp";
import Video from "../video/Video";


export default class Routes extends React.Component {


    render() {

        return <Switch>
            <Route exact path="/library" component={() => <Home content={<Library/>} />}/>
            {/*<PrivateRoute exact path="/library" render={(props) => <Home {...props} content={true} />}/>*/}
            {/*<PrivateRoute exact path="/" component={Home}/>*/}
            <Route exact path="/" component={() => <Home content={'acceuil'} />}/>
            <Route exact path="/video" component={() => <Home content={<Video />} />}/>
            <Route exact path="/create-account" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    }
}
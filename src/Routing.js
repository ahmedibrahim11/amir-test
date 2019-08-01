import React, { Component } from 'react';
import { Switch, Route, withRouter, } from 'react-router-dom';

import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { State } from './state';

import { HomeScreen } from './modules/screens/home';
import { AboutScreen } from './modules/screens/about';


import UsersScreen from './modules/screens/user-screen'

class RoutingContainer extends Component {

    static mapStateToProps(state: State) {
        return {
        }
    }

    static mapDispatchToProps(distpatch: Dispatch) {
        return bindActionCreators({
        }, distpatch)
    }

    props: {
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomeScreen} />
                <Route path='/home' component={HomeScreen} />
                <Route path='/index' component={UsersScreen} />
                <Route path='/about' component={AboutScreen} />
            </Switch>
        )
    }
}

export const Routing = withRouter(connect(RoutingContainer.mapStateToProps, RoutingContainer.mapDispatchToProps)(RoutingContainer));
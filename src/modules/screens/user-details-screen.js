import React, { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State } from '../../state';

import { GetUserById } from "../../state/users/action-creator";

import Loader from '../shared/loader';
import UserDetails from "../components/user-details";

class UsersDetailsContainer extends Component {
    props: {
        currentUser: any,
        GetUserById: (userId: Number) => void,
        loading: boolean

    };


    static mapStateToProps(state: State) {
        return {
            currentUser: state.users.currentUser,
            loading: state.ui.loading

        };
    }

    static mapDispatchToProps(dispatch: Dispatch) {
        return bindActionCreators(
            { GetUserById },
            dispatch
        );
    }
    render() {
        return (
            <div>
                <UserDetails currentUser={this.props.currentUser} />
                <Loader modalVisible={this.props.loading} />

            </div>
        );
    }

}
const UsersDetailsScreen = connect(
    UsersDetailsContainer.mapStateToProps,
    UsersDetailsContainer.mapDispatchToProps
)(UsersDetailsContainer);

export default UsersDetailsScreen;
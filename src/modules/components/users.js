import React from "react";
import * as _ from "lodash";

import { withRouter, Route, Switch } from "react-router-dom";

import UsersDetailsScreen from "../screens/user-details-screen";

class Users extends React.Component {
    props: {
        allUsers: any,
    };
    render() {
        const userrlist = this.props.allUsers;
        debugger;
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 px-1" style={{
                        border: 'gray', color: 'white',
                        textDecoration: 'underline',
                        fontSize: 'larger',
                        background: 'lightsteelblue',
                        minHeight: '33rem',
                        maxHeight: '33rem',
                        overflowY: 'scroll'
                    }}>
                        <div class="py-2 sticky-top flex-grow-1">
                            <div class="nav flex-sm-column">
                                {_.map(userrlist, (user, index) => (
                                    <li onClick={() => {
                                        debugger;
                                        this.props.history.push({
                                            pathname: `/index/details/${user.id}`

                                        });
                                        this.props.GetUserById(Number(user.id))
                                    }} key={index}>{user.login}</li>))}
                            </div>
                            <button className="btn btn-primary" onClick={this.props.loadMoreUsers} >Add More...</button>
                        </div>
                    </div>

                    <div class="col" id="main">
                        <Switch>
                            <Route exact path="/index/details/:userId" component={UsersDetailsScreen} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Users);

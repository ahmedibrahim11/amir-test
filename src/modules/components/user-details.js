import React from "react";
import * as _ from "lodash";

class UserDetails extends React.Component {

    props: {
        currentUser: any
    };
    render() {
        return (
            <div className="card" style={{ width: '18rem', marginLeft: 250, marginTop: 55 }}>
                <img className="card-img-top" src={this.props.currentUser.avatar_url} alt="" />
                <div className="card-body" >
                    <p id="name" className="card-text">Name:{this.props.currentUser.name}</p>
                    <p className="card-text">Email:{this.props.currentUser.email}</p>
                    <p className="card-text">Date:{this.props.currentUser.created_at}</p>
                </div>
            </div>
        );
    }
}
export default UserDetails;
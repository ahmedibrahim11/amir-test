import React, { Component } from "react";
import Modal from "react-responsive-modal";
const loadingImg = require("../../assets/img/greenLoader.gif");

export default class Loader extends Component {
    render() {
        const { modalVisible } = this.props;
        return (
            <Modal open={modalVisible} showCloseIcon={false}>
                <div style={styles.wrapper}>
                    <div style={styles.loaderContainer}>
                        <img style={styles.loaderImage} src={loadingImg} alt="loading" />
                    </div>
                </div>
            </Modal>
        );
    }
}

const styles = {
    wrapper: {
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.6)",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0
    },
    loaderContainer: {
        width: 90,
        height: 90,
        // backgroundColor: "white",
        borderRadius: 15,
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: -45
    },
    loaderImage: {
        width: 70,
        height: 70,
        borderRadius: 15,
        position: "relative",
        left: "50%",
        marginLeft: -35,
        top: "50%"
    }
};

import React, { Component } from "react";

import { Modal } from "../ComponentIndex";

import "./Button.scss";

export default class Button extends Component {
  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <div className="constructor">
        <button className="modal-opener" onClick={this.toggleModal}>
          <div className="button-container">
            <img
              className="button-img"
              src={require(`../../Img/${this.props.img}`)}
              alt={this.props.img}
              title={this.props.name}
            />
          </div>
        </button>

        <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
        >
          <React.Fragment>Hello</React.Fragment>
        </Modal>
      </div>
    );
  }
}

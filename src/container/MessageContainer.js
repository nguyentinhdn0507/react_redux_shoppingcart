import React, { Component } from "react";
import { connect } from "react-redux";
import Message from "../components/Message";
import PropTypes from "prop-types";

export class MessageContainer extends Component {
  render() {
    var { messageWeb } = this.props;
    return <Message message={messageWeb} />;
  }
}
MessageContainer.propTypes = {
  messageWeb: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => {
  return {
    // gọi lên trên store
    messageWeb: state.messageWeb, //  ở trên reducer index
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};
export default connect(mapStateToProps, null)(MessageContainer);

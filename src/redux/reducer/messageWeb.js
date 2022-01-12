import * as types from "../constant/ActionType";
import * as message from "../constant/Message";

const initialState = message.MGS_WELCOME;

const messageWeb = (state = initialState, action) => {
  // console.log(proeduct,quantity);
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      console.log(action.message)
      return action.message;
      default:
      return state;
  }
};

export default messageWeb;

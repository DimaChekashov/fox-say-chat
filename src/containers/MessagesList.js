import { connect } from "react-redux";
import MessagesListComponent from "../component/messages-list/MessagesList";

export const MessagesList = connect(
    (state) => ({
        messages: state.messages,
    }),
    {}
)(MessagesListComponent);

import React from "react";
import PropTypes from "prop-types";
import Message from "../Message/Message";

import "./MessagesList.css";

const MessagesList = ({ messages }) => {
    return (
        <div className="messages-list">
            <ul className="messages-list-tape">
                {messages.map((message) => (
                    <Message key={message.id} {...message} />
                ))}
            </ul>
        </div>
    );
};

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default MessagesList;

import { connect } from "react-redux";
import AddMessageComponent from "../component/add-message/AddMessage";
import { addMessage } from "../actions";

const mapDispatchToProps = (dispatch) => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author));
    },
});

export const AddMessage = connect(
    () => ({}),
    mapDispatchToProps
)(AddMessageComponent);

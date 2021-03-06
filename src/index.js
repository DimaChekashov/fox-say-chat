import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { addUser } from "./actions";
import { setupSocket } from "./sockets/index";

import chat from "./reducers";

const store = createStore(chat);

store.dispatch(addUser("Me"));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

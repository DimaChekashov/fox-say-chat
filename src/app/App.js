import React from "react";
import "./App.css";
import { Sidebar } from "../containers/Sidebar";
import { MessagesList } from "../containers/MessagesList";
import { AddMessage } from "../containers/AddMessage";

function App() {
    return (
        <div className="container">
            <Sidebar />
            <section className="main-block">
                <MessagesList />
                <AddMessage />
            </section>
        </div>
    );
}

export default App;

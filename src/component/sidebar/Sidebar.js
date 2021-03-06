import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ users }) => {
    return (
        <aside className="sidebar">
            <h4 className="sidebar-subtitle">Пользователи:</h4>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </aside>
    );
};

Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default Sidebar;

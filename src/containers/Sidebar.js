import { connect } from "react-redux";
import SidebarComponent from "../component/sidebar/Sidebar";

export const Sidebar = connect(
    (state) => ({
        users: state.users,
    }),
    {}
)(SidebarComponent);

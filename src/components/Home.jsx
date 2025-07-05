import React from "react"
import axios from "axios";
import "./Home.css";
import NavBar from "./NavBar";
import { NavLink } from "react-router";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Campus Student Connect</h1>
            <p>
                Start from here,
                Connect anywhere!

                This application connects campus and student,
                explore navigation bar to know more.
            </p>
        </div>
    );
};

export default Home;

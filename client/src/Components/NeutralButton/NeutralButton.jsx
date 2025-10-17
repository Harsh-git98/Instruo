import React from "react";
import { Button } from "antd";
import "./NeutralButton.css";

const NeutralButton = ({ text }) => {
    return (
        <button className="super-button">
            <span>{text}</span>
            <svg fill="none" viewBox="0 0 24 24" className="arrow">
                <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    d="M5 12h14M13 6l6 6-6 6"
                ></path>
            </svg>
        </button>
    );
};

export default NeutralButton;

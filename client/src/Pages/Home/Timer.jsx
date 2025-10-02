import React from "react";
import "./Timer.css";
import { useEffect, useState } from "react";

const Box = ({ time, label }) => (
    <div className="box">
        <div className="time">{time}</div>
        <div className="label">{label}</div>
    </div>
);

const Timer = () => {
    const targetDate = new Date("2025-10-31T23:59:59");
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="timer">
            <div className="heading">Coming Soon</div>
            <div className="countdown">
                <Box time={String(timeLeft.days).padStart(2, '0')} label="DAYS" />
                <Box time={String(timeLeft.hours).padStart(2, '0')} label="HOURS" />
                <Box time={String(timeLeft.minutes).padStart(2, '0')} label="MINUTES" />
                <Box time={String(timeLeft.seconds).padStart(2, '0')} label="SECONDS" />
            </div>
           
        </section>
    );
};

export default Timer;

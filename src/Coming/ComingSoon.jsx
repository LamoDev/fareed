import React, { useEffect, useState } from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 14);

        const interval = setInterval(() => {
            const now = new Date();
            const remainingTime = targetDate - now;

            if (remainingTime < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = String(Math.floor(remainingTime / (1000 * 60 * 60 * 24))).padStart(2, '0');
            const hours = String(Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((remainingTime % (1000 * 60)) / 1000)).padStart(2, '0');

            setCountdown({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="coming-soon-wrapper">
            <div className="coming-soon-card">
                <h1 className="coming-soon-header">Coming Soon</h1>
                <p className="coming-soon-message">We’re working hard to bring you something amazing!</p>
                <div className="countdown-timer">
                    {countdown.days}d : {countdown.hours}h : {countdown.minutes}m : {countdown.seconds}s
                </div>
                <footer className="coming-soon-footer">&copy; 2024 جميع الحقوق محفوظة. جميع الحقوق محفوظة لفريق فريد</footer>
            </div>
        </div>
    );
};

export default ComingSoon;
import React, { useState } from 'react';
// import './Alerts.css';

const Alerts = () => {
    const [alerts, setAlerts] = useState([
        { id: 1, type: 'success', message: 'This is a success alert!' },
        { id: 2, type: 'error', message: 'This is an error alert!' },
        { id: 3, type: 'warning', message: 'This is a warning alert!' },
        { id: 4, type: 'info', message: 'This is an info alert!' }
    ]);

    const removeAlert = (id) => {
        setAlerts(alerts.filter(alert => alert.id !== id));
    };

    return (
        <div className="alerts-container">
            {alerts.map(alert => (
                <div key={alert.id} className={`alert ${alert.type}`}>
                    <span>{alert.message}</span>
                    <button onClick={() => removeAlert(alert.id)}>&times;</button>
                </div>
            ))}
        </div>
    );
};

export default Alerts;

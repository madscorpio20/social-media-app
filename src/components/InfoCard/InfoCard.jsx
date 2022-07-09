import React from "react";
import "./InfoCard.css";
import { UilPen } from '@iconscout/react-unicons';

const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h3>Your Info</h3>
                <div>
                    <UilPen width='2rem' height='1.2rem' />
                </div>
            </div>
            <div className="info">
                <span><b>Lives in</b></span>
                <span> Mistsubishi, Japan</span>
            </div>
            <div className="info">
                <span><b>Works at</b></span>
                <span> Honda Motors</span>
            </div>
            <div className="info">
                <span><b>Status</b></span>
                <span> In Relationship</span>
            </div>
            <button className="button logout-btn">
                Logout
            </button>
        </div>
    );
}

export default InfoCard;
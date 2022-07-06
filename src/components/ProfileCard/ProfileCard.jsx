import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () =>{
    return(
        <div className="ProfileCard">
            <div className="ProfileImage">
                <img src = {Cover} alt="" />
                <img src = {Profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>Zendya MJ</span>
                <span>Senior UI/UX designer</span>
            </div>
            <div className="FollowStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,667</span>
                        <span>Following</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>My Profile</span>
        </div>
    );
}

export default ProfileCard;
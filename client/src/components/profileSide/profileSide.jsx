import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./profileSide.css";

const profileSide = ()=>{
    return(
        <div className="profileSide">
            <LogoSearch />
            <ProfileCard location="homePage" />
            <FollowersCard />
        </div>
    );
}

export default profileSide;
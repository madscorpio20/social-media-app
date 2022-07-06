import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./profileSide.css";

const profileSide = ()=>{
    return(
        <div className="profileSide">
            <LogoSearch />
            <ProfileCard />
        </div>
    );
}

export default profileSide;
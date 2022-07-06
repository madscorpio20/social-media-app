import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/profileSide";
const Home = ()=>{
    return(
        <div className="home">
            <ProfileSide />
            <div className="postSide">Posts</div>
            <div className="rightSide">Right side</div>
        </div>
    )
}

export default Home;
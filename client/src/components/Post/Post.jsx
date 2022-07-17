// import React , {useState} from "react";
import "./Post.css";
import { useSelector } from "react-redux";


import Comment from "../../img/comment.png";
import Heart from "../../img/like.png";
import Share from "../../img/share.png";
import NotLike from "../../img/notlike.png";


const Post = ({ data, id }) => {
    const { user } = useSelector((state) => state.authReducer.authData);

    return (
        <div className="Post">
            {/* <img src = {data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : "" } alt = 'no im'/> */}
            <img src = {data.image ? 'http://localhost:5000/images/' + data.image : "" } alt = 'no img'/>
            <div className="postReact">
                <img src={data.liked ? Heart : NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: "var(--gray)", fontSize: "12px" }}>{data.likes} Likes</span>
            <div className="detail">
                <span><b>{data.name}</b></span>
                <span>  {data.desc}</span>
            </div>
        </div>
    );
}

export default Post;
// import React , {useState} from "react";
import "./Post.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { likePost } from "../../api/PostRequest";


import Comment from "../../img/comment.png";
import Heart from "../../img/like.png";
import Share from "../../img/share.png";
import NotLike from "../../img/notlike.png";

const Post = ({ data, id }) => {
    const { user } = useSelector((state) => state.authReducer.authData);
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length)
    const handleLike = () => {
        likePost(data._id, user._id);
        setLiked((prev) => !prev);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    };

    return (

        <div className="Post">
            {/* <img src = {data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : "" } alt = 'no im'/> */}
            <img src={data.image ? 'http://localhost:5000/images/' + data.image : ""} alt='no img' />
            <div className="postReact">
                <img src={liked ? Heart : NotLike} alt="" style={{ cursor: 'pointer' }} onClick={handleLike} />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span style={{ color: "var(--gray)", fontSize: "12px" }}>{likes} Likes</span>
            <div className="detail">
                <span><b>{data.name}</b></span>
                <span>  {data.desc}</span>
            </div>
        </div>
    );
}

export default Post;
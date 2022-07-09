import React, { useState, useRef } from "react";
import "./PostShare.css"
import profileImg from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
    const [image, setImg] = useState(null);
    const imgRef = useRef();

    const onImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImg({
                image: URL.createObjectURL(img)
            })
        }
    }
    return (
        <div className="PostShare">
            <img src={profileImg} alt="" />
            <div>
                <input type="text" placeholder="What's happening" />
                <div className="postOptions">
                    <div className="option" style={{ color: "var(--photo)" }}
                        onClick={() => imgRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--schedule)" }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className="button ps-button">
                        Share
                    </button>
                    <div style={{ display: "none" }}>
                        <input type="file" name="myImg" ref={imgRef} onChange={onImgChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={()=>setImg(null)} />
                        <img src = {image.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare;
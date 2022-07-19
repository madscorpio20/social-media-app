import React, { useState, useRef } from "react";
import "./PostShare.css"
// import profileImg from "../../img/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage, uploadPost } from "../../Actions/UploadAction";



const PostShare = () => {

    const serverPublic = 'http://localhost:5000/images/';
    const { user } = useSelector((state) => state.authReducer.authData);
    const loading = useSelector((state) => state.postReducer.uploading);
    const dispatch = useDispatch();
    const [image, setImg] = useState(null);
    const imgRef = useRef();
    const desc = useRef();

    const onImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImg(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //post data
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };

        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
            console.log(newPost);
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        dispatch(uploadPost(newPost));
        resetShare();
    }
    // Reset Post Share
    const resetShare = () => {
        setImg(null);
        desc.current.value = "";
    };
    return (
        <div className="PostShare">
            <img
                src={
                    user.profilePicture
                        ? serverPublic + user.profilePicture
                        : serverPublic + "defaultProfile.png"
                }
                alt="ProfileImage"
            />
            <div>
                <input ref={desc} type="text" placeholder="What's happening" required />
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
                    <button className="button ps-button" onClick={handleSubmit} disabled={loading}>
                        {loading ? "uploading" : "Share"}
                    </button>
                    <div style={{ display: "none" }} >
                        <input type="file" name="myImg" ref={imgRef} onChange={onImgChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={() => setImg(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare;
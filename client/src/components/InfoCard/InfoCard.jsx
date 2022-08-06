// import React,{useState} from "react";
// import "./InfoCard.css";
// import { UilPen } from '@iconscout/react-unicons';
// import ProfileModal from "../ProfileModal/ProfileModal";

// const InfoCard = () => {
//     const [modalOpened, setModalOpened] = useState(false);
//     return (
//         <div className="InfoCard">
//             <div className="InfoHead">
//                 <h3>Your Info</h3>
//                 <div>
//                     <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
//                     <ProfileModal modalOpened={modalOpened}
//                         setModalOpened={setModalOpened} />
//                 </div>
//             </div>
//             <div className="info">
//                 <span><b>Lives in</b></span>
//                 <span> Mistsubishi, Japan</span>
//             </div>
//             <div className="info">
//                 <span><b>Works at</b></span>
//                 <span> Honda Motors</span>
//             </div>
//             <div className="info">
//                 <span><b>Status</b></span>
//                 <span> In Relationship</span>
//             </div>
//             <button className="button logout-btn">
//                 Logout
//             </button>
//         </div>
//     );
// }

// export default InfoCard;
import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../Actions/AuthAction.js";

const InfoCard = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);


    const handleLogOut = ()=> {
      dispatch(logout())
    }


  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : ("")}
      </div>

      <div className="info">
        {/* */}
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      <button className="button logout-btn" onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default InfoCard;
import { useState } from "react";
import ProfileUserInfo from "../components/ProfileSections/ProfileUserInfo";
import { UpdateUser } from "../components/ProfileSections/UpdateUser";

export const ProfilePage = () => {
  const[state,setState] = useState(false)
  if(state === true){
    return(
      <UpdateUser />
    )
  }
  return (
    <>
      <div className="max-h-screen">
        <div>
          <ProfileUserInfo />
        </div>
      </div>
    </>
  );
};

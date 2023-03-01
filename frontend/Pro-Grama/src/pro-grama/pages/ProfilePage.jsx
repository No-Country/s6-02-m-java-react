import { useState } from "react";
import ProfileUserInfo from "../components/ProfileSections/ProfileUserInfo";
import { UpdateUser } from "../components/ProfileSections/UpdateUser";

export const ProfilePage = () => {
  const[state,setState] = useState(false)
  const handleChange = ()=>{
    setState(!state);
  }
  if(state === true){
    return(
      <UpdateUser handleChange={handleChange} />
    )
  }
  return (
    <>
      <div className="max-h-screen">
        <div>
          <ProfileUserInfo handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

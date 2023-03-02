import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { setProfile } from "../../../store/auth/authSlice";
import Profile from '../../../assets/profile.png'

const ProfileUserInfo = ({handleChange}) => {
  const { token } = useSelector((state) => state.auth);
  const [user, setUser] = useState();
  const dispatch = useDispatch()

  const getUser = async () => {
    const { data } = await axios.get(
      "https://pro-grama-production.up.railway.app/user/me",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setUser(data.response);
    // console.log(data.response);
    dispatch(setProfile(data.response))
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="p-5 h-full w-full">
      <div className="flex justify-between w-fit">
        <div className=" flex">
          <div>
            <img src={Profile} alt="Profile" className="text-white h-13  w-12" />
          </div>
          <div className="row text-3xl px-4 text-white w-full">
            {user?.name} {user?.lastname}
            <div className="col text-white  text-lg">
              {user?.email}
            </div>
          </div>
        </div>
        <div>
          <BiEdit className="text-4xl text-white font-bold" onClick={handleChange} />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-white text-center mt-20">No hay nada en estos momentos</h1>
    </div>
  );
};

export default ProfileUserInfo;

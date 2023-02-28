import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { setProfile } from "../../../store/auth/authSlice";
const ProfileUserInfo = ({handleChange}) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const getUser = async () => {
    const { data } = await axios.get(
      "https://pro-grama-production.up.railway.app/user/me",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setUser(data.response);
    console.log(data.response);
    dispatch(setProfile(data.response))
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="border border-dashed border-red-400">
      <div className="flex justify-between w-fit">
        <div className="border border-dashed border-red-400 flex">
          <div className="rounded-full h-20 w-20 bg-gray-400" />
          <div className="row text-3xl px-4">
            {user?.name} {user?.lastname}
            <div className="col border border-dashed border-red-400 text-lg">
              {user?.email}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <BiEdit className="text-4xl" onClick={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default ProfileUserInfo;

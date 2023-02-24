import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";

export const ProfilePage = () => {
  const { token } = useSelector((state) => state.auth);
  const [user, setUser] = useState();

  const getUser = async () => {
    const { data } = await axios.get(
      "https://pro-grama-production.up.railway.app/user/me",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setUser(data.response);
    console.log(data.response);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
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
            <BiEdit className="text-4xl" />
          </div>
        </div>
      </div>
    </>
  );
};

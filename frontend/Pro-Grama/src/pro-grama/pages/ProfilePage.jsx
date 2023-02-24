import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

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
      <div>
        <div>
          <div>{user?.email}</div>
          <div></div>
        </div>
      </div>
    </>
  );
};

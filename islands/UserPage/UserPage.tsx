import { useEffect, useState } from "preact/hooks";
import UserContainer from "./User.tsx";
import { Logged_userName } from "../../utils/LogButton.ts";
const UserPage = () => {
  //   const [iUser, setUser] = useState("");
  //   useEffect(() => {
  //     const storageData: string | null = localStorage.getItem("userName");
  //     if (storageData) {
  //       Logged_userName.value = storageData;
  //       console.log(Logged_userName.value);
  //       setUser(storageData);
  //     }
  //   }, [iUser, Logged_userName.value]);
  return (
    <div>
      {Logged_userName.value === ""
        ? (
          <div className=" ">
            <h1
              className="text-2xl text-center font-semibold text-slate-400"
              style={{ textShadow: "4px 1px 1px #ffffff1c" }}
            >
              Have to Log in First
            </h1>
          </div>
        )
        : <UserContainer userName={Logged_userName.value} />}
    </div>
  );
};

export default UserPage;

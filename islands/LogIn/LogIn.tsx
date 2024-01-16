import MailIcon from "../../components/LogIn/mailIcon.tsx";
import UserIcon from "../../components/LogIn/userIcon.tsx";

import { useState } from "preact/hooks";
const LogIn = () => {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    setUserName(target.value);
  };

  const onSubmitCLick = (e: Event): void => {
    e.preventDefault();
    if (userName) {
      if (localStorage.getItem("userName")) {
        localStorage.clear();
        localStorage.setItem("userName", userName);
      } else {
        localStorage.setItem("userName", userName);
      }
    }
    setUserName("");
  };

  return (
    <div className=" flex sm:items-start flex-col gap-4 w-full  logIn">
      <div className="form_headLine">
        <h1>
          Log in <span className="">with your Github account</span>
        </h1>
      </div>
      <section className="form_section">
        <form
          method="post"
          className="flex gap-4 flex-col"
        >
          <div className="input_div">
            <UserIcon />
            <input
              type="text"
              name="userName"
              value={userName}
              id=""
              placeholder="Github UseName"
              onChange={handleUserNameChange}
              required
            />
          </div>
          <div className="input_div">
            <MailIcon />
            <input
              type="email"
              name="email"
              id=""
              placeholder="M@il-!d"
              value=""
              required
            />
          </div>

          <button type="submit" className="mt-3">
            <span onClick={onSubmitCLick}>Log In</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default LogIn;

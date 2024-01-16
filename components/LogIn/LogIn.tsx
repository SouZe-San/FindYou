import MailIcon from "./mailIcon.tsx";
import UserIcon from "./userIcon.tsx";

const LogIn = () => {
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
              value=""
              id=""
              placeholder="Github UseName"
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
            <span>Log In</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default LogIn;

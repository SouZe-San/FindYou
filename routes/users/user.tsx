import UserContainer from "../../islands/UserPage/User.tsx";

const User = () => {
  return (
    <div className=" md:px-12 p-4">
      <div className="greeting sm:mt-8">
        <h1 className="inline text-[2.6rem] md:text-[3.3rem]">Welcome</h1>{" "}
        <span>{"Souze-san"}</span>
      </div>

      <section className="user_section mt-4">
        <UserContainer userName="alfaArghya" />
      </section>
    </div>
  );
};

export default User;

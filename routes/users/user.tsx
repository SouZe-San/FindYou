import UserPage from "../../islands/UserPage/UserPage.tsx";
import UseName from "../../islands/UserPage/UseName.tsx";
const User = () => {
  return (
    <div className=" md:px-12 p-4">
      <div className="greeting sm:mt-8">
        <h1 className="inline text-[2.6rem] md:text-[3.3rem]">Welcome</h1>{" "}
        <UseName />
      </div>

      <section className="user_section mt-4">
        <UserPage />
      </section>
    </div>
  );
};

export default User;

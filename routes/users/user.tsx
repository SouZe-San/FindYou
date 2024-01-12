import UserContainer from "../../islands/UserPage/User.tsx";

const eventUrl = "ANurag08";
const eventLength = async () => {
  const res = await fetch("/api/user/search", {
    method: "POST",
    body: JSON.stringify({ eventUrl }),
  });
  const data = await res.json();
  console.log("this is Client", data);
};

const User = () => {
  return (
    <div className=" md:px-12 p-4">
      <div className="greeting sm:mt-8">
        <h1 className="inline text-[2.6rem] md:text-[3.3rem]">Welcome</h1>{" "}
        <span>{"Souze-san"}</span>
      </div>

      <section className="user_section mt-4">
        <UserContainer userName="souze-san" />
      </section>
    </div>
  );
};

export default User;

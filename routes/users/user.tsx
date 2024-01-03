const User = () => {
  return (
    <div className="p-4">
      <div className="greeting sm:mt-8">
        <h1 className="inline text-[2rem] md:text-5xl">Welcome</h1>{" "}
        <span>{"${user name}"}</span>
      </div>
    </div>
  );
};

export default User;

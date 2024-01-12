import { useState } from "preact/hooks";

const InputBlock = () => {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    setUserName(target.value);
  };

  const handleSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();
    console.log(userName);
    const res = await fetch("/api/user/search", {
      method: "POST",
      body: JSON.stringify({ eventUrl: userName }),
    });
    const data = await res.json();
    console.log("this is Client", data);
  };

  return (
    <div className="w-full flex flex-row input_field  items-center">
      <div className="input md:w-1/3 ">
        <input
          type="text"
          placeholder="Wanted User's User name"
          value={userName}
          onChange={handleUserNameChange}
        />
      </div>
      <button className="ml-4 submit_btn" onClick={handleSubmit}>Find</button>
    </div>
  );
};

export default InputBlock;

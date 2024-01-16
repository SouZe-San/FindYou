import { useState } from "preact/hooks";
import { killer_userName } from "../../utils/LogButton.ts";
const InputBlock = () => {
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    setUserName(target.value);
  };

  const handleSubmit = (e: Event): void => {
    e.preventDefault();
    killer_userName.value = userName;
  };

  return (
    <div className="w-full flex flex-row input_field  items-center input_section">
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

// import InputBlock from "../../islands/InputBlock/InputBlock.tsx";
// import { killer_userName } from "../../utils/LogButton.ts";
// import UserContainer from "../../islands/UserPage/User.tsx";

import SearchPage from "../../islands/SearchPage/SearchPage.tsx";
export default function find_user() {
  return (
    <div className=" md:px-12 p-4">
      <div className="header">
        <h1>
          I will Find You ☠️
        </h1>
      </div>

      <SearchPage />
    </div>
  );
}

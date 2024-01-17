import InputBlock from "../InputBlock/InputBlock.tsx";
import UserContainer from "../UserPage/User.tsx";
import { killer_userName } from "../../utils/LogButton.ts";
import { FunctionComponent, h } from "preact";
function UserNotFind() {
  return (
    <div className="md:px-12 p-4">
      <div className="user_section mt-4">
        <h1 className="text-2xl text-center">GIve the Name of Killer</h1>
      </div>
    </div>
  );
}
const SearchPage: FunctionComponent = () => {
  return (
    <>
      <section className="input_field mt-4 flex flex-col  w-full">
        <InputBlock />
      </section>

      <section class="Poster_section">
        {killer_userName.value.trim() === ""
          ? <UserNotFind />
          : <UserContainer userName={killer_userName.value} />}
      </section>
    </>
  );
};

export default SearchPage;

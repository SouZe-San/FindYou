import SearchPage from "../../islands/SearchPage/SearchPage.tsx";
import { FunctionComponent, h } from "preact";

// interface FindUserProps {}

const find_user: FunctionComponent = () => {
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
};
export default find_user;

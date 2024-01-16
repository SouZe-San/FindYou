import { useEffect } from "preact/hooks";
import { Logged_userName } from "../../utils/LogButton.ts";
const NavLogSec = () => {
  useEffect(() => {
    const storageData: string | null = localStorage.getItem("userName");
    if (storageData) {
      Logged_userName.value = storageData;
    }
  }, [Logged_userName.value]);
  return (
    <section className="bottom_section">
      {Logged_userName.value === ""
        ? "Are You not Admin ?"
        : "Want to Change ?"}

      <a href="/login">
        <span className="auth_link cursor-pointer ">
          become One
        </span>
      </a>
    </section>
  );
};

export default NavLogSec;

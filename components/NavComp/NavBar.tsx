import NavButton from "../../islands/NavButton/NavButton.tsx";
import NavLogSec from "../../islands/NavLogIn/NavLogSec.tsx";
// import { useSignal } from "@preact/signals";
// Interface for NavItem
interface NavItem {
  name: string;
  before_bg: string;
  href: string;
  icon_url: string;
}
const NavBar = ({ nav_route }: { nav_route: string }) => {
  // const active_item = useSignal(0);
  const nav_items: NavItem[] = [
    {
      name: "Home",
      before_bg: "before:bg-[#fc15ab]",
      href: "/",
      icon_url: "/assets/nav_icon/home.svg",
    },
    {
      name: "Watashi",
      before_bg: "before:bg-cyan-400",
      href: "/users/user",
      icon_url: "/assets/nav_icon/user.svg",
    },
    {
      name: "FindU",
      before_bg: "before:bg-[#04ff96]",
      href: "/users/find_user",
      icon_url: "/assets/nav_icon/detective.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-14 h-full NavBar_section ">
      {/* //* ----------------- Title ----------------- */}
      <div className="logo_section">
        <h1>FindYou</h1>
      </div>

      {/* //* ---------------- Navigation ---------------- */}

      <nav>
        {nav_items.map((item: NavItem, index: number) => (
          <NavButton
            key={index}
            name={item.name}
            before_bg={item.before_bg}
            icon_url={item.icon_url}
            href={item.href}
            nav_route={nav_route}
          />
        ))}
      </nav>

      {/* //* ---------- LogIn -----------*/}
      <NavLogSec />
    </div>
  );
};

export default NavBar;

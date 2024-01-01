import NavButton from "../../islands/NavButton/NavButton.tsx";
// import { useSignal } from "@preact/signals";

// Interface for NavItem
interface NavItem {
  name: string;
  before_bg: string;
  href: string;
}
const NavBar = ({ nav_route }: { nav_route: string }) => {
  // const active_item = useSignal(0);
  const nav_items: NavItem[] = [
    {
      name: "Home",
      before_bg: "before:bg-[#fc15ab]",
      href: "/",
    },
    {
      name: "Watashi",
      before_bg: "before:bg-cyan-400",
      href: "/users/user",
    },
    {
      name: "FindU",
      before_bg: "before:bg-[#04ff96]",
      href: "/users/find_user",
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
            // index={index}
            // active_item={active_item}
            href={item.href}
            nav_route={nav_route}
          />
        ))}
      </nav>

      {/* //* ---------- LogIn -----------*/}
      <section className="bottom_section">
        Are You not Admin?
        <span className="auth_link cursor-pointer ">
          become One
        </span>
        {
          /*

        -> 1. github google account
        -> 2. Github user name

         */
        }
      </section>
    </div>
  );
};

export default NavBar;

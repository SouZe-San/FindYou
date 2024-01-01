// import { Signal } from "@preact/signals";

interface NavButtonProps {
  name: string;
  before_bg: string;
  href: string;
  nav_route: string;
  // icon: string;
  // index: number;
  // active_item: Signal<number>;
}

/* lassName={navProps.active_item.value === navProps.index
          ? active_class
          : non_active_class}
*/

const NavButton = (navProps: NavButtonProps) => {
  const active_class = `nav_items ${navProps.before_bg} active`;
  const non_active_class = `nav_items ${navProps.before_bg}`;

  return (
    <a href={navProps.href} onClick={() => false}>
      <div
        className={navProps.href === navProps.nav_route
          ? active_class
          : non_active_class}
      >
        {" "}
        <div className="nav_button">
          {/* ICON */}
          {navProps.name}
        </div>
      </div>
    </a>
  );
};

export default NavButton;

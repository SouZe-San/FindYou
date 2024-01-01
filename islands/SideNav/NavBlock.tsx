import NavBar from "../../components/NavComp/NavBar.tsx";
import { Ref } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
interface NavBarProps {
  navRef: Ref<HTMLDivElement> | undefined;
  nav_route: string;
}

const NavBlock = ({ navRef, nav_route }: NavBarProps) => {
  return (
    <div
      className="flex-none w-1/5 min-w-[250px] h-full navBlock"
      ref={navRef}
    >
      <NavBar nav_route={nav_route} />
    </div>
  );
};

export default NavBlock;

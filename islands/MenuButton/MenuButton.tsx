import { useState } from "preact/hooks";
// import { navRef } from "../../utils/nav.ts";
import {
  AnyComponent,
  Ref,
} from "https://esm.sh/v128/preact@10.19.2/src/index.js";
interface NavBarProps {
  navRef: {
    current: HTMLDivElement | null;
  } | undefined;
}
const MenuButton = ({ navRef }: NavBarProps) => {
  const [SlideOut, setSlideOut] = useState(false);

  const slideTheNav = () => {
    if (window.innerWidth <= 760) {
      if (!SlideOut) {
        // Nav Come out
        if (navRef?.current) {
          navRef.current.style.transform = "translateX(0)";
        }
        setSlideOut(true);
      } else {
        // nav goes in
        if (navRef?.current) {
          navRef.current.style.transform = "translateX(-100%)";
        }
        setSlideOut(false);
      }
    }
  };

  const menu_icon = "/menu_icon/hamburger_menu.svg";

  const close_icon = "/menu_icon/cross_icon.svg";
  const menuButtonStyle = {
    width: "2rem",
    marginRight: "2rem",
    padding: "4px 3px",
    aspectRatio: "4/3",
    borderRadius: "4px",
  };
  return (
    <div
      className="cursor-pointer border"
      onClick={slideTheNav}
      style={menuButtonStyle}
    >
      <img
        src={SlideOut ? close_icon : menu_icon}
        alt="Menu Icon"
      />
    </div>
  );
};

export default MenuButton;

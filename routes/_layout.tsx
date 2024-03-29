import { PageProps } from "$fresh/server.ts";
import NavBlock from "../islands/SideNav/NavBlock.tsx";
import MenuButton from "../islands/MenuButton/MenuButton.tsx";
import { useRef } from "preact/hooks";

// import some value
export default function Layout(props: PageProps) {
  //
  const navRef = useRef(null);
  return (
    <div class="layout w-full h-full flex">
      <NavBlock navRef={navRef} nav_route={props.route} />

      <div className="grow flex flex-col view_block">
        <div className="mobile_header_section">
          <div className="blur-bg"></div>
          <div className="flex justify-between items-center relative">
            <h1
              style={{
                fontSize: "2.5rem",
                padding: "0rem 1rem",
                fontFamily: "'Neonderthaw', cursive",
              }}
            >
              FindYou
            </h1>
            <MenuButton navRef={navRef} />
          </div>
        </div>
        <section className="main_editable_section sm:pt-4 px-4 pt-20">
          <props.Component />
        </section>
      </div>
    </div>
  );
}

import LogInPlate from "../components/LogIn/LogIn.tsx";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const userName: string | undefined = form.get("userName")?.toString();

    // Add email to list.
    if (userName) {
      if (localStorage.getItem("userName")) {
        localStorage.clear();
        localStorage.setItem("userName", userName);
      } else {
        localStorage.setItem("userName", userName);
      }
    }
    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", "/users/user");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

const login = () => {
  return (
    <div className="lg:px-12 md:px-12 p-4 ">
      <img
        src="/assets/Github_Vector_Art.png"
        alt="top Image"
        className="absolute right-0 md:w-[25rem] w-[20rem] -z-10"
      />

      <div className="main_form_platform  sm:px-2 sm:py-12 mt-20">
        <div className="blur_card flex sm:flex-row flex-col p-8">
          <div className="img_side md:w-[40%] sm:w-4/12 w-full ">
            <img src="/assets/space1.jpeg" alt="input--img" />
          </div>

          <LogInPlate />
        </div>
      </div>
      <img
        src="/assets/github_icon.png"
        alt="Bottom Image"
        className="absolute bottom-0 left-0 -z-10 sm:block hidden blur"
      />
    </div>
  );
};

export default login;

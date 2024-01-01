import Tech_node from "../Tech_box/Tech_node.tsx";

const Intro = () => {
  return (
    <div class="p-8 flex flex-col  items-center relative">
      <div className="text-5xl head_container sm:mt-8">
        <h1 className="Intro_head bg_header ">
          What Am I?{" "}
          <span className=" ml-12 bg_header_ExtraLine">What Am I For?</span>
        </h1>
        <h1 className="Intro_head main_header">What Am I? 🥸 What Am I For?</h1>
      </div>

      <div className="bg_img_section absolute flex justify-between w-full">
        <img
          className="relative -z-10 img_eye"
          src="/assets/bg_Right_redeye.png"
          alt="FUCKING RED eyes"
        />
        <img
          className="relative -z-10 img_eye"
          src="/assets/bg_Left_redeye.png"
          alt="FUCKING RED eyes"
        />
      </div>

      <h3 className="w-full  description">
        <p>
          <span className="px-4"></span>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime, eveniet ullam! Nesciunt tempore, distinctio
          praesentium natus assumenda recusandae porro unde illum atque,
          molestias maiores excepturi doloribus doloremque quae, beatae at ?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
          assumenda sequi est nemo voluptates, voluptas reiciendis perferendis
          voluptatem tenetur ducimus explicabo,
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          deleniti optio debitis voluptatum quasi voluptatem vitae vel nobis?
        </p>
        <br />
        <p>
          <span className="mx-4"></span>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Officiis, nobis dolorem repudiandae, in distinctio
          amet quisquam at beatae numquam voluptatum accusantium consectetur
          natus cupiditate reiciendis reprehenderit dolor, voluptatem fuga.
          Autem cum totam voluptatem soluta fugiat, a dolorem perferendis ea,
          nemo dolorum odio quibusdam eaque nisi nostrum magnam repellat amet
          minus.
        </p>
      </h3>

      <section className="self-start">
        <div class="Intro_tech">
          <ul>
            <li>What Tech Use for?{"  "}🎮</li>
          </ul>
        </div>

        <h3 className="Tech_desc description">
          Hello I am Souze and I am a Full Stack Developer , who design and
          create this website for you to use and enjoy.
        </h3>

        <div className="TechBox">
          <Tech_node />
        </div>

        {
          /*

        Deno - write something
        Preact - write something
        Fresh - write something
        Tailwind - write something
        Ts - write something
        */
        }
      </section>

      <a href="/users/user">
        <button class="border goBtn">Get Started</button>
      </a>
    </div>
  );
};

export default Intro;
